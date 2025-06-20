"use client";

import React, { useState } from "react";
import ListMenu from "../molecules/ListMenu";
import { listMenuItems } from "@/data";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";
import Modal from "./Modal";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import ProfileMenu from "../molecules/Profile";

export default function Sidebar() {
  const [modalAddOpen, setModalAddOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("authToken");
    router.push("/login");
  };
  return (
    <aside className="hidden w-64 overflow-y-auto border-r border-border bg-dark-blue lg:block">
      <div className="p-4">
        <h1 className="text-xl font-bold text-white">Beresin</h1>
      </div>
      <div className="flex flex-col gap-y-2 pr-4">
        {listMenuItems.map((item) => (
          <ListMenu key={item.text} item={item} />
        ))}
      </div>
      <hr className="my-4 w-full border border-neutral-600" />
      <div className="">
        <ProfileMenu />
        <div className="">
          <button
            onClick={() => setModalAddOpen(true)}
            className="flex items-center gap-4 px-5 py-2"
          >
            <ArrowRightStartOnRectangleIcon className="size-6 text-red-500" />
            <span className="text-sm font-medium text-red-500">Logout</span>
          </button>
        </div>
      </div>
      <Modal
        isOpen={modalAddOpen}
        onClose={() => setModalAddOpen(false)}
        title="Yakin untuk logout?"
      >
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setModalAddOpen(false)}
            className="rounded-md bg-secondary-3 px-4 py-2 text-sm text-white"
          >
            Kembali
          </button>
          <button
            onClick={handleLogout}
            className="rounded-md bg-red-500 px-4 py-2 text-sm text-white"
          >
            Logout
          </button>
        </div>
      </Modal>
    </aside>
  );
}
