import { addressRepo } from "@database/repositories/addressRepo";

export default class FindAllAddressService {
    async execute() {
        const [data, total] = await addressRepo.findAndCount();
        return { data, total };
    }
}