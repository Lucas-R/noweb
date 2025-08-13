import { addressRepo } from "@database/repositories/addressRepo";

export default class DeleteAddressService {
    async execute(id: string) {
        await addressRepo.delete(id);
        return { message: `${id} deleted.` };
    }
}