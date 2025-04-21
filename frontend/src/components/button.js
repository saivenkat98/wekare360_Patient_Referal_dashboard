import React from "react";

export function Button({ children, ...props }) {
  return (
    <button
      className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
      {...props}
    >
      {children}
    </button>
  );
}