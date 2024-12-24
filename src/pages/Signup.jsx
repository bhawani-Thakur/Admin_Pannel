import React, { useState } from "react";
import { Input, Button } from "../components/index";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import { SIGN_UP } from "../constants/constants";

function Signup() {
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const baseUrl = import.meta.env.VITE_SERVER_URI;
  console.log(baseUrl)

  const submit = (data) => {
    console.log(data);
    axios
      .post(`${baseUrl}${SIGN_UP}`, data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log("Error Occured ", error);
        setError(error.response.data.message);
      });

    reset();
  };

  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center mb-4"> SignUp Page</h2>
        {error && <div className="alert alert-danger text-center">{error}</div>}
        <form onSubmit={handleSubmit(submit)}>
          <Input
            type="text"
            label="name"
            className="mt-3"
            {...register("name", { required: " Name is required" })}
          />

          {errors.name && <p className="text-danger">{errors.name.message}</p>}
          <Input
            type="text"
            label="Email"
            className="mt-2"
            {...register("email", { required: "Email is required" })}
          />

          {errors.email && (
            <p className="text-danger">{errors.email.message}</p>
          )}

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

          <Button type="submit" className="btn btn-sm btn-primary pt-2">
            Sign Up
          </Button>
          <p className="mt-4 text-center fs-5 ">
            Already have an Account ?{" "}
            <Link className="text-decoration-none" to="/user/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Signup;
