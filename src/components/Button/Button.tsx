import React from "react";

type ButtonVariants = "active" | "default";

type Props = {
  children?: React.ReactNode;
  variant?: ButtonVariants;
  onClick?: () => void;
};

enum ButtuonVariantStyles {
  "active" = "bg-palesky",
  "default" = "bg-transparent",
}

const Button = ({ children, variant = "default", onClick }: Props) => {
  return (
    <button
      className={`py-[6px] px-3 text-bridalhealth text-[14px] rounded-lg ${ButtuonVariantStyles[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
