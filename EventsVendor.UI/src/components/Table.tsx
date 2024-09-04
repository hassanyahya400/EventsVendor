interface Props<T> {
  columns: (keyof T)[];
  data: T[];
}

const Table = <T,>({ columns, data }: Props<T>) => {
  return (
    <div className="mt-8 shadow-sm border rounded-lg overflow-x-auto">
      <table className="w-full table-auto text-sm text-left">
        <thead className="bg-gray-50 text-gray-600 font-medium border-b">
          <tr>
            {columns.map((column) => (
              <th key={String(column)} className="py-3 px-6">
                {String(column)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-600 divide-y">
          {data.map((row, idx) => (
            <tr key={idx}>
              {columns.map((column) => (
                <td
                  key={String(column)}
                  className="px-6 py-4 whitespace-nowrap"
                >
                  {String(row[column])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
