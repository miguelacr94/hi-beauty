import SearchField from "../SearchField";

const TableTools = ({ useSearch = false, title, children }) => {
  if (!useSearch && !title)
    throw new Error("title must be provided if you're not using search field");

  return (
    <div className="flex items-center justify-between space-x-4">
      {useSearch ? (
        <SearchField />
      ) : (
        <h2 className="text-lg font-light text-gray-800">{title}</h2>
      )}
      {children}
    </div>
  );
};

export default TableTools;
