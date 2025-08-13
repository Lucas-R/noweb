import { addressRepo } from "@database/repositories/addressRepo";
import { AddressProps } from "@schemas/AddressSchema";

export default class CreateAddressService {
    async execute(payload: AddressProps) {
        const create = addressRepo.create(payload);
        const data = await addressRepo.save(create);
        return { message: `${data.id} created.` };
    }
}