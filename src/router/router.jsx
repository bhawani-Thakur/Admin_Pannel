import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import {
  AdminSignup,
  PageNotFound,
  AdminLogin,
  Users,
  EditUser,
  Dashboard,
  AddVendor,
} from "../pages";
import AdminLayout from "../../AdminLayout";

import { Authentication } from "../components";

const authStatus = !!localStorage.getItem("token");

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Admin Routes */}
      <Route path="/" element={<Navigate to="/admin/login" />} />

      <Route path="/admin">
        {/* Login Route without Layout */}
        <Route
          path="login"
          element={
            <Authentication redirectTo={"/admin/dashboard"}>
              <AdminLogin />
            </Authentication>
          }
        />
        <Route path="signup" element={<AdminSignup />} />

        {/* Routes using Admin Layout */}

        <Route element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />

          {/* Nested User Routes */}
          <Route path="users">
            <Route path="" element={<Users />} />
            <Route path="edit-user/:userId" element={<EditUser />} />
            <Route path="add-vendor" element={<AddVendor />} />
          </Route>
        </Route>
      </Route>

      {/* Catch-all route for unmatched paths */}
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);

{
  /* <Route path="edit-user/:userid" element={<EditUser />} />
   */
}

{
  /* <Route path="user"/>
          <Route path="add-vendor" element={<AddVendor />} />
          <Route path="edit-user/:user" element={<EditUser />} /> */
}
