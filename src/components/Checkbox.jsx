import React, { forwardRef, useId } from "react";

const Checkbox = ({ label, value, ...props }, ref) => {
  const id = useId();
  return (

    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="checkbox"
        id={id}
        {...props}
        ref={ref}
        value={value}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default forwardRef(Checkbox);
