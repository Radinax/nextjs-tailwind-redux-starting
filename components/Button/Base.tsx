import { ButtonHTMLAttributes, MouseEvent, ReactElement } from "react";

export type IButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "inverse";
  size?: "sm" | "md" | "lg";
  startIcon?: ReactElement;
  endIcon?: ReactElement;
};

const variants = {
  primary: "bg-blue text-white border-blue hover:bg-white hover:text-blue",
  inverse: "bg-white text-blue-600 hover:bg-blue-600 hover:text-white",
  secondary: "bg-red-600 text-white hover:bg-red-50 hover:text-red-600",
};

const sizes = {
  sm: "py-2 px-4 text-sm",
  md: "py-2 px-6 text-md",
  lg: "py-3 px-8 text-lg",
};

const BaseButton: React.FC<IButton> = ({
  label,
  onClick,
  className = "",
  disabled = false,
  children,
  variant = "primary",
  size = "md",
  startIcon,
  endIcon,
}) => {
  const buttonClass = `
    flex
    justify-center
    items-center
    border
    disabled:opacity-70
    disabled:cursor-not-allowed
    rounded-md
    shadow-sm
    font-medium
    focus:outline-none
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `;

  return (
    <button className={buttonClass} disabled={disabled} onClick={onClick}>
      {startIcon && <span className="mr-3">{startIcon}</span>}
      {label || children}
      {endIcon && <span className="ml-3">{endIcon}</span>}
    </button>
  );
};

export default BaseButton;
