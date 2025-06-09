"use client";

import InputField from "@/components/molecules/InputField";
import { RoleAccount } from "@/config/constant";
import { useRegister } from "@/hooks/auth/userRegister";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function RegisterPage() {
  const { formData, handleChange, handleSubmit } = useRegister();
  return (
    <div className="flex min-h-screen w-full bg-secondary-1">
      <div className="hidden h-full w-1/2 md:block">
        <Image
          src="/images/register.jpg"
          width={1350}
          height={1080}
          alt="register page"
          className="h-screen"
        />
      </div>
      <div className="relative flex h-full w-full flex-col items-center justify-center md:w-1/2">
        <div className="w-full px-6 pt-10 md:px-12 xl:px-20 2xl:w-9/12">
          <h1 className="text-2xl font-bold uppercase text-primary">Beresin</h1>
          <div className="mt-4 w-full text-start">
            <h1 className="text-4xl font-bold text-white">Buat Akun Anda!</h1>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-y-4">
            <InputField
              type="text"
              label="Nama lengkap"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              placeholder="Ketik nama lengkap"
            />
            <div className="flex flex-col items-center gap-4 md:flex-row">
              <div className="w-full md:w-1/2">
                <InputField
                  type="email"
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Ketik email"
                />
              </div>
              <div className="w-full md:w-1/2">
                <InputField
                  type="text"
                  label="Username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Ketik username"
                />
              </div>
            </div>
            <InputField
              type="text"
              label="Bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Ketik bio singkat"
            />
            <div className="flex flex-col gap-1">
              <label
                htmlFor="date_end"
                className="text-xs text-white md:text-sm lg:text-base"
              >
                Role Akun
              </label>
              <select
                name="role"
                id="role"
                value={formData.role}
                onChange={handleChange}
                className="rounded-md border border-neutral-500 bg-secondary-1 px-3 py-1 text-neutral-100 focus:border-primary focus:outline-none"
              >
                {RoleAccount.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
            <InputField
              type="password"
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Ketik password"
            />
            <InputField
              type="password"
              label="Konfirmasi Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Ketik password"
            />
            <div className="form-group">
              <button
                type="submit"
                className="w-full rounded-lg bg-primary/80 py-2 text-base text-white hover:bg-primary"
              >
                Submit
              </button>
            </div>
            <p className="mt-1 text-center text-base text-white">
              Sudah punya akun?{" "}
              <Link href="/login" className="font-semibold text-primary">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
