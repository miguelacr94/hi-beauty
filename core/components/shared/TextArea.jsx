import { forwardRef, useId } from "react";
import FieldErrorMessage from "./FieldErrorMessage";

const TextArea = forwardRef(
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
      label,
      ...rest
    },
    ref
  ) => {
    const id = useId();
    return (
      <div className="flex flex-col items-start justify-center w-full space-y-1">
        <FieldErrorMessage message={error?.message} />
        {label && (
          <label className="text-sm font-semibold text-muted" htmlFor={id}>
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          aria-required={dot}
          aria-invalid={!!error}
          className={`px-2 w-full py-1 rounded-md outline-none border border-muted border-opacity-10 focus-within:border-opacity-30 duration-300 ${className}`}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          autoFocus={autoFocus}
          defaultValue={initialValue}
          {...rest}
        />
      </div>
    );
  }
);

TextArea.displayName = "TextArea";

export default TextArea;
