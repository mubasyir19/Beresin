import React, { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

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
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BERESIN}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (response.ok) {
        const tokenBase64 = btoa(data.data.access_token);
        Cookies.set("appToken", tokenBase64, {
          expires: 7,
          secure: true,
          sameSite: "strict",
        });
        toast.success(data.message);
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
