"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { useClientsContext } from "../context/clients-context";

export function ClientsPaginationTable() {
  const { setSearchPagination, totalPagesClients, currentPageClients } =
    useClientsContext();

  const pages: (number | "ellipsis")[] = [];

  pages.push(1);

  if (currentPageClients > 3) {
    pages.push("ellipsis");
  }

  if (currentPageClients > 2) {
    pages.push(currentPageClients - 1);
  }

  if (currentPageClients !== 1 && currentPageClients !== totalPagesClients) {
    pages.push(currentPageClients);
  }

  if (currentPageClients < totalPagesClients - 1) {
    pages.push(currentPageClients + 1);
  }

  if (currentPageClients < totalPagesClients - 2) {
    pages.push("ellipsis");
  }

  if (totalPagesClients > 1) {
    pages.push(totalPagesClients);
  }

  const handleClick = (page: number) => {
    if (page !== currentPageClients) {
      setSearchPagination({
        page: String(page),
      });
    }
  };

  return (
    <Pagination>
      <PaginationContent>
        {pages.map((page, idx) =>
          page === "ellipsis" ? (
            <PaginationItem key={`e-${idx}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                isActive={page === currentPageClients}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(page);
                }}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          )
        )}
      </PaginationContent>
    </Pagination>
  );
}
