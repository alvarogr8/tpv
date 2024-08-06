import { Button } from "../components/Button";
import { Table } from "../components/Table";

export function Purchases() {

  return (<>
    <Button title="Añadir Compra" onClick={() => { }} />
    <Button title="Importar Compra" onClick={() => { }} />
    <Table columns={[
      { name: "Referencia", render: r => r.ref },
      { name: "Distribuidor", render: r => r.supplier },
      { name: "Fecha devolución", render: r => r.dateReturn },
    ]}
      data={[
        { id: 1, ref: "123", supplier: "Azeta", dateReturn: "2024-08-15" },
        { id: 2, ref: "456", supplier: "Marlu", dateReturn: "2024-09-20" }
      ]}
    />
  </>)
}