import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { login } from "../features/authSlice";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useNavigate, Link } from "react-router-dom";
import { Input, Button } from "./";

function Login() {
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginUser = async (data) => {
    setError("");
    console.log(data);
    try {
      const session = await authService.login(data);
      if (session) {
        await authService.getCurrentUser().then((userData) => {
          if (userData) {
            dispatch(login(userData));
            navigate("/");
          }
        });
      }
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-xl border">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit(loginUser)}>
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
            Sign in
          </Button>
        </form>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <p className="mt-3">
          Have you Registered ?{" "}
          <span className="underline text-blue-600">
            <Link to="/signup">Sign Up</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
