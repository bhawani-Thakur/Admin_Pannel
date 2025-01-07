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

  return (
    <div className="mx-3">
      <nav className="fw-light fs-5 py-3 px-3">{breadcrumbs}</nav>
    </div>
  );
};

export default Breadcrumb;
