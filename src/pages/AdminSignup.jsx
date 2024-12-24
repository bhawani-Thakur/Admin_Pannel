import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input, Select } from "../components";
import { getAllRolesApi } from "../actions/user.action";
import { useDispatch, useSelector } from "react-redux";
import { getRole } from "../redux/slices/userSlice";
import { setUserId } from "../redux/slices/registrationSlice";
import { SIGN_UP } from "../constants/constants";

const AdminSignup = () => {
  const [error, setError] = useState("");
  const roles = useSelector((state) => state.root.user.roles);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const baseUrl = import.meta.env.VITE_SERVER_URI;

  const submit = (data) => {
    // console.log(`data from frontend `, data);
    axios
      .post(`${baseUrl}${SIGN_UP}`, data)
      .then(function (res) {
        console.log(" First Response ");
        dispatch(setUserId(res.data.data[0]?.userid));
        navigate("otp-verification");
      })
      .catch(function (error) {
        console.log("Error Occured ", error);
        setError(error.response.data.message);
      });

    reset();
  };

  useEffect(() => {
    // console.log("useEffect Run ", Date.now());
    getAllRolesApi().then((res) => dispatch(getRole(res.data.data)));
  }, []);
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-4 col-lg-5 col-sm-6 col-12">
          {error && <p className="text-danger">{error}</p>}
          <form onSubmit={handleSubmit(submit)} className="my-5">
            <div className="border border-dark rounded-2 p-4 mt-5">
              <div className="login-form">
                <Link href="index.html" className="mb-4 d-flex">
                  <img
                    src="/assets/images/logo-dark.svg"
                    className="img-fluid login-logo"
                    alt="Nyke Admin"
                  />
                </Link>
                <h5 className="fw-light mb-5">Create your admin account.</h5>

                <div>
                  <Input
                    type="text"
                    label="Name"
                    className="mt-2"
                    {...register("name", { required: "Name is required" })}
                  />

                  {errors.email && (
                    <p className="text-danger">{errors.name.message}</p>
                  )}
                </div>

                {/* <div className="mb-3">
                  <label className="form-label">User Name</label>
                  <Input
                    type="text"
                    label="username"
                    className="mt-2"
                    {...register("username", {
                      required: "Username is required",
                    })}
                  />

                  {errors.email && (
                    <p className="text-danger">{errors.username.message}</p>
                  )}
                </div> */}

                <div>
                  <Input
                    type="email"
                    label="Email"
                    className="mt-2"
                    {...register("email", { required: "Email is required" })}
                  />

                  {errors.email && (
                    <p className="text-danger">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <Input
                    type="text"
                    label="Phone"
                    className="mt-2"
                    {...register("phone", {
                      required: " phone number is required",
                    })}
                  />

                  {errors.phone && (
                    <p className="text-danger">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <Input
                    type="password"
                    label="Password"
                    className="mt-2"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters long",
                      },
                      maxLength: {
                        value: 15,
                        message: "Password must be at most 15 characters long",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="text-danger">{errors.password.message}</p>
                  )}
                </div>
                <div className="mb-3">
                  {/* <Select
                    label="Status"
                    className="mb-5"
                    options={["active", "inactive"]}
                    {...register("status")}
                  /> */}
                  {/* <div className="form-floating" id="sel">
                    <select {...register("status")} className="form-select">
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                    <label className="fw-2" htmlFor="sel">
                      status
                    </label>
                  </div> */}

                  {errors.status && (
                    <p className="text-danger">{errors.status.message}</p>
                  )}
                </div>

                <div className="mb-2">
                 
                  {/* <Select
                    label="Role"
                    className="mb-5"
                    options={roles[0]}
                    {...register("role")}
                  /> */}

                  {errors.role && (
                    <p className="text-danger">{errors.role.message}</p>
                  )}
                </div>

                {/* <div className="d-flex align-items-center justify-content-between">
                  <div className="form-check m-0">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="terms_and_conditions"
                     defaultChecked 
                      {...register("acceptPolicies", {
                        required: "You must accept the Policies",
                      })}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="terms_and_conditions"
                    >
                      I agree to the terms and conditions
                    </label>
                    {errors.acceptPolicies && (
                      <p className="text-danger mt-1">{errors.acceptPolicies.message}</p>
                    )}
                  </div>
                </div> */}
                <div className="d-grid py-3 mt-4">
                  <Button type="submit" className="btn btn-lg btn-primary pt-2">
                    Signup
                  </Button>
                  {/* <button type="submit" className="btn btn-lg btn-primary">
                    Signup
                  </button> */}
                </div>
                <div className="text-center py-3">or Signup with</div>
                <div className="d-flex gap-2 justify-content-center">
                  <button type="submit" className="btn btn-outline-danger">
                    <i className="bi bi-google"></i>
                  </button>
                  <button type="submit" className="btn btn-outline-info">
                    <i className="bi bi-facebook"></i>
                  </button>
                </div>
                <div className="text-center pt-4">
                  <span>Already have an account?</span>
                  <Link
                    to="/admin/login"
                    className="text-blue text-decoration-underline ms-2"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminSignup;
