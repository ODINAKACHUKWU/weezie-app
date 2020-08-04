import LoginPage from "../views/LoginPage";
import SignupPage from "../views/SignupPage";
import Dashboard from "../views/Dashboard";

export default {
  default: [
    {
      exact: true,
      path: "/",
      component: LoginPage,
    },
    {
      exact: true,
      path: "/signup",
      component: SignupPage,
    },
    {
      exact: true,
      path: "/dashboard",
      component: Dashboard,
    },
  ],
};
