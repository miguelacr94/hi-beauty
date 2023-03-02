const TableRow = ({ "data-key": dataKey, className = "", children }) => {
  return (
    <tr
      className={`${
        dataKey % 2 != 0 ? "bg-white" : "bg-gray-100"
      } text-black text-sm w-full ${className}`}
    >
      {children}
    </tr>
  );
};

export default TableRow;
