import type { TClient } from "@/types/clients";
import { Fragment, type ReactNode } from "react";

interface TClientsTableCardProps {
  client: TClient;
  children: ReactNode;
}

export default function ClientsTableCard({
  client,
  children,
}: TClientsTableCardProps) {
  return (
    <div className="bg-white w-full rounded-lg border border-gray-200 shadow-md p-4 flex flex-col justify-between">
      <div className="flex flex-col justify-center items-center">
        <h3 className="font-bold text-lg">{client.name}</h3>
        <p className="text-gray-700">
          Salário: R${" "}
          {(client.salary / 100).toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
        <p className="text-gray-700">
          Empresa: R${" "}
          {(client.companyValuation / 100).toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
      </div>
      <Fragment>{children}</Fragment>
    </div>
  );
}
