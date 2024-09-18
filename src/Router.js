import { createBrowserRouter, Outlet } from "react-router-dom";

import MainLayout from "./components/MainLayout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import SignOut from "./pages/SignOut";
import Verify from "./pages/Verify";
import ContactUs from "./pages/ContactUs";
import CreateProfile from "./pages/CreateProfile";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";
import Detail from "./pages/Detail";

import NotFound404 from "./pages/NotFound404";

const routes = [
  {
    path: "/",
    errorElement: <NotFound404 />,
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signout",
        element: <SignOut />,
      },
      {
        path: "/verify",
        element: <Verify />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/createprofile",
        element: <CreateProfile />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/detail",
        element: <Detail />,
      },
      // {
      //   path: "/settings",
      //   element: <Settings />,
      // },
      // {
      //   path: "/reports",
      //   element: <Reports />,
      // },
      // {
      //   path: "/logout",
      //   element: <Logout />,
      // },
    ],
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  // {
  //   path: "/register",
  //   element: <Register />,
  // },
  // {
  //   path: "/reset-password",
  //   element: <ResetPassword />,
  // },
  // {
  //   path: "/contact-us",
  //   element: <ContactUs />,
  // },
];

const router = createBrowserRouter(routes);
export default router;
