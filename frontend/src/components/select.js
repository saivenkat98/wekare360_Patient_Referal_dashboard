import React from "react";

export function Select({ children, value, onValueChange }) {
  return (
    <select
      className="px-4 py-2 border rounded-md"
      value={value}
      onChange={(e) => onValueChange(e.target.value)}
    >
      {children}
    </select>
  );
}

export function SelectItem({ value, children }) {
  return <option value={value}>{children}</option>;
}