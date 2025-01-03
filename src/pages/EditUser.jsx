import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { Input, Button, SelectInput, Loader, Select } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { UPDATE_USER_DETAILS } from "../constants/constants";
import { getAllRolesApi } from "../actions/user.action";
import { setRole } from "../redux/slices/userSlice";
import { handleFormSubmit } from "../utils/apiHelper";

function EditUser() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.root.user.users);
  // console.log(users)
  const roles = useSelector((state) => state.root.user.roles[0]);

  const user = users?.find((user) => user._id === userId);
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: user,
  });

  useEffect(() => {
    getAllRolesApi().then((res) =>
      dispatch(() => {
        setRole(res.data);
      })
    );
    // Only reset if user data is available
    if (user) {
      reset(user);
    }
  }, [user, reset]); // Dependency array ensures this runs when user/role_details change

  const submit = (data) => {
    setLoading(true);
    const loaderTimeout = new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
    delete data._id;

    const userData = { id: userId, fieldsToUpdate: data };
    console.log(userData);
    const baseUrl = `${import.meta.env.VITE_SERVER_URI}${UPDATE_USER_DETAILS}`;

    const backendCall = handleFormSubmit(baseUrl, userData, token, "POST")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    // Run both promise in parallel.
    Promise.all([loaderTimeout, backendCall]).finally(() => setLoading(false));
  };

  reset();

  return (
    <>
      <div className="container">
        <div className="row text-center d-flex justify-content-center">
          <h1 className="fw-bold mt-2 text-capitalize">Edit User Form</h1>
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
                      {errors.first_name && (
                        <p className="text-danger">
                          {" "}
                          * {errors.first_name.message}
                        </p>
                      )}
                    </div>
                  </div>
                  {/* <div className="col-md-3 col-sm-12">
                    <div className="input-group mb-1">
                      <Input
                        type="text"
                        label="Last Name"
                        aria-label="name"
                        aria-describedby="basic-addon1"
                        {...register("last_name", {
                          required: "Last Name is required",
                        })}
                      />
                      {errors.last_name && (
                        <p className="text-danger">
                          {" "}
                          * {errors.last_name.message}
                        </p>
                      )}
                    </div>
                  </div> */}
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
                        // style={{
                        //   cursor: "not-allowed",
                        //   backgroundColor: "#f5f5f5",
                        // }}
                        // disabled={true}
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

                {/* <hr className="my-1" />
                <div className="row">
                  <div className="col-md-3 col-sm-12">
                    <div className=" input-group mb-1">
                      <Input
                        type="file"
                        label="Aadhar Card"
                        accept="image/*"
                        onChange={""}
                        {...register("aadhar", {
                          required: "Aadhar is required",
                          validate: {
                            fileSize: (fileList) => {
                              if (!fileList || fileList.length === 0)
                                return true; // Skip validation if no file is selected
                              const file = fileList[0]; // Access the uploaded file
                              return (
                                file.size <= 500 * 1024 ||
                                "Image size must be less than 500KB"
                              );
                            },
                          },
                        })}
                      />
                      {errors.aadhar && (
                        <p className="text-danger"> *{errors.aadhar.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <div className=" input-group mb-1">
                      <Input
                        type="file"
                        accept="image/*"
                        label="Pan Card"
                        {...register("pan", {
                          required: "Pan Card is required",
                          validate: {
                            fileSize: (fileList) => {
                              if (!fileList || fileList.length === 0)
                                return true; // Skip validation if no file is selected
                              const file = fileList[0]; // Access the uploaded file
                              return (
                                file.size <= 500 * 1024 ||
                                "Image size must be less than 500KB"
                              );
                            },
                          },
                        })}
                      />
                      {errors.pan && (
                        <p className="text-danger"> * {errors.pan.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <div className=" input-group mb-1">
                      <Input
                        type="file"
                        label="GST"
                        accept="image/*"
                        onChange={""}
                        {...register("gst", {
                          required: "GST is required",
                          validate: {
                            fileSize: (fileList) => {
                              if (!fileList || fileList.length === 0)
                                return true; // Skip validation if no file is selected
                              const file = fileList[0]; // Access the uploaded file
                              return (
                                file.size <= 500 * 1024 ||
                                "Image size must be less than 500KB"
                              );
                            },
                          },
                        })}
                      />
                      {errors.gst && (
                        <p className="text-danger"> * {errors.gst.message}</p>
                      )}
                    </div>
                  </div>
                </div> */}
                {/* select boxes */}
                <div className="row">
                  <h6 className="my-1 fw-semibold">Additionals</h6>
                </div>
                {/* {/* <hr className="my-1" /> */}
                <div className="row">
                  <div className="col-md-3 col-sm-12">
                    <div className="input-group mb-1">
                      <Select
                        className=""
                        label="Role"
                        options={roles}
                        {...register("role_name", {
                          required: "Role is required",
                        })}
                      ></Select>

                      {errors.role_name && (
                        <p className="text-danger">
                          {" "}
                          * {errors.role_name.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <div className="input-group mb-1">
                      <SelectInput
                        className=""
                        label="Status"
                        options={["pending", "active", "inactive"]}
                        {...register("status", {
                          required: "Status is required",
                        })}
                      ></SelectInput>
                      {errors.status && (
                        <p className="text-danger">
                          {" "}
                          * {errors.status.message}
                        </p>
                      )}
                    </div>
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
                      UPDATE
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

export default EditUser;
