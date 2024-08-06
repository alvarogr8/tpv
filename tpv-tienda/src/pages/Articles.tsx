import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { Table } from "../components/Table";

export function Articles() {
  return (<Form>
    <Button onClick={() => { }}>Añadir articulo</Button>
    <Table columns={[
      { name: "Artículo", render: r => r.name },
      { name: "Tipo", render: r => r.type },
      { name: "Stock", render: r => r.stock },
      { name: "Devolucion", render: r => r.returnDate?.toLocaleDateString() },
    ]}
      data={[
        { id: 1, name: "goma milán", type: 'material' as 'book' | 'material', stock: 100, returnDate: new Date() },
        { id: 1, name: "Manolito Gafotas", type: 'book', stock: 100, returnDate: new Date() },
      ]} />
  </Form>)
}