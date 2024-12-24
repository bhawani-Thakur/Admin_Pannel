import React from 'react';
import {useLocation ,Link} from "react-router-dom"

const Breadcrumb = () => {
  const {pathname} = useLocation();
  
  const urlSegments = pathname.split("/").filter((res) => res !== "");
  let breadcrumbTrail = "";

  const breadcrumbs = urlSegments.map((segment, index) => {
    if (segment === "admin") {
      breadcrumbTrail = "Home";
    } else {
      breadcrumbTrail += `/${segment}`;
    }

    return (
      
      <span  key={index}>
        {index !== 0 && " / "}
        <Link href={breadcrumbTrail}>{segment === "admin" ? "Home" : segment}</Link>
      </span>
    );
  });

  return <nav className='ms-5'>{breadcrumbs}</nav>;
};

export default Breadcrumb;