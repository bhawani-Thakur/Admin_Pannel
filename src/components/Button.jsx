import React ,{forwardRef} from "react";

function Button({ children, type = "button", className="", ...props },ref) {
  return (
    <button type={type} className={`form-control btn-md btn-primary ${className}`} {...props}>
      {children}
    </button>
  );
}

export default forwardRef(Button);
