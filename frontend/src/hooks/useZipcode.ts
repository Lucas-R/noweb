import { api } from "@libs/axios";
import { useQuery } from "@tanstack/react-query";
import type { ZipcodeProps } from "@schemas/ZipcodeSchema";

export async function fetchZipcode(zipcode: string): Promise<ZipcodeProps> {
  const { data } = await api.get(`/${zipcode}/json/`);
  return data;
}

export function useZipcode(zipcode: string) {
  return useQuery<ZipcodeProps>({
    queryKey: ["zipcode", zipcode],
    queryFn: () => fetchZipcode(zipcode),
    enabled: !!zipcode,
    staleTime: 1000 * 60 * 5
  });
}