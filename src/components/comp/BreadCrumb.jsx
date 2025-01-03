import React from "react";
import { useLocation, Link } from "react-router-dom";

const Breadcrumb = () => {
  const { pathname } = useLocation();

  const urlSegments = pathname.split("/").filter((res) => res !== "");
  let breadcrumbTrail = "";

  const breadcrumbs = urlSegments.map((segment, index) => {
    if (segment === "admin") {
      breadcrumbTrail = "Home";
    } else {
      breadcrumbTrail += `/${segment}`;
    }

    return (
      <span key={index}>
        {index !== 0 && " / "}
        <Link to={breadcrumbTrail.replace("Home", "")}>
          {segment === "admin" ? "Home" : segment}
        </Link>
      </span>
    );
  });

  return <nav className="my-5 ps-4">{breadcrumbs}</nav>;
};

export default Breadcrumb;
