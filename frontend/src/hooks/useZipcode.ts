import { zipcodeapi } from "@libs/axios";
import { useQuery } from "@tanstack/react-query";
import type { ZipcodeProps } from "@schemas/ZipcodeSchema";

export async function fetchZipcode(zipcode: string): Promise<ZipcodeProps | null> {
  const isValidZipcode = /^\d{5}-?\d{3}$/.test(zipcode);

  if(!isValidZipcode) return null;

  const { data } = await zipcodeapi.get(`/${zipcode.replace(/^(\d{5})(\d{3})$/, "$1-$2")}/json/`);
  return data;
}

export function useZipcode(zipcode: string) {
  return useQuery<ZipcodeProps | null>({
    queryKey: ["zipcode", zipcode],
    queryFn: () => fetchZipcode(zipcode),
    enabled: !!zipcode,
    staleTime: 1000 * 60 * 5
  });
}