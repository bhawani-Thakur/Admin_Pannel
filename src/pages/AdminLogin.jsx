import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input, Loader } from "../components";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";
import { LOG_IN } from "../constants/constants";
import { handleFormSubmit } from "../utils/apiHelper";

const AdminLogin = () => {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const baseUrl = import.meta.env.VITE_SERVER_URI;

  const submit = (data) => {
    setLoading(true); // Start the loader

    // Simulate loader running for exactly 3 seconds, regardless of backend response
    const loaderTimeout = new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000); // 3 seconds loader timeout
    });

    // Backend call for login
    const backendCall = handleFormSubmit(
      `${baseUrl}${LOG_IN}`,
      data,
      null,
      "POST"
    )
      .then(function (res) {
        console.log("Response from backend ", res);
        dispatch(login(res.data?.data[0].user));
        localStorage.setItem("token", res.data.data[0].token);
        const redirect = res.data.data[0].user.role_name.toLowerCase();

        // After 3 seconds, redirect to the dashboard if response is successful.
        navigate(`/${redirect}/dashboard`);
      })
      .catch(function (error) {
        console.log(error);
        console.log("Error Occured ", error.response.data.message);
        setError(error.response.data.message);
      });

    // Wait for both the loader timeout and backend call to finish
    Promise.all([loaderTimeout, backendCall]).finally(() => setLoading(false)); // Stop loading after both have completed

    // Reset form or any other necessary state
    reset();
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-4 col-lg-5 col-sm-6 col-12">
          <form noValidate onSubmit={handleSubmit(submit)} className="my-5">
            <div className="border border-dark rounded-2 p-4 mt-5">
              <div className="login-form">
                {/* <Link to="#" className="mb-4 d-flex">
                  <img
                    src="/assets/images/logo-dark.svg"
                    className="img-fluid login-logo"
                    alt="Nyke Admin"
                  />
                </Link> */}
                <h5 className="fw-light my-3"> Login with admin account.</h5>

                <div className="row">
                  {error && <p className="text-danger text-center">{error}</p>}
                </div>

                <div>
                  <Input
                    type="email"
                    label="Email"
                    className="mt-2"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Invalid email address",
                      },
                      maxLength: {
                        value: 256,
                        message: "Email address cannot exceed 256 characters",
                      },
                    })}
                  />

                  {errors.email && (
                    <p className="text-danger">{errors.email.message}</p>
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

                <div className="d-grid py-3 mt-4">
                  <Button type="submit" className="btn btn-lg btn-primary pt-2">
                    Login
                  </Button>
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
                  <span>Don't have an account?</span>
                  <Link
                    to="/admin/signup"
                    className="text-blue text-decoration-underline ms-2"
                  >
                    Signup
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Loader start={loading} />
    </div>
  );
};

export default AdminLogin;
