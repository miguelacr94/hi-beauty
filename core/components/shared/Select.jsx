import { forwardRef, useEffect, useId, useState } from "react";
import FieldErrorMessage from "./FieldErrorMessage";

const Select = forwardRef(
  (
    {
      dot,
      error,
      disabled = false,
      autoFocus = false,
      placeholder,
      className = "",
      initialValue = "none",
      onChange,
      readOnly,
      label,
      required = true,
      items = [],
      ...rest
    },
    ref
  ) => {
    const [defaultValue, setDefaultValue] = useState("none");
    const id = useId();

    useEffect(() => {
      console.log(initialValue);
      const val = items.find((i) => i.name == initialValue);
      if (val) {
        setDefaultValue(val.id);
      }
    }, [initialValue, items]);

    return (
      <div className="flex flex-col items-start justify-center space-y-1">
        <FieldErrorMessage message={error?.message} />
        {label && (
          <label className="text-sm font-semibold text-muted" htmlFor={id}>
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={id}
          aria-required={dot}
          aria-invalid={!!error}
          className={`px-2 py-2 min-w-[200px] rounded-md outline-none border border-muted border-opacity-20 focus-within:border-opacity-30 duration-300 ${className}`}
          disabled={disabled}
          placeholder={placeholder}
          autoFocus={autoFocus}
          value={defaultValue}
          readOnly={readOnly}
          required={required}
          onChange={(e) => onChange?.(e.target.value)}
          {...rest}
        >
          <option value="none">Seleccione una opción</option>
          {items.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
