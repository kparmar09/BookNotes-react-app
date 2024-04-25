import React from "react";
import authService from "../../appwrite/auth";
import { logout } from "../../features/authSlice";
import { useDispatch } from "react-redux";

function LogoutButton() {
  const dispatch = useDispatch();

  const handleClick = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button
      className="mx-4 px-4 py-2 rounded-lg bg-red-600 text-white"
      onClick={handleClick}
    >
      Logout
    </button>
  );
}

export default LogoutButton;
