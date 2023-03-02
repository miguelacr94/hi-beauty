const FieldErrorMessage = ({ message }) => {
  if (!message) return null;
  return (
    <div className="w-full text-xs text-red-500 whitespace-nowrap line-clamp-1 text-end">
      {message}
    </div>
  );
};

export default FieldErrorMessage;
