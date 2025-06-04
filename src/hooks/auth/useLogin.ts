import React, { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { login } from "@/services/authService";

export function useLogin() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login(formData);

      if (response.status === 200) {
        const tokenBase64 = btoa(response.data.access_token);
        Cookies.set("authToken", tokenBase64, {
          expires: 7,
          secure: true,
          sameSite: "strict",
        });
        toast.success(response.message);
        router.push("/dashboard");
      } else {
        router.push("/login");
      }
    } catch (error) {
      toast.error("failed login");
      console.log(error);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
}
