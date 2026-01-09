import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", ...props }, ref) => (
    <button
      ref={ref}
      className={`px-4 py-2 rounded-md font-medium text-white bg-leo-blue hover:bg-leo-dark-blue transition-colors ${className}`}
      {...props}
    />
  ),
);

Button.displayName = "Button";
export { Button };

