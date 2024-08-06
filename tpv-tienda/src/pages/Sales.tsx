import { useRef } from "react";
import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { SelectInput, TextInput } from "../components/Input";
import { Table } from "../components/Table";
import { Dialog } from "../components/Dialog";

export function Sales() {

  const dialogRef = useRef<HTMLDialogElement>(null)

  return (<>
    <Form>
      <fieldset>
        <legend>Cliente</legend>
        <Button>Buscar</Button>
        <TextInput label={{ position: 'before', text: 'Cliente' }} />
        <span>Saldo: </span>
      </fieldset>
      <fieldset>
        <legend>Tipo de venta</legend>
        <SelectInput options={[
          { value: 1, name: "Contado" },
          { value: 2, name: "Obsequio" }
        ]} />
        <input type="date" />
      </fieldset>
    </Form>
    <Button>Añadir venta ➕</Button>
    <Button onClick={() => dialogRef.current?.showModal()}>Aceptar venta ✅</Button>
    <Button>Cancelar venta 🚫</Button>
    <Dialog dialogRef={dialogRef}>
      <Button onClick={() => dialogRef.current?.close()}>❌</Button>
    </Dialog>
    <Table columns={[
      { name: 'ART.', render: (r) => r.id },
      { name: 'Número', render: () => <span>bla</span> },
      { name: 'Descripción', render: (r) => r.description },
      { name: 'Cantidad', render: () => <span>bla</span> },
      { name: 'DTO (%)', render: () => 0 },
      { name: 'Importe', render: () => <span>bla</span> },
      { name: 'Importe total', render: () => <span>bla</span> },
      { name: 'Iva', render: () => <span>bla</span> },
      { name: '', render: () => <div><span>❌</span><span>✏️</span></div> },
    ]} data={[
      { id: 13245, description: 'Goma milán' }
    ]} />
  </>)
}