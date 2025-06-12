import { getInitialsFromTwoWords } from "@/helpers/initialName";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

type ProfileType = {
  fullname: string;
  bio: string;
  username: string;
  email: string;
  role: "Admin" | "Member" | "Manager";
};

export default function ProfileMenu() {
  const [profile, setProfile] = useState<ProfileType | null>(null);

  useEffect(() => {
    const token = Cookies.get("authToken");
    if (!token) return;

    try {
      const jwtToken = atob(token);
      const payload = jwtDecode(jwtToken) as ProfileType;
      setProfile(payload);
    } catch (err) {
      console.error("Invalid token", err);
    }
  }, []);

  if (!profile) {
    return <p>Loading...</p>;
  }
  return (
    <div id="profile" className="flex items-center gap-x-2 px-4 py-2">
      <div className="flex size-8 items-center justify-center rounded-full bg-red-600">
        <p className="text-xs uppercase text-white">
          {getInitialsFromTwoWords(profile?.fullname || "")}
        </p>
      </div>
      <div className="">
        <p className="text-sm font-semibold text-white">
          {profile?.fullname || ""}
        </p>
        <p className="text-xs text-neutral-500">{profile?.bio || ""}</p>
      </div>
    </div>
  );
}
