import React from "react";
import { Header, Footer, Sidebar,BreadCrumb } from "./src/components";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function AdminLayout() {
  const userData = useSelector((state) => state.root.auth.userData);
  return (
    <>
      <div className="page-wrapper">
        {/* <!-- Main container start --> */}
        <div className="main-container">
          {/* <!-- Sidebar wrapper start --> */}
          <Sidebar userData={userData} />
          {/* <!-- Sidebar wrapper end --> */}

          {/* <!-- App container starts --> */}
          <div className="app-container">
            {/* <!-- App header starts --> */}
            <Header />
            {/* <!-- App header ends --> */}

            {/* <!-- App hero header starts --> */}
            <BreadCrumb title="User Dashboard" />
            {/* <!-- App Hero header ends --> */}

            {/* <!-- App body starts --> */}
            <Outlet />
            {/* <!-- App body ends --> */}

            {/* <!-- App footer start --> */}
            <Footer />
            {/* <!-- App footer end --> */}
          </div>
          {/* <!-- App container ends --> */}
        </div>
        {/* <!-- Main container end --> */}
      </div>
      {/* <!-- Page wrapper end --> */}
    </>
  );
}

export default AdminLayout;
