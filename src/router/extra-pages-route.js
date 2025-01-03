// import { Routes, Route } from "react-router-dom";

//auth pages
import ConfirmMail from "../views/backend/Auth/ConfirmMail";
import LockScreen from "../views/backend/Auth/LockScreen";
import RecoverPassword from "../views/backend/Auth/RecoverPassword";
import SignIn from "../views/backend/Auth/SignIn";
import CreateCompany from "../views/backend/Auth/CreateCompany";
import CreateUser from "../views/backend/Auth/CreateUser";

//ExtarPages
import Maintainance from "../views/backend/pages/Maintainance";
import Error404 from "../views/backend/pages/Error/Error404";
import Error500 from "../views/backend/pages/Error/Error500";
import CommingSoon from "../views/backend/pages/CommingSoon";

import BlankLayout from "../layouts/BlankLayout";
import VerifyOtp from "../views/backend/Auth/VerifyOtp";
import AccountCreated from "../views/backend/pages/Extrapages/AccountCreated";
import EmailPhone from "../views/backend/Auth/EmailPhone";
import Test1 from "../components/test/Test1";
import ChangePassword from "../views/backend/Auth/change-password";

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
        path: "change-password",
        element: <ChangePassword />,
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
        path: "registeration",
        element: <EmailPhone />,
      },
      {
        path: "account-created",
        element: <AccountCreated />,
      },
      {
        path: "verify-otp",
        element: <VerifyOtp />,
      },
      {
        path: "create-company",
        element: <CreateCompany />,
      },
      {
        path: "create-user",
        element: <CreateUser />,
      },
    ],
  },
  {
    path: "/testing",
    element: <Test1/>
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
