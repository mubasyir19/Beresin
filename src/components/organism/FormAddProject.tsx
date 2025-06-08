"use client";

import React, { useState } from "react";
import InputField from "../molecules/InputField";
import { priority, status } from "@/config/constant";
import { useProject } from "@/hooks/project/useProject";
import { createProjectPayload } from "@/types/project";
import { toast } from "sonner";
import { getAuthToken } from "@/services/authService";
import { jwtDecode } from "jwt-decode";
import { JwtPayload } from "@/types/user";

interface FormAddProjectProps {
  onSuccess?: () => void;
}

export default function FormAddProject({ onSuccess }: FormAddProjectProps) {
  const { fetchProjects, createProject } = useProject();

  const [formData, setFormData] = useState<createProjectPayload>({
    name: "",
    description: "",
    date_start: "",
    date_end: "",
    status: "NOT_STARTED",
    priority: "LOW",
    created_by: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = getAuthToken();
    const payloadToken: JwtPayload = jwtDecode(token as string);

    try {
      if (
        !formData.name ||
        !formData.date_start ||
        !formData.date_end ||
        !formData.status ||
        !formData.priority
      ) {
        toast.error("isi form dahulu");
        return;
      }
      const response = await createProject({
        ...formData,
        created_by: payloadToken.id,
      });

      console.log("output = ", response);
      setFormData({
        name: "",
        description: "",
        date_start: "",
        date_end: "",
        status: "NOT_STARTED",
        priority: "LOW",
        created_by: "",
      });

      if (onSuccess) {
        onSuccess();

        await fetchProjects();
      }
    } catch (error) {
      console.log("terjadi error = ", error);
    }
  };
  return (
    <form onSubmit={handleSubmit} method="POST" className="flex flex-col gap-3">
      <InputField
        type="text"
        label="Nama Projek"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Ketik nama projek"
      />
      <InputField
        type="text"
        label="Deskripsi"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Ketik deskripsi singkat"
      />
      <div className="flex flex-col gap-1">
        <label
          htmlFor="date_start"
          className="text-xs text-white md:text-sm lg:text-base"
        >
          Tanggal Mulai
        </label>
        <input
          type="date"
          name="date_start"
          value={formData.date_start}
          onChange={handleChange}
          className="rounded-md border border-neutral-500 bg-secondary-1 px-3 py-1 text-neutral-100 focus:border-primary focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="date_end"
          className="text-xs text-white md:text-sm lg:text-base"
        >
          Deadline
        </label>
        <input
          type="date"
          name="date_end"
          value={formData.date_end}
          onChange={handleChange}
          className="rounded-md border border-neutral-500 bg-secondary-1 px-3 py-1 text-neutral-100 focus:border-primary focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="date_end"
          className="text-xs text-white md:text-sm lg:text-base"
        >
          Status Projek
        </label>
        <select
          name="status"
          id="status"
          value={formData.status}
          onChange={handleChange}
          className="rounded-md border border-neutral-500 bg-secondary-1 px-3 py-1 text-neutral-100 focus:border-primary focus:outline-none"
        >
          {status.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="date_end"
          className="text-xs text-white md:text-sm lg:text-base"
        >
          Prioritas Projek
        </label>
        <select
          name="priority"
          id="priority"
          value={formData.priority}
          onChange={handleChange}
          className="rounded-md border border-neutral-500 bg-secondary-1 px-3 py-1 text-neutral-100 focus:border-primary focus:outline-none"
        >
          {priority.map((p) => (
            <option key={p.value} value={p.value}>
              {p.label}
            </option>
          ))}
        </select>
      </div>
      <div className="">
        <button className="w-full rounded-md bg-primary py-2 text-xs text-white hover:bg-primary/80 md:text-sm lg:text-base">
          Submit
        </button>
      </div>
    </form>
  );
}
