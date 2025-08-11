import { Navigate } from "react-router-dom";
import LoginForm from "../components/login-form";

export default function LoginPage() {
  const storedName = localStorage.getItem("teddy-open-finance:name");

  if (storedName) {
    return <Navigate to="/" replace />;
  }

  return <LoginForm />;
}
