import './table.css';

interface ColumnProps<T> {
  key?: string;
  name: string;
  render: (row: T) => JSX.Element | string | number;
}
interface TableProps<T extends { id: number }> {
  columns: ColumnProps<T>[],
  data: T[]
}

export function Table<T extends { id: number }>({ columns, data }: TableProps<T>) {
  return (<>
    <table>
      <thead>
        <tr>
          {columns.map(column => <th key={column.key ?? column.name}>{column.name}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr key={row.id}>
            {columns.map(column => <td key={row.id + (column.key ?? column.name)}>{column.render(row)}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  </>)
}