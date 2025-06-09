import { registerAccount } from "@/services/authService";
import { RegisterAccountProps, RoleType } from "@/types/user";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export function useRegister() {
  const router = useRouter();

  const [formData, setFormData] = useState<RegisterAccountProps>({
    fullname: "",
    email: "",
    username: "",
    bio: "",
    role: "Member",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "role" ? (value as RoleType) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (
        !formData.fullname ||
        !formData.email ||
        !formData.username ||
        !formData.bio ||
        !formData.role ||
        !formData.password
      ) {
        toast.error("Silakan isi form secara lengkap");
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        toast.error("password anda tidak sinkron");
        return;
      }

      const { confirmPassword: _, ...payload } = formData;

      const response = await registerAccount(payload);

      if (response.status === 201) {
        toast.success("Success create account");
        router.push("/login");
      } else {
        router.push("/register");
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
