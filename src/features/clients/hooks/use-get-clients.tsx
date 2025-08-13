import { apiGet } from "@/lib/api";
import type { TClientsResponse } from "@/types/clients";

import { useQuery } from "@tanstack/react-query";

import { useSearchParams } from "react-router-dom";

export interface ISetSearchParams {
  page?: string;
  perPage?: string;
}

export function useGetClients() {
  const [searchParams, setSearchParams] = useSearchParams();

  const PAGE_URL = searchParams.get("page") ?? "1";
  const PER_PAGE_URL = searchParams.get("perPage") ?? "16";

  const { data, isLoading, refetch } = useQuery<TClientsResponse>({
    queryKey: ["users", PAGE_URL, PER_PAGE_URL],
    queryFn: () =>
      apiGet<TClientsResponse>(`/users?page=${PAGE_URL}&limit=${PER_PAGE_URL}`),
  });

  const setSearchPagination = ({ page, perPage }: ISetSearchParams) => {
    setSearchParams((prev) => {
      prev.set("page", page ?? PAGE_URL);
      prev.set("perPage", perPage ?? PER_PAGE_URL);
      return prev;
    });
  };

  return {
    clients: data?.clients,
    isLoadingClients: isLoading,
    refetchClients: refetch,
    setSearchPagination,
    totalPagesClients: data?.totalPages ?? 0,
    currentPageClients: data?.currentPage ?? 0,
  };
}
