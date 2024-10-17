import { redirect } from "react-router-dom";
import { useAuth } from "../../context/auth.context";

// Loader function to protect routes
export const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return redirect("/login"); // Redirect to login if not authenticated
  }

  return null; // Proceed with rendering if authenticated
};
