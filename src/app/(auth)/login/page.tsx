"use client";

import InputField from "@/components/molecules/InputField";
import { useLogin } from "@/hooks/auth/useLogin";
import Link from "next/link";
import React from "react";

export default function LoginPage() {
  const { formData, handleChange, handleSubmit } = useLogin();
  return (
    <div className="flex h-screen w-full items-center justify-center bg-dark-blue">
      <div className="size-64 w-96">
        <h1 className="text-center text-2xl font-bold uppercase text-primary">
          Beresin
        </h1>
        <form
          onSubmit={handleSubmit}
          className="mt-5 flex w-full flex-col gap-2 rounded-xl border border-secondary-3 bg-secondary-1 p-8"
        >
          <InputField
            type="text"
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Ketik Username"
          />
          <InputField
            type="password"
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Ketik password"
          />
          <button
            type="submit"
            className="w-full rounded-md bg-primary/80 px-4 py-2 text-center text-base font-semibold text-white hover:bg-primary"
          >
            Submit
          </button>
        </form>
        <p className="mt-3 text-center text-base text-white">
          Don&apos;t have account?{" "}
          <Link href="/register" className="font-semibold text-primary">
            Register Account
          </Link>
        </p>
      </div>
    </div>
  );
}
