import { Request, Response } from "express";
import FindAllAddressService from "services/address/v1/FindAllAddressService";

export default class FindAllAddressController {
    async handle(req: Request, res: Response) {
        const data = await new FindAllAddressService().execute();
        res.status(200).json(data);
    }   
}