import React, { useState } from "react";
import { Button, Checkbox, Input } from "../components";
import { useForm } from "react-hook-form";

const AddAdminRoles = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");

  const submit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="row">
        <h1 className="text-center my-3"> Add Administrator Roles</h1>
      </div>
      <div className="row">
        <hr />
      </div>

      <div className="row d-flex justify-content-center ">
        <div className="col my-1 shadow p-3 mb-5 rounded" id="content">
          <div className="container mx-2">
            {error && <p className="text-danger text-center fs-4">{error}</p>}
            <form onSubmit={handleSubmit(submit)}>
              <div className="row">
                <h4 className="fw-semibold"> Create a Role</h4>
              </div>
              <hr className="my-1" />
              <div className="row">
                <div className="col-md-4 col-sm-12">
                  <div className="input-group mb-1">
                    <Input
                      type="text"
                      label="Role Name"
                      aria-label="role_name"
                      aria-describedby="basic-addon1"
                      {...register("role_name", {
                        required: "Role Name  is required",
                      })}
                    />
                    {errors.role_name && (
                      <p className="text-danger">
                        {" "}
                        * {errors.role_name.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="col-md-4 col-sm-12">
                  <div className="input-group mb-1">
                    <Input
                      type="text"
                      label="Role Value"
                      aria-describedby="basic-addon1"
                      {...register("role_value", {
                        required: "Role Value is required",
                      })}
                    />
                    {errors.role_value && (
                      <p className="text-danger">
                        {" "}
                        * {errors.role_value.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              {/* Permission rows */}

              <h4 className="fw-semibold"> Permissions</h4>
              <hr className="my-1" />
              <div className="row">
                <h6 title="include add , update and delete user. ">
                  User Management
                </h6>
                <div className="row">
                  {/* {console.log(errors.user_permission)} */}

                  <div className="col-md-3 col-sm-12">
                    <Checkbox
                      label="All"
                      value="all"
                      {...register("user_permission", {
                        required: "User Permission is required",
                      })}
                    />
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <Checkbox
                      label="Read only"
                      value="readonly"
                      {...register("user_permission", {
                        required: "User Permission is required",
                      })}
                    />
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <Checkbox
                      label="None"
                      value="none"
                      {...register("user_permission", {
                        required: "User Permission is required",
                      })}
                    />
                  </div>
                  {errors.user_permission && (
                    <p className="text-danger mt-1">
                      * {errors.user_permission.message}
                    </p>
                  )}
                </div>
                {/* Business Management */}
                <hr className="my-3" />
                <h6>Business Management</h6>
                <div className="row">
                  <div className="col-md-3 col-sm-12">
                    <Checkbox
                      label="All"
                      value="all"
                      {...register("business_permission", {
                        required: "business_permission is required",
                      })}
                    />
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <Checkbox
                      label="Read only"
                      value="read-only"
                      {...register("business_permission", {
                        required: "business_permission is required",
                      })}
                    />
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <Checkbox
                      label="None"
                      value="none"
                      {...register("business_permission", {
                        required: "business_permission is required",
                      })}
                    />
                  </div>
                </div>
                {errors.business_permission && (
                  <p className="text-danger mt-1">
                    * {errors.business_permission.message}
                  </p>
                )}
              </div>
              <div className="row mt-5">
                <div className="row d-flex justify-content-center my-3">
                  <div className="col-md-4 col-sm-12">
                    {" "}
                    <Button
                      type="submit"
                      className="btn text-center"
                      style={{
                        background: "#00378f",
                        color: "#fff",
                        fontWeight: "600",
                      }}
                    >
                      CREATE ROLE
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAdminRoles;
