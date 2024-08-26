import React from "react";

type ButtonVariants = "active" | "default";

type Props = { children?: React.ReactNode; variant?: ButtonVariants };

const Button = ({ children, variant = "default" }: Props) => {
  return (
    <button
      className={`py-2 px-3 text-bridalhealth text-sm rounded-lg ${
        variant === "active" ? "bg-palesky" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
