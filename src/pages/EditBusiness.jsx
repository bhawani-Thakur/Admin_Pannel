import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Loader, Select } from "../components";
import { handleFormSubmit } from "../utils/apiHelper";
import { Link, useLocation } from "react-router-dom";
import { ADD_BUSINESS } from "../constants/constants";

const EditBusiness = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const { business } = location?.state || {};
  console.log("THE Business", business);

  // console.log("User in Add Business", user._id);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: business });

  const token = localStorage.getItem("token");
  // console.log("Token", token);

  const submit = (data) => {
    setLoading(true);
    console.log("Data", data);
    const loaderTimeout = new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000); // 3 seconds loader timeout
    });
    const businessData = { userid: business._id, ...data };
    console.log("User Data", businessData);
    const baseUrl = `${import.meta.env.VITE_SERVER_URI}${ADD_BUSINESS}`;
    const backendCall = handleFormSubmit(baseUrl, businessData, token, "POST")
      .then((res) => console.log(res))
      .catch((error) => {
        setError(error.response.data.message);
        console.log(error);
      });
    Promise.all([loaderTimeout, backendCall]).finally(() => setLoading(false));
    // reset();
  };

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-end px-3">
          <Link to="/admin/businesses" className="btn btn-sm btn-primary">
            Back to Businesses
          </Link>
        </div>
        <div className="row text-center d-flex justify-content-center">
          <h1 className="fw-bold m-3">Edit Business</h1>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col my-1 shadow px-3 mb-5 rounded py-3" id="content">
            <div className="container">
              <form onSubmit={handleSubmit(submit)}>
                {error && <p className="text-danger">{error}</p>}

                <div className="row my-0 py-0">
                  <h5 className="fw-semibold">Company Contact Information</h5>
                </div>
                <hr className="my-1" />
                <div className="row">
                  <div className="col-md-5 col-sm-12">
                    {" "}
                    <div className="input-group mb-1">
                      <Input
                        type="text"
                        label="Business/Organization Name "
                        {...register("businessName", {
                          required: "Business Name is required",
                        })}
                      />
                      {errors.businessName && (
                        <p className="text-danger">
                          {" "}
                          * {errors.businessName.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-12">
                    {" "}
                    <div className="input-group mb-1">
                      <Input
                        type="text"
                        label="Business Type"
                        {...register("businessType", {
                          required: "Business Type is required",
                        })}
                      />
                      {errors.businessType && (
                        <p className="text-danger">
                          {" "}
                          * {errors.businessType.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5 col-sm-12">
                    <div className="">
                      <label className="form-label">Company Description</label>
                      <textarea
                        className="form-control"
                        rows="3"
                        {...register("description", {
                          required: "Description is required",
                        })}
                      ></textarea>
                    </div>
                    {errors.description && (
                      <p className="text-danger">
                        * {errors.description.message}
                      </p>
                    )}
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
                        label="Contact Person "
                        {...register("contactPerson", {
                          required: "Contact Person  is required",
                        })}
                      />
                      {errors.contactPerson && (
                        <p className="text-danger">
                          * {errors.contactPerson.message}
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
                      {errors.email && (
                        <p className="text-danger"> * {errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className=" input-group mb-1">
                      <Input
                        type="text"
                        className="form-control"
                        label="Mobile"
                        {...register("phoneNumber", {
                          required: "Mobile is required",
                        })}
                      />
                      {errors.phoneNumber && (
                        <p className="text-danger">
                          {" "}
                          * {errors.phoneNumber.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* For Document Details  */}
                {/* <div className="row my-0 py-0">
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
                </div> */}
                <div className="row my-0 py-0">
                  <h5 className="fw-semibold">Address Information</h5>
                </div>
                <hr className="my-1" />
                <div className="row">
                  <div className="col-md-4 col-sm-12">
                    <div className="input-group mb-1">
                      <Input
                        type="text"
                        label=" Business Address "
                        {...register("businessAddress", {
                          required: "Business Address is required",
                        })}
                      />
                      {errors.businessAddress && (
                        <p className="text-danger">
                          {" "}
                          * {errors.businessAddress.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-12">
                    <div className="input-group mb-1">
                      <Input
                        type="text"
                        className="form-control"
                        label=" Business Address Line 2"
                        {...register("businessAddress_line2")}
                      />
                      {errors.businessAddress_line2 && (
                        <p className="text-danger">
                          * {errors.businessAddress_line2.message}
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
                        {...register("zipCode", {
                          required: "Zip Code is required",
                        })}
                      />
                      {errors.zipCode && (
                        <p className="text-danger">
                          * {errors.zipCode.message}
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
                        <p className="text-danger"> *{errors.city.message}</p>
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
                      {errors.gst_number && (
                        <p className="text-danger">
                          {" "}
                          * {errors.gst_number.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="input-group mb-1">
                      <Input
                        type="file"
                        label="FSSAI"
                        accept="image/*"
                        {...register("fssai", {
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
                      {errors.fssai_license && (
                        <p className="text-danger">
                          {" "}
                          * {errors.fssai_license.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="input-group mb-1">
                      <Input
                        type="file"
                        accept="image/*"
                        label="PAN"
                        {...register("pancard", {
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

                  <div className="col  mb-1"></div>
                </div>
                <h5 className="fw-semibold mt-4">Company Overview</h5>
                <hr className="my-1" />

                <h5 className="mt-4 mb-1 fw-semibold">is Vendor ?</h5>
                <div className="row m-1">
                  <div className="col-md-6 col-sm-12 d-flex ">
                    <div className=" form-check mb-1 m-1">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="vendorYes"
                        value={true} // Value for this option
                        {...register("isVendor", {
                          required: "Please select whether Vendor or not", // Validation rule
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
                        {...register("isVendor", {
                          required: "Please select whether vendor  or not", // Validation rule
                        })}
                      />
                      <label className="form-check-label" htmlFor="licenseNo">
                        No
                      </label>
                    </div>
                  </div>
                </div>
                {errors.isVendor && (
                  <p className="text-danger"> * {errors.isVendor.message}</p>
                )}

                <div className="row my-3 d-flex justify-content-center">
                  <div className="col-md-6 col-sm-12">
                    <Button
                      type="submit"
                      className="btn"
                      style={{
                        background: "#00378f",
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
        <Loader start={loading} />
      </div>
    </>
  );
};

export default EditBusiness;
