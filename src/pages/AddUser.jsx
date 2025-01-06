import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input, Button, Loader, Select, SelectInput } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { ADD_USER } from "../constants/constants";
import { getAllRolesApi } from "../actions/user.action";
import { setRole } from "../redux/slices/userSlice";
import { handleFormSubmit } from "../utils/apiHelper";
import { Link } from "react-router-dom";

function AddUser() {
  const dispatch = useDispatch();

  const roles = useSelector((state) => state.root.user.roles);
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getAllRolesApi().then((res) =>
      dispatch(() => {
        setRole(res.data);
      })
    );
  });

  const submit = (data) => {
    setLoading(true);
    const loaderTimeout = new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
    const baseUrl = `${import.meta.env.VITE_SERVER_URI}${ADD_USER}`;
    const backendCall = handleFormSubmit(baseUrl, data, token, "POST")
      .then((res) => console.log(res))
      .catch((err) => setError(err.response.data.message));

    // Run both promise in parallel.
    Promise.all([loaderTimeout, backendCall]).finally(() => setLoading(false));

    reset();
  };

  return (
    <>
      <div className="container">
        <div className="row text-center d-flex justify-content-center">
          <h1 className="fw-bold mt-2 text-capitalize"> ADD User Form</h1>
        </div>
        <div className="d-flex justify-content-end me-3">
          <Link to="/admin/users" className="btn btn-sm btn-primary">
            {" "}
            Go Back
          </Link>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col my-1 shadow p-3 mb-5 rounded" id="content">
            <div className="container">
              {error && <p className="text-danger text-center fs-4">{error}</p>}
              <form onSubmit={handleSubmit(submit)}>
                <div className="row">
                  <h6 className="fw-semibold"> Information</h6>
                </div>
                <hr className="my-1" />
                <div className="row">
                  <div className="col-md-3 col-sm-12">
                    <div className="input-group mb-1">
                      <Input
                        type="text"
                        label="Name"
                        aria-label="name"
                        aria-describedby="basic-addon1"
                        {...register("name", {
                          required: "Name is required",
                        })}
                      />
                      {errors.name && (
                        <p className="text-danger"> * {errors.name.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-12">
                    <div className=" input-group mb-1">
                      <Input
                        type="text"
                        className="form-control"
                        label="Phone Number"
                        {...register("phone", {
                          required: "Phone is required",
                          maxLength: {
                            value: 10,
                            message:
                              "Mobile must be at most 10 characters long",
                          },
                        })}
                      />
                      {errors.phone && (
                        <p className="text-danger">* {errors.phone.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <div className=" input-group mb-1">
                      <Input
                        type="email"
                        className="form-control"
                        label="Email"
                        {...register("email", {
                          required: "Email is required",
                        })}
                      />
                      {errors.email && (
                        <p className="text-danger"> * {errors.email.message}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 col-sm-12">
                    <div className="input-group mb-1">
                      <Input
                        type="password"
                        label="Password"
                        {...register("password", {
                          required: "Password is required",
                        })}
                      />
                      {errors.password && (
                        <p className="text-danger">
                          {" "}
                          * {errors.password.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <h6 className="my-1 fw-semibold">Additionals</h6>
                </div>
                <hr className="my-1" />
                <div className="row">
                  <div className="col-md-3 col-sm-12">
                    <div className="input-group mb-1">
                      <Select
                        className=""
                        label="Role"
                        options={roles}
                        {...register("role", {
                          required: "Role is required",
                        })}
                      ></Select>

                      {errors.role && (
                        <p className="text-danger"> * {errors.role.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <SelectInput
                      label="Status"
                      options={["active", "pending", "inactive"]}
                      {...register("status", {
                        required: "Status is required",
                      })}
                    ></SelectInput>
                  </div>
                </div>

                <div className="row d-flex justify-content-center my-2">
                  <div className="col-md-4 col-sm-12">
                    {" "}
                    <Button
                      type="submit"
                      className="btn"
                      style={{
                        background: "#00378f",
                        color: "#fff",
                        fontWeight: "600",
                      }}
                    >
                      SUBMIT
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Loader start={loading} />
      </div>
    </>
  );
}

export default AddUser;
