const TableColumn = ({ children, className = "" }) => {
  return (
    <td
      className={`px-1 py-2 text-[14px] whitespace-nowrap  ${className}`}
    >
      <div className="w-full">{children}</div>
    </td>
  );
};

export default TableColumn;
