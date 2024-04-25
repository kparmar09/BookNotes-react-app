import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, LogoutButton } from "../";

function Header() {
  const navigate = useNavigate();
  const userStatus = useSelector((state) => state.auth.status);
  // const userStatus = true;

  const navItems = [
    {
      name: "Home",
      status: userStatus,
      url: "/home",
    },
    {
      name: "Login",
      status: !userStatus,
      url: "/login",
    },
    {
      name: "Sign up",
      status: !userStatus,
      url: "/signup",
    },
    {
      name: "My Notes",
      status: userStatus,
      url: "/mynotes",
    },
    {
      name: "Browse Books",
      status: userStatus,
      url: "/browse",
    },
  ];

  return (
    <header className="bg-gray-800 py-4 mb-5">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-white text-2xl font-semibold">Book Notes App</h1>
        </Link>
        <div className="flex justify-between items-center">
          {navItems.map((item) =>
            item.status ? (
              <div key={item.name} className="mx-5">
                <Button
                  onClick={() => {
                    navigate(item.url);
                  }}
                >
                  {item.name}
                </Button>
              </div>
            ) : null
          )}
          {userStatus && <LogoutButton />}
        </div>
      </div>
    </header>
  );
}

export default Header;
