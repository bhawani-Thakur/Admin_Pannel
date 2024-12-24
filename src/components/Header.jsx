import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";

function Header() {
  const userData = useSelector((state) => state.root.auth.userData);
  const dispatch = useDispatch();
  useEffect(()=>{},[])
  return (
    <div className="app-header d-flex align-items-center">
      {/* <!-- Toggle buttons start --> */}
      <div className="d-flex">
        <button
          className="btn btn-primary me-2 toggle-sidebar"
          id="toggle-sidebar"
        >
          <i className="bi bi-chevron-left fs-5"></i>
        </button>
        <button className="btn btn-primary me-2 pin-sidebar" id="pin-sidebar">
          <i className="bi bi-chevron-left fs-5"></i>
        </button>
      </div>


      {/* <!-- Toggle buttons end --> */}

      {/* <!-- App brand sm start --> */}
      <div className="app-brand-sm d-md-none d-sm-block">
        <Link to="#">
          <img
            src="/assets/images/logo-sm.svg"
            className="logo"
            alt="Bootstrap Gallery"
          />
        </Link>
      </div>
      {/* <!-- App brand sm end --> */}

      {/* <!-- App header actions start --> */}
      <div className="header-actions">
        <div className="d-lg-block d-none me-2">
          {/* <!-- Search container start --> */}
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search" />
            <button className="btn btn-outline-primary" type="button">
              <i className="bi bi-search fs-5"></i>
            </button>
          </div>
          {/* <!-- Search container end --> */}
        </div>
        {/* Removed Portion */}

        {/* Removed Portion */}
        <div className="dropdown ms-3">
          <Link
            className="dropdown-toggle d-flex p-2 py-3"
            to="#!"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="bi bi-bell fs-2 lh-1"></i>
          </Link>
          <div className="dropdown-menu dropdown-menu-end shadow">
            <div className="dropdown-item">
              <div className="d-flex py-2 border-bottom">
                <img
                  src="/assets/images/user.png"
                  className="img-4x me-3 rounded-3"
                  alt="Admin Theme"
                />
                <div className="m-0">
                  <h5 className="mb-1 fw-semibold">Sophie Michiels</h5>
                  <p className="mb-1">Membership has been ended.</p>
                  <p className="small m-0 text-primary">Today, 07:30pm</p>
                </div>
              </div>
            </div>
            <div className="dropdown-item">
              <div className="d-flex py-2 border-bottom">
                <img
                  src="/assets/images/user2.png"
                  className="img-4x me-3 rounded-3"
                  alt="Admin Theme"
                />
                <div className="m-0">
                  <h5 className="mb-1 fw-semibold">Sophie Michiels</h5>
                  <p className="mb-1">Congratulate, James for new job.</p>
                  <p className="small m-0 text-primary">Today, 08:00pm</p>
                </div>
              </div>
            </div>
            <div className="dropdown-item">
              <div className="d-flex py-2">
                <img
                  src="/assets/images/user1.png"
                  className="img-4x me-3 rounded-3"
                  alt="Admin Theme"
                />
                <div className="m-0">
                  <h5 className="mb-1 fw-semibold">Sophie Michiels</h5>
                  <p className="mb-2">Lewis added new schedule release.</p>
                  <p className="small m-0 text-primary">Today, 09:30pm</p>
                </div>
              </div>
            </div>
            <div className="border-top py-2 px-3 text-end">
              <Link to="#">View all</Link>
            </div>
          </div>
        </div>
        <div className="dropdown ms-3">
          {userData && (
            <Link
              id="userSettings"
              className="dropdown-toggle d-flex py-2 align-items-center text-decoration-none"
              to="#!"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="d-none d-md-block me-2">{userData?.name}</span>
              <img
                src="/assets/images/user.png"
                className="rounded-circle img-3x"
                alt="Bootstrap Gallery"
              />
            </Link>
          )}
          <div className="dropdown-menu dropdown-menu-end shadow">
            <Link className="dropdown-item d-flex align-items-center" to="#">
              <i className="bi bi-person fs-4 me-2"></i>Profile
            </Link>
            <Link
              className="dropdown-item d-flex align-items-center"
              to="settings.html"
            >
              <i className="bi bi-gear fs-4 me-2"></i>Account Settings
            </Link>
            <Link
              className="dropdown-item d-flex align-items-center"
              onClick={() => dispatch(logout())}
              to="/"
            >
              <i className="bi bi-escape fs-4 me-2"></i>
              Logout
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- App header actions end --> */}
    </div>
  );
}

export default Header;
