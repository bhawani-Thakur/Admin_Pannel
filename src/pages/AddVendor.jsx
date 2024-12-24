import React from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "../components";

function AddVendor() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    console.log("Submit", data);

    reset();
  };
  return (
    <>
      <div className="container">
        <div className="row text-center d-flex justify-content-center">
          <h1 className="fw-bold m-3">Vendor Registration</h1>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col my-1 shadow px-3 mb-5 rounded py-3" id="content">
            <div className="container">
              <form onSubmit={handleSubmit(submit)}>
                <div className="row my-0 py-0">
                  <h5 className="fw-semibold">Company Contact Information</h5>
                </div>
                <hr className="my-1" />
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    {" "}
                    <div className="input-group mb-1">
                      <Input
                        type="text"
                        label="Business/Organization Name "
                        aria-label="name"
                        aria-describedby="basic-addon1"
                        {...register("organization", {
                          required: "Organization name is required",
                        })}
                      />
                      {errors.organization && (
                        <p className="text-danger">
                          {" "}
                          * {errors.organization.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <h5 className="mt-4 mb-1 fw-semibold">Contact Information</h5>
                <hr className="my-1" />
                <div className="row">
                  <div className="col-md-4 col-sm-12">
                    <div className="input-group mb-1">
                      <Input
                        type="text"
                        className="form-control"
                        label="First Name "
                        {...register("first_name", {
                          required: "First Name is required",
                        })}
                      />
                      {errors.first_name && (
                        <p className="text-danger">
                          * {errors.first_name.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="input-group mb-1">
                      <Input
                        type="text"
                        className=""
                        label="Last Name"
                        {...register("last_name", {
                          required: "Last Name is required",
                        })}
                      />
                      {errors.last_name && (
                        <p className="text-danger">
                          * {errors.last_name.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className=" input-group mb-1">
                      <Input
                        type="email"
                        className="form-control"
                        label="email"
                        {...register("email", {
                          required: "Email is required",
                        })}
                      />
                      {errors.aadhar && (
                        <p className="text-danger">
                          {" "}
                          * {errors.aadhar.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row my-0 py-0">
                  <h5 className="fw-semibold">Documents</h5>
                </div>
                <hr className="my-1" />
                <div className="row">
                  <div className="col-md-4 col-sm-12">
                    <div className="input-group mb-1">
                      <Input
                        type="text"
                        label="Aadhar Card Number "
                        {...register("aadhar", {
                          required: "Aadhar number  is required",
                        })}
                      />
                      {errors.aadhar && (
                        <p className="text-danger">* {errors.aadhar.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-12">
                    <div className="input-group mb-1">
                      <Input
                        type="text"
                        label="PAN Card Number"
                        {...register("pan_no", {
                          required: "PAN Number is required",
                        })}
                      />
                      {errors.pan_no && (
                        <p className="text-danger">
                          {" "}
                          * {errors.pan_no.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="input-group mb-1">
                      <Input
                        type="text"
                        className="form-control"
                        label="Phone Number"
                        {...register("mobile", {
                          required: "Mobile is required",
                          maxLength: {
                            value: 10,
                            message:
                              "Mobile must be at most 10 characters long",
                          },
                        })}
                      />
                      {errors.mobile && (
                        <p className="text-danger">* {errors.mobile.message}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row my-0 py-0">
                  <h5 className="fw-semibold">Address Information</h5>
                </div>
                <hr className="my-1" />
                <div className="row">
                  <div className="col-md-4 col-sm-12">
                    <div className="input-group mb-1">
                      <Input
                        type="text"
                        label="  Address "
                        {...register("address", {
                          required: "Address is required",
                        })}
                      />
                      {errors.address && (
                        <p className="text-danger">
                          {" "}
                          * {errors.address.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-12">
                    <div className="input-group mb-1">
                      <Input
                        type="text"
                        className="form-control"
                        label="  Address Line 2"
                        {...register(" _address", {
                          required: "  address is required",
                        })}
                      />
                      {errors._address && (
                        <p className="text-danger">
                          * {errors._address.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-12">
                    <div className="input-group mb-1">
                      <Input
                        type="text"
                        className="form-control"
                        label="Postal/Zip Code "
                        {...register("zip_code", {
                          required: "Zip Code is required",
                        })}
                      />
                      {errors.zip_code && (
                        <p className="text-danger">
                          * {errors.zip_code.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4 col-sm-12">
                    <div className="input-group mb-1">
                      <Input
                        type="text"
                        label="City"
                        {...register("city", { required: "City is required" })}
                      />
                      {errors.city && (
                        <p className="text-danger"> * {errors.city.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-12">
                    <div className="input-group mb-1">
                      <Input
                        type="text"
                        label="State/Province"
                        {...register("state", {
                          required: "State/Province is required",
                        })}
                      />
                      {errors.state && (
                        <p className="text-danger"> * {errors.state.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-12">
                    <div className="input-group mb-1">
                      <Input
                        type="text"
                        label="Country"
                        {...register("country", {
                          required: "Country is required",
                        })}
                      />
                      {errors.country && (
                        <p className="text-danger">
                          * {errors.country.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row my-0 py-0">
                  <h5 className="fw-semibold">Document Upload</h5>
                </div>
                <hr className="my-1" />

                <div className="row">
                  <div className="col-md-4 col-sm-12">
                    <div className="input-group mb-1">
                      <Input
                        type="file"
                        accept="image/*"
                        label="GST"
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
                      {errors.image && (
                        <p className="text-danger"> * {errors.image.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="input-group mb-1">
                      <Input
                        type="file"
                        label="FSSAI"
                        accept="image/*"
                        {...register("image", {
                          required: "Image is required",
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
                      {errors.image && (
                        <p className="text-danger"> * {errors.image.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="input-group mb-1">
                      <Input
                        type="file"
                        accept="image/*"
                        label="PAN"
                        {...register("pan", {
                          required: "PAN is required",
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
                      {errors.image && (
                        <p className="text-danger"> * {errors.image.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="col  mb-1"></div>
                </div>
                <h5 className="fw-semibold mt-4">Company Overview</h5>
                <hr className="my-1" />

                <h5 className="mt-4 mb-1 fw-semibold">Licensed?</h5>
                <div className="row m-1">
                  <div className="col-md-6 col-sm-12 d-flex ">
                    <div className=" form-check mb-1 m-1">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="license" // Ensure all options in the group have the same name
                        id="licenseYes"
                        value="yes" // Value for this option
                        {...register("license", {
                          required: "Please select whether licensed or not", // Validation rule
                        })}
                      />
                      <label className="form-check-label" htmlFor="licenseYes">
                        Yes
                      </label>
                    </div>

                    <div className=" form-check mb-1 m-1">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="license" // Ensure all options in the group have the same name
                        id="licenseNo"
                        value="no" // Value for this option
                        {...register("license", {
                          required: "Please select whether licensed or not", // Validation rule
                        })}
                      />
                      <label className="form-check-label" htmlFor="licenseNo">
                        No
                      </label>
                    </div>
                  </div>
                </div>
                {errors.license && (
                  <p className="text-danger"> * {errors.license.message}</p>
                )}

                <div className="row my-3 d-flex justify-content-center">
                  <div className="col-md-6 col-sm-12">
                    <Button
                      type="submit"
                      className="btn"
                      style={{
                        background: "#00378f",
                        //   width: "50%",
                        color: "#fff",
                        fontWeight: "600",
                      }}
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <Toaster position="top-center" reverseOrder={false} /> */}
    </>
  );
}

export default AddVendor;
