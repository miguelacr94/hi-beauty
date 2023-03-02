const TableHeaders = ({ heads = [] }) => {
  return (
    <thead className="sticky top-0 bg-white">
      <tr>
        {heads.map((i) => (
          <th
            key={i}
            scope="col"
            className="px-6 py-3 text-sm font-normal text-gray-800 whitespace-nowrap"
          >
            {i}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeaders;
