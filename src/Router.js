import { createBrowserRouter, Outlet } from "react-router-dom";

import MainLayout from "./components/MainLayout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import SignOut from "./pages/SignOut";
import Verify from "./pages/Verify";
import ContactUs from "./pages/ContactUs";
import CreateProfile from "./pages/CreateProfile";
import Account from "./pages/account";
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
        element: <Account />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/detail",
        element: <Detail />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);
export default router;
