import React, { useId, forwardRef } from "react";

function Select({ label, className = "", options=[], ...props }, ref) {
  const id = useId();

  

  
  return (
    <div class="mb-3 w-100 m-1">
      
      <label class="form-label">{label}</label>
        <select  className={`form-control ${className}`} ref={ref} id={id} {...props}>
          <option value="null">Select a role</option> 
          {options.map((role, index) => (
            
            <option key ={index} value={role.id}>{role.role_name}</option>
          ))
         
          }
        </select>
        {/* <label className="fw-2" htmlFor={id}>{label}</label> */}
      
    </div>
  );
}

export default forwardRef(Select);
