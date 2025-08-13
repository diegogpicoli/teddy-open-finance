import { useClientsContext } from "@/features/clients/context/clients-context";

import { Button } from "@/components/ui/button";
import ClientForm from "./client-form";
import { Modal } from "@/components/modal";
import { Fragment } from "react/jsx-runtime";

export default function CreateClientTable() {
  const { createUserModalRef } = useClientsContext();
  return (
    <Fragment>
      <Button
        onClick={() => createUserModalRef.current?.onChangeIsOpen()}
        className="w-full mt-5"
        variant="outline"
      >
        Criar cliente
      </Button>
      <Modal ref={createUserModalRef} title="Criar cliente:">
        <ClientForm />
      </Modal>
    </Fragment>
  );
}
