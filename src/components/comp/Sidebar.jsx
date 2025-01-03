import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ userData }) {
  return (
    <div className="d-flex">
      <nav id="sidebar" className="sidebar-wrapper">
        {/* <!-- App brand starts --> */}
        <div className="app-brand px-3 py-3 d-flex align-items-center">
          <h1 className="text-light text-center"> CP</h1>
          {/* <img
            src="/assets/images/logo.svg"
            className="logo"
            alt="Bootstrap Gallery"
          /> */}
        </div>

        {/* <!-- App brand ends --> */}

        {/* <!-- Sidebar profile starts --> */}

        <div className="sidebar-user-profile">
          {/* <img
          src="/assets/images/user.png"
          className="profile-thumb rounded-2 p-2 d-lg-flex d-none"
          alt="Bootstrap Gallery"
        /> */}
          {/* <h5 className="profile-name lh-lg mt-2 text-truncate">
          {userData?.name}
        </h5> */}
          {/* <ul className="profile-actions d-flex m-0 p-0">
          <li>
            <Link to="#">
              <i className="bi bi-skype fs-4"></i>
              <span className="count-label"></span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="bi bi-dribbble fs-4"></i>
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="bi bi-twitter fs-4"></i>
            </Link>
          </li>
        </ul> */}
        </div>
        {/* <!-- Sidebar profile ends --> */}

        {/* <!-- Sidebar menu starts --> */}
        <div className="sidebarMenuScroll">
          <ul className="sidebar-menu">
            <li>
              <Link to="dashboard">
                <i className="bi bi-clipboard-data"></i>
                <span className="menu-text">DashBoard</span>
              </Link>
            </li>
            <li>
              <Link to="users">
                <i className="bi bi-person-fill"></i>
                <span className="menu-text">Users</span>
              </Link>
            </li>

            <li>
              <Link to="/admin/businesses">
                <i className="bi bi-columns-gap"></i>
                <span className="menu-text">Businesses</span>
              </Link>
            </li>
            <li className="treeview">
              <Link to="#!">
                <i className="bi bi-code-square"></i>
                <span className="menu-text">Forms</span>
              </Link>
              <ul className="treeview-menu">
                <li>
                  <Link to="form-inputs.html">Form Inputs</Link>
                </li>
                <li>
                  <Link to="form-checkbox-radio.html">
                    Checkbox &amp; Radio
                  </Link>
                </li>
                <li>
                  <Link to="form-file-input.html">File Input</Link>
                </li>
                <li>
                  <Link to="form-validations.html">Validations</Link>
                </li>
                <li>
                  <Link to="date-time-pickers.html">Date Time Pickers</Link>
                </li>
                <li>
                  <Link to="form-layouts.html">Form Layouts</Link>
                </li>
              </ul>
            </li>
            <li className="treeview">
              <Link to="#!">
                <i className="bi bi-window-sidebar"></i>
                <span className="menu-text">Invoices</span>
              </Link>
              <ul className="treeview-menu">
                <li>
                  <Link to="create-invoice.html">Create Invoice</Link>
                </li>
                <li>
                  <Link to="view-invoice.html">View Invoice</Link>
                </li>
                <li>
                  <Link to="invoice-list.html">Invoice List</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="tables.html">
                <i className="bi bi-border-all"></i>
                <span className="menu-text">Tables</span>
              </Link>
            </li>
            <li>
              <Link to="subscribers.html">
                <i className="bi bi-check-circle"></i>
                <span className="menu-text">Subscribers</span>
              </Link>
            </li>
            <li>
              <Link to="contacts.html">
                <i className="bi bi-wallet2"></i>
                <span className="menu-text">Contacts</span>
              </Link>
            </li>
            <li>
              <Link to="settings.html">
                <i className="bi bi-gear"></i>
                <span className="menu-text">Settings</span>
              </Link>
            </li>
            <li>
              <Link to="profile.html">
                <i className="bi bi-person-square"></i>
                <span className="menu-text">Profile</span>
              </Link>
            </li>
            <li className="treeview">
              <Link to="#!">
                <i className="bi bi-code-square"></i>
                <span className="menu-text">Cards</span>
              </Link>
              <ul className="treeview-menu">
                <li>
                  <Link to="cards.html">Cards</Link>
                </li>
                <li>
                  <Link to="advanced-cards.html">Advanced Cards</Link>
                </li>
              </ul>
            </li>
            <li className="treeview">
              <Link to="#!">
                <i className="bi bi-pie-chart"></i>
                <span className="menu-text">Graphs</span>
              </Link>
              <ul className="treeview-menu">
                <li>
                  <Link to="apex.html">Apex</Link>
                </li>
                <li>
                  <Link to="morris.html">Morris</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="maps.html">
                <i className="bi bi-pin-map"></i>
                <span className="menu-text">Maps</span>
              </Link>
            </li>
            <li>
              <Link to="tabs.html">
                <i className="bi bi-slash-square"></i>
                <span className="menu-text">Tabs</span>
              </Link>
            </li>
            <li>
              <Link to="modals.html">
                <i className="bi bi-terminal"></i>
                <span className="menu-text">Modals</span>
              </Link>
            </li>
            <li>
              <Link to="icons.html">
                <i className="bi bi-textarea"></i>
                <span className="menu-text">Icons</span>
              </Link>
            </li>
            <li>
              <Link to="typography.html">
                <i className="bi bi-explicit"></i>
                <span className="menu-text">Typography</span>
              </Link>
            </li>
            <li className="treeview">
              <Link to="#!">
                <i className="bi bi-upc-scan"></i>
                <span className="menu-text">Login/Signup</span>
              </Link>
              <ul className="treeview-menu">
                <li>
                  <Link to="login.html">Login</Link>
                </li>
                <li>
                  <Link to="signup.html">Signup</Link>
                </li>
                <li>
                  <Link to="forgot-password.html">Forgot Password</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="page-not-found.html">
                <i className="bi bi-exclamation-diamond"></i>
                <span className="menu-text">Page Not Found</span>
              </Link>
            </li>
            <li>
              <Link to="maintenance.html">
                <i className="bi bi-exclamation-octagon"></i>
                <span className="menu-text">Maintenance</span>
              </Link>
            </li>
            <li className="treeview">
              <Link to="#!">
                <i className="bi bi-code-square"></i>
                <span className="menu-text">Multi Level</span>
              </Link>
              <ul className="treeview-menu">
                <li>
                  <Link to="#!">Level One Link</Link>
                </li>
                <li>
                  <Link to="#!">
                    Level One Menu
                    <i className="bi bi-chevron-right"></i>
                  </Link>
                  <ul className="treeview-menu">
                    <li>
                      <Link to="#!">Level Two Link</Link>
                    </li>
                    <li>
                      <Link to="#!">
                        Level Two Menu
                        <i className="bi bi-chevron-right"></i>
                      </Link>
                      <ul className="treeview-menu">
                        <li>
                          <Link to="#!">Level Three Link</Link>
                        </li>
                        <li>
                          <Link to="#!">Level Three Link</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="#!">Level One Link</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* <!-- Sidebar menu ends --> */}
      </nav>
    </div>
  );
}

export default Sidebar;
