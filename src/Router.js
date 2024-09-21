import { createBrowserRouter, Outlet } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";

import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import SignOut from "./pages/auth/SignOut";
import Verify from "./pages/auth/Verify";
import ContactUs from "./pages/contactus";
import Account from "./pages/account";
import CreateProfile from "./pages/account/CreateProfile";
import Chat from "./pages/chat";
import NotFound404 from "./pages/404";

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
        element: <Account />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);
export default router;
