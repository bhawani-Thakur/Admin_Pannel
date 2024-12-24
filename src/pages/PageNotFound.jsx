import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      {/* <!-- Container start --> */}
      <div className=" error-screen bg-dark">
        <div className="row justify-content-center">
          <div className="col-9">
            <div className="d-flex align-items-center justify-content-center vh-100">
              <div className="text-center text-white">
                <h1 className="error-title mb-3">404</h1>
                <h3 className="mb-5 fw-lighter lh-2">
                  We're sorry but it looks <br />
                  like that page doesn't exist anymore.
                </h3>
                <Link
                  to="/admin/dashboard"
                  className="btn btn-primary shadow px-5 py-3 fs-5"
                >
                  Go back to dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Container end --> */}
    </>
  );
}

export default PageNotFound;
