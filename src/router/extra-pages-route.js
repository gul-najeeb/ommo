// import { Routes, Route } from "react-router-dom";

//auth pages
import ConfirmMail from "../views/backend/Auth/ConfirmMail";
import LockScreen from "../views/backend/Auth/LockScreen";
import RecoverPassword from "../views/backend/Auth/RecoverPassword";
import SignIn from "../views/backend/Auth/SignIn";
import SignUp from "../views/backend/Auth/SignUp";

//ExtarPages
import Maintainance from "../views/backend/pages/Maintainance";
import Error404 from "../views/backend/pages/Error/Error404";
import Error500 from "../views/backend/pages/Error/Error500";
import CommingSoon from "../views/backend/pages/CommingSoon";

import BlankLayout from "../layouts/BlankLayout";

export const ExtraPages = [
  {
    path: "/auth",
    element: <BlankLayout />,
    children: [
      {
        path: "confirm-mail",
        element: <ConfirmMail />,
      },
      {
        path: "lock-screen",
        element: <LockScreen />,
      },
      {
        path: "recoverpw",
        element: <RecoverPassword />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/extra-pages",
    element: <BlankLayout />,
    children: [
      {
        path: "pages-error",
        element: <Error404 />,
      },
      {
        path: "pages-error-500",
        element: <Error500 />,
      },
      {
        path: "pages-comingsoon",
        element: <CommingSoon />,
      },
      {
        path: "pages-maintenance",
        element: <Maintainance />,
      },
    ],
  },
];
