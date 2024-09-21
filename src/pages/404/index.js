import React from "react";
import { Link } from "react-router-dom";

const NotFound404 = () => {
  return (
    <div className="grid items-center justify-center h-full px-6 py-24 bg-white">
      <div className="text-center">
        <p className="text-6xl font-semibold text-blue">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
        <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
        <div className="flex items-center justify-center mt-10 gap-x-6">
          <Link to="/">
            <button className="px-6 font-semibold btn btn-primary">Go back home</button>
          </Link>
          <Link to="/contactus" className="font-semibold">
            Contact support <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound404;
