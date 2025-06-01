import React, { ReactNode, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  showCloseButton?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-2xl",
};

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  showCloseButton = true,
  size = "md",
}: ModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div
        className={`w-full rounded-2xl bg-secondary-1 shadow-lg ${sizeClasses[size]} relative p-6 transition-all`}
      >
        {showCloseButton && (
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-zinc-500 hover:text-zinc-800 dark:hover:text-white"
          >
            <XMarkIcon className="size-5" />
          </button>
        )}

        {title && (
          <h2 className="mb-4 text-xl font-semibold text-zinc-800 dark:text-white">
            {title}
          </h2>
        )}

        <div>{children}</div>
      </div>
    </div>
  );
}
