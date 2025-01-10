import React, { useId, forwardRef } from "react";

function Input({ label, type = "text", className = "", ...props }, ref) {
  const id = useId();
  return (
    <div className="mb-3 w-100">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        className={`form-control ${className}`}
        id={id}
        ref={ref}
        {...props}
        placeholder={label}
      />
    </div>
  );
}

export default forwardRef(Input);
