import { Request, Response } from "express";
import { AddressSchema } from "@schemas/AddressSchema";
import { addressRepo } from "@database/repositories/addressRepo";
import UpdateAddressService from "services/address/v1/UpdateAddressService";

export default class UpdateAddressController {
    async handle(req: Request, res: Response) {
        const id = req.params.id!;
        const payload = AddressSchema.safeParse(req.body);
        const find = await addressRepo.findOne({where: { id }});

        if(!find) { 
            res.status(404).json({ message: "Not found id." });
            return;
        }

        if(!payload.success) {
            res.status(400).json(payload.error.format());
        } else {
            const data = await new UpdateAddressService().execute(id, payload.data);
            res.status(201).json(data);
        }
    }
}
