import TableHeaders from "./TableHeaders";

const TableBase = ({ headers = [], children, className = "" }) => {
  return (
    <div
      className={`relative flex flex-col w-full px-4 pb-4 space-y-4 overflow-x-auto bg-white rounded-lg shadow-sm max-h-[65vh] animate-fadeIn scrollbar-hide ${className}`}
    >
      <table className="w-full text-sm text-left text-gray-500">
        {headers.length > 0 && <TableHeaders heads={headers} />}
        {children}
      </table>
    </div>
  );
};

export default TableBase;
