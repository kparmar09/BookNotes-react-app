import React, { useState } from "react";
import { useForm } from "react-hook-form";
import authService from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../features/authSlice";
import { Input, Button } from "./";

function Signup() {
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerUser = async (data) => {
    setError("");
    console.log(data);
    try {
      const session = await authService.createAccount({
        email: data.email,
        password: data.password,
        name: data.name,
      });
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login(userData));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-xl border">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <form onSubmit={handleSubmit(registerUser)}>
          <div className="mb-4">
            <Input
              label="Full Name"
              type="text"
              id="name"
              name="name"
              {...register("name", {
                required: true,
              })}
            />
          </div>
          <div className="mb-4">
            <Input
              label="Email"
              type="text"
              id="email"
              name="email"
              {...register("email", {
                required: true,
              })}
            />
          </div>
          <div className="mb-4">
            <Input
              label="Password"
              type="password"
              id="password"
              name="password"
              {...register("password", {
                required: true,
              })}
            />
          </div>
          <Button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Sign up
          </Button>
        </form>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <p className="mt-3">
          Already Registered ?{" "}
          <span className="underline text-blue-600">
            <Link to="/login">Sign in</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
