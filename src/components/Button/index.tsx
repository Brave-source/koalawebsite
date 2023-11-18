import React from "react";

const shapes = { circle: "rounded-[50%]", round: "rounded-[17px]" } as const;
const variants = {
  fill: {
    light_green_100: "bg-light_green-100 shadow-bs text-gray-900",
    light_green_400: "bg-light_green-400 shadow-bs text-gray-900",
    orange_300: "bg-orange-300 shadow-bs text-gray-900",
    blue_100: "bg-blue-100 shadow-bs text-gray-900",
    amber_300: "bg-amber-300 text-gray-900",
    lime_100: "bg-lime-100 shadow-bs text-gray-900",
    pink_50: "bg-pink-50 shadow-bs text-gray-900",
    white_A700: "bg-white-A700 shadow-bs text-gray-900",
  },
} as const;
const sizes = { xs: "p-1.5", sm: "p-[13px]", md: "p-[17px]" } as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
