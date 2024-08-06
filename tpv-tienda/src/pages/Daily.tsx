import { Table } from "../components/Table";

export function Daily() {
  return (<Table columns={[
    { name: "Fecha", render: r => r.date.toLocaleDateString() },
    { name: "Efectivo", render: r => r.cash },
    { name: "Tarjetas", render: r => r.cards },
    { name: "Total", render: r => r.total },
    { name: "Estado", render: r => r.open ? 'Pendiente' : 'Cerrada' },
  ]}
    data={[
      { id: 1, date: new Date(), cash: 1234, cards: 3454, total: 4556, open: false }
    ]}
  />)
}