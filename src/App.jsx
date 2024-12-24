import { useState } from "react";
import { Input, Button } from "./components";
import { useForm } from "react-hook-form";
function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  console.log(errors);
  const submit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Login Page</h2>

        <form onSubmit={handleSubmit(submit)}>
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
            Log In
          </Button>
        </form>
      </div>
    </>
  );
}

export default App;
