import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-white text-xl font-semibold mb-4">
          Connect with Us
        </h2>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 19v-1a7 7 0 0 0-7-7H8a7 7 0 0 0-7 7v1"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10V3m0 0l-4 4m4 0l4-4M12 10l-4 4m4-4l4 4"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 16.01a6.02 6.02 0 0 1-4.24-10.26 6.02 6.02 0 0 1 8.48 8.48A6.02 6.02 0 0 1 16 16.01zM12 14l-4 4m0 0l-4-4m4 4V10"
              ></path>
            </svg>
          </a>
        </div>
        <p className="text-gray-400 mt-4">&copy; 2024 Book Notes App</p>
      </div>
    </footer>
  );
}

export default Footer;
