import React from "react";
import { Button, Input, Select } from "../components";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const Packages = () => {
  const roles = useSelector((state) => state.root.user?.roles);
  console.log(roles);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});

  const submit = (data) => {
    console.log("submit", data);
    //  Make an Axios Call and create a package.
  };
  return (
    <div>
      <div className="row">
        <h1 className="text-center my-3"> Add Packages</h1>
      </div>
      <div className="row">
        <hr />
      </div>

      <div className="row d-flex justify-content-center">
        <div className="col my-1 shadow p-3 mb-5 rounded" id="content">
          <div className="container">
            {/* {error && <p className="text-danger text-center fs-4">{error}</p>} */}
            <form onSubmit={handleSubmit(submit)}>
              <div className="row">
                <h6 className="fw-semibold"> Create a package</h6>
              </div>
              <hr className="my-1" />
              <div className="row d-flex  align-items-center ">
                <div className="col-md-3 col-sm-12 ">
                  <div className="input-group mb-1">
                    <Input
                      type="text"
                      label="Package Name"
                      aria-label="name"
                      aria-describedby="basic-addon1"
                      {...register("amount", {
                        required: "Package Name  is required",
                      })}
                    />
                    {errors.amount && (
                      <p className="text-danger"> * {errors.amount.message}</p>
                    )}
                  </div>
                </div>

                <div className="col-md-3 col-sm-12">
                  <div className=" input-group mb-1">
                    <Select
                      type="text"
                      className="form-control"
                      label="Role"
                      options={roles}
                      {...register("role", {
                        required: "Role is required",
                      })}
                    />
                    {errors.role && (
                      <p className="text-danger">* {errors.role.message}</p>
                    )}
                  </div>
                </div>

                <div className="col-md-3 col-sm-12">
                  <div className="input-group mb-1">
                    <Input
                      type="text"
                      label="Amount (Rs)"
                      aria-label="name"
                      aria-describedby="basic-addon1"
                      {...register("amount", {
                        required: "Amount  is required",
                      })}
                    />
                    {errors.amount && (
                      <p className="text-danger"> * {errors.amount.message}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="row d-flex justify-content-center my-2">
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
                      CREATE PACKAGE
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
