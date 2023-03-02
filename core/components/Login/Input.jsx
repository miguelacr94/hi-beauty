import { forwardRef, useId } from "react";
import FieldErrorMessage from "../shared/FieldErrorMessage";

const LoginInput = forwardRef(
  (
    {
      dot,
      error,
      disabled = false,
      autoFocus = false,
      type = "text",
      placeholder,
      className = "",
      initialValue,
      readOnly,
      label,
      ...rest
    },
    ref
  ) => {
    const id = useId();

    return (
      <div className="flex flex-col items-start justify-center w-full space-y-1">
        <FieldErrorMessage message={error?.message} />
        <label
          id={id}
          className="text-sm font-medium leading-none text-gray-800"
        >
          {label}
        </label>
        <input
          type={type}
          ref={ref}
          id={id}
          aria-required={dot}
          aria-invalid={!!error}
          className={`bg-gray-50 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2 ${className}`}
          disabled={disabled}
          placeholder={placeholder}
          autoFocus={autoFocus}
          defaultValue={initialValue}
          readOnly={readOnly}
          {...rest}
        />
      </div>
    );
  }
);

LoginInput.displayName = "LoginInput";

export default LoginInput;
