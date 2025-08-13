import {
  SelectContent,
  SelectInput,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useClientsContext } from "../context/clients-context";

export default function ClientsTableHeader() {
  const { clients, setSearchPagination } = useClientsContext();
  return (
    <div className="flex justify-between">
      <p className="text-sm md:text-lg">
        <span className="font-bold">{clients?.length}</span> clientes
        encontrados:
      </p>
      <div className="flex justify-center items-center gap-2">
        <p className="text-sm md:text-lg">Clientes por página: </p>
        <SelectInput
          onValueChange={(value) =>
            setSearchPagination({
              perPage: value,
            })
          }
        >
          <SelectTrigger className="w-[50px] !h-[25px] rounded-sm p-0 pl-1.5 pr-1 text-xs text-center">
            <SelectValue placeholder="16" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="16">16</SelectItem>
            <SelectItem value="20">20</SelectItem>
            <SelectItem value="24">24</SelectItem>
            <SelectItem value="28">28</SelectItem>
          </SelectContent>
        </SelectInput>
      </div>
    </div>
  );
}
