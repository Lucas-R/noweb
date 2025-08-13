import { connection } from "@database/config/connection";
import { Address } from "@database/entities/Addresses";
import { AddressProps } from "@schemas/AddressSchema";

export const addressRepo = connection.getRepository<AddressProps>(Address);