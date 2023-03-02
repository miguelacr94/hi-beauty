export const ArrowLeft = ({ size = "1em", className = "" }) => {
  return (
    <div>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height={size}
        width={size}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path>
      </svg>
    </div>
  );
};

export const ArrowRight = ({ size = "1em", className = "" }) => {
  return (
    <div>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height={size}
        width={size}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
      </svg>
    </div>
  );
};

export const ArrowBack = ({ size = "1em", className = "" }) => {
  return (
    <div>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height={size}
        width={size}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 8 8 12 12 16"></polyline>
        <line x1="16" y1="12" x2="8" y2="12"></line>
      </svg>
    </div>
  );
};
