import { Button } from "../components/Button";
import { Table } from "../components/Table";

export function Clients() {
  return (<>
    <Button title="Añadir Cliente" onClick={() => { }} />
    <Table columns={[
      { name: "Nombre", render: r => r.name },
      { name: "Telefono", render: r => r.phone },
      { name: "Direccion", render: r => r.address },
    ]}
      data={[
        { id: 1, name: "Alvaro", phone: "671639935", address: "Betica 44" },
        { id: 2, name: "Wanda", phone: "687659097", address: "Betica 44" }
      ]}
    />
  </>)
}