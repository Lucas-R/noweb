import { Request, Response } from "express";
import { addressRepo } from "@database/repositories/addressRepo";
import DeleteAddressService from "services/address/v1/DeleteAddressService";

export default class DeleteAddressController {
    async handle(req: Request, res: Response) {
        const id = req.params.id!;
        const find = await addressRepo.findOne({where: { id }});

        if(!find) { 
            res.status(404).json({ message: "Not found id." });
            return;
        }

        const data = await new DeleteAddressService().execute(id);
        res.status(201).json(data);
    }
}
