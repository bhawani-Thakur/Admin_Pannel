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
  AddUser,
  Businesses,
  AddBusiness,
  Packages,
  EditBusiness,
  AddAdminRoles,
} from "../pages";
import AdminLayout from "../../AdminLayout";
import { ProtectedRoute } from "../components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Redirect Root to Admin Login */}
      <Route path="/" element={<Navigate to="/admin/login" />} />

      <Route path="/admin">
        {/* Unprotected Routes */}
        <Route
          path="login"
          element={
            <ProtectedRoute isProtected={false}>
              <AdminLogin />
            </ProtectedRoute>
          }
        />
        <Route
          path="signup"
          element={
            <ProtectedRoute isProtected={false}>
              <AdminSignup />
            </ProtectedRoute>
          }
        />

        {/* Protected Routes */}
        <Route
          element={
            <ProtectedRoute isProtected={true}>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />

          {/* Nested Routes under Admin Layout */}
          <Route path="users">
            <Route path="" element={<Users />} />
            <Route path="edit-user/:userId" element={<EditUser />} />
            <Route path="add-user" element={<AddUser />} />
          </Route>

          {/* Nestes Routes for businesses */}
          <Route path="businesses">
            <Route path="" element={<Businesses />} />
            <Route path="add-business" element={<AddBusiness />} />
            <Route path="edit-business" element={<EditBusiness />} />
          </Route>
          <Route path="packages" element={<Packages />}></Route>

          <Route path="/admin/roles" element={<AddAdminRoles/>}></Route>
        </Route>
      </Route>

      {/* Catch-all Route */}
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);

export default router;
