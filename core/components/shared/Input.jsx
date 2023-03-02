import InputMask from "comigo-tech-react-input-mask";
import { forwardRef, useId } from "react";
import FieldErrorMessage from "./FieldErrorMessage";

const Input = forwardRef(
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
      max,
      ...rest
    },
    ref
  ) => {
    const id = useId();

    return (
      <div className={`flex flex-col items-start justify-center space-y-1 `}>
        <FieldErrorMessage message={error?.message} />
        {label && (
          <label className="text-sm font-semibold text-muted" htmlFor={id}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          aria-required={dot}
          aria-invalid={!!error}
          className={`px-2 py-2 min-w-[200px]  rounded-md outline-none border border-opacity-20 focus-within:border-opacity-30 duration-300 ${className} border-muted`}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          autoFocus={autoFocus}
          defaultValue={initialValue}
          readOnly={readOnly}
          maxLength={max}
          {...rest}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;

export const InputWithMask = forwardRef(
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
      mask = "",
      ...rest
    },
    ref
  ) => {
    const id = useId();

    return (
      <div className="flex flex-col items-start justify-center space-y-1">
        <FieldErrorMessage message={error?.message} />
        {label && (
          <label className="text-sm font-semibold text-muted" htmlFor={id}>
            {label}
          </label>
        )}
        <InputMask
          ref={ref}
          id={id}
          mask={mask}
          maskPlaceholder=""
          aria-required={dot}
          aria-invalid={!!error}
          className={`px-2 py-1 rounded-md outline-none border border-muted border-opacity-10 focus-within:border-opacity-30 duration-300 ${className}`}
          type={type}
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

InputWithMask.displayName = "InputWithMask";
