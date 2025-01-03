// import React from "react";

// const Loader = () => {
//   return (
//     <div className="d-flex justify-content-center">
//       <div className="spinner-border" role="status">
//         <span className="sr-only">Loading...</span>
//       </div>
//     </div>
//   );
// };

// export default Loader;
import React, { useEffect, useState } from "react";
// import "../../public/assets/css/componentcss/loader.css";

export default function Loader({ start }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (start) {
      setIsVisible(true); // Show the loader when start is true

      const timer = setTimeout(() => {
        setIsVisible(false); // Hide the loader after 3 seconds
      }, 3000);

      return () => clearTimeout(timer); // Cleanup the timer when component unmounts
    } else {
      setIsVisible(false); // Hide the loader immediately if start is false
    }
  }, [start]); // Runs whenever 'start' prop changes

  return (
    isVisible && (
      <div className="loader">
        <div className="spinner"></div>
      </div>
    )
  );
}
