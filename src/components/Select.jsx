import React, { useId, forwardRef } from "react";

function Select({ label, className = "", options = [], ...props }, ref) {
  const id = useId();

  return (
    <div className="mb-3 w-100">
      <label className="form-label" htmlFor={id}>{label}</label>
      <select
        className={`form-select ${className}`}
        ref={ref}
        id={id}
        {...props}
      >
        {options.map((role, index) => (
          <option key={index} value={role.id}>
            {role.role_name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default forwardRef(Select);
