import clsx from "clsx";
import React from "react";

interface ButtonProps {
  // The children is a reserved prop in React. It is used to render the content of the component.
  // See: https://react.dev/reference/react/Children
  children: React.ReactNode;
  // The className prop is used to add custom classes to the component.
  // In typescript ? is used to make the prop optional, so it is not required to use it.
  className?: string;
  // The variant prop is used to change the style of the button, it can be "default" or "outline".
  // In typescript | is used to define the possible values of the prop.
  variant?: "default" | "outline";
}

//Here we need to export the Button component to be able to use it in other files.
//The Button component is a React functional component that receives the ButtonProps as a parameter.
//The Button component returns a button element with the children as its content.
export function Button({
  variant = "default", // The default value of the variant prop is "default".
  children, 
  className, 
}: ButtonProps) { 
  // {} is used to destructure the props object, so we can use the props directly without using props.variant, props.children, etc.
  return (
    <button
      className={clsx(
        "px-4 text-sm py-3 rounded-md flex items-center justify-center gap-2",
        {
          "bg-zinc-800 text-white hover:bg-zinc-900": variant === "default",
          "ring-1 ring-zinc-200 rounded-md hover:bg-zinc-100":
            variant === "outline",
        },
        className
      )}
    >
      {children}
    </button>
  );
}
