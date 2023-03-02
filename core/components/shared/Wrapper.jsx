// This is used to limit the width of the content, to prevent it expands in large screens and center the content.
const Wrapper = ({
  children,
  className = "",
  maxScreen = "max-w-screen-2xl",
}) => {
  return (
    <div className="flex justify-center w-full h-full">
      <div className={`flex w-full ${maxScreen} ${className}`}>{children}</div>
    </div>
  );
};

export default Wrapper;
