import React from "react";
import { IoMdClose } from "react-icons/io";

export default function CancelIcon({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} aria-label="Close mobile menu" className="p-2">
      <IoMdClose size={32} />
    </button>
  );
}
