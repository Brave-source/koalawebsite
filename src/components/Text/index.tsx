import React from "react";

const sizeClasses = {
  txtBarricadaW01Regular36: "font-barricadawregular font-normal",
  txtBarricadaW01Regular46: "font-barricadawregular font-normal",
  txtBarricadaW01Regular66: "font-barricadawregular font-normal",
  txtBarricadaW01Regular76: "font-barricadawregular font-normal",
  txtBarricadaW01Regular86: "font-barricadawregular font-normal",
  txtBarricadaW01Regular60: "font-barricadawregular font-normal",
  txtMatterSemiBold24: "font-matter font-semibold",
  txtBebasNeueRegular16: "font-bebasneue font-normal",
  txtBebasNeueRegular26: "font-bebasneue font-normal",
  txtRubikRegular26: "font-normal font-rubik",
  txtRubikRegular36: "font-normal font-rubik",
  txtMatterRegular26: "font-matter font-normal",
  txtBebasNeueRegular22: "font-bebasneue font-normal",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
