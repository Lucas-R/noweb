import { Request, Response } from "express";
import { AddressSchema } from "@schemas/AddressSchema";
import CreateAddressService from "services/address/v1/CreateAddressService";

export default class CreateAddressController {
    async handle(req: Request, res: Response) {
        const payload = AddressSchema.safeParse(req.body);
        if(!payload.success) {
            res.status(400).json(payload.error.format());
        } else {
            const data = await new CreateAddressService().execute(payload.data);
            res.status(201).json(data);
        }
    }
}
