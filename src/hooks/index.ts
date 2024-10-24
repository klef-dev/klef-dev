import useSWR from "swr";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3333";

export const useTrack = () => {
    const { data, error, isLoading } = useSWR<{ data?: Track }>("/api/track", fetcher);

    return { data: data?.data, error, isLoading };
};

const fetcher = (url: string) => fetch(`${API_URL}${url}`).then((res) => res.json());
