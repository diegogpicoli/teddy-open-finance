import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  loginFormSchema,
  type TLoginFormSchema,
} from "../schemas/login-form-schema";
import { useNavigate } from "react-router-dom";

export function useLoginForm() {
  const navigate = useNavigate();
  const form = useForm<TLoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      name: "",
    },
  });

  const handleLogin = (data: TLoginFormSchema) => {
    localStorage.setItem("teddy-open-finance:name", data.name);
    navigate("/");
  };

  return {
    form,
    handleLogin,
  };
}
