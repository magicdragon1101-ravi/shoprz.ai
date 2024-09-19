import React from "react";
import { Link } from "react-router-dom";

const NotFound404 = () => {
  return (
    <div className="grid h-full justify-center items-center bg-white px-6 py-24">
      <div className="text-center">
        <p className="text-6xl font-semibold text-blue">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
        <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link to="/">
            <button className="btn-primary font-semibold px-6">Go back home</button>
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
