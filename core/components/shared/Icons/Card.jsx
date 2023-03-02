const Card = ({ size = "1em", className = "" }) => {
  return (
    <div>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 16 16"
        height={size}
        width={size}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M14 3H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2z"
          clipRule="evenodd"
        ></path>
        <rect width="3" height="3" x="2" y="9" rx="1"></rect>
        <path d="M1 5h14v2H1z"></path>
      </svg>
    </div>
  );
};

export default Card;
