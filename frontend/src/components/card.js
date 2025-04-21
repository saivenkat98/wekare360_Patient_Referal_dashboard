import React from "react";

export function Card({ children, ...props }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md" {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}