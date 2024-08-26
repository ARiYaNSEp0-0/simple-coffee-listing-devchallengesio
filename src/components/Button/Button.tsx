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
      className={`font-regular rounded-lg px-3 py-[6px] text-[14px] text-bridalhealth ${ButtuonVariantStyles[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
