import { addressRepo } from "@database/repositories/addressRepo";
import { AddressProps } from "@schemas/AddressSchema";

export default class UpdateAddressService {
    async execute(id: string, payload: AddressProps) {
        await addressRepo.update(id, payload);
        return { message: `${id} updated.` };
    }
}