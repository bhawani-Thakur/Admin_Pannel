import React, { useId, forwardRef } from "react";

function SelectInput(
  {
    label,
    className = "",
    defaultValue,
    value,
    onChange,
    options = [],
    ...props
  },
  ref
) {
  const id = useId();

  return (
    <div className="mb-3 w-100 m-1">
      <label className="form-label">{label}</label>
      <select
        className={`form-select ${className}`}
        ref={ref}
        value={value}
        id={id}
        {...props}
        onChange={onChange}
      >
        {options.map((role, index) => (
          <option key={index} value={role}>
            {role}
          </option>
        ))}
      </select>
    </div>
  );
}

export default forwardRef(SelectInput);
