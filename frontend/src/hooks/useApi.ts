import { useEffect, useState } from "react";
import { api } from "@libs/axios";

type methods = "get" | "post" | "put" | "delete"; 

interface UseApiProps {
    endpoint: string
    method?: methods
}

export default function useApi<T>({ endpoint, method = "get" }: UseApiProps) {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<unknown>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    async function handleFetch(endpoint: string, method: methods) {
        try {
            const { data } = await api[method](`/${endpoint}`);
            setData(data);
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        handleFetch(endpoint, method);
    }, [endpoint, method]);

    return { data, error, isLoading };
}