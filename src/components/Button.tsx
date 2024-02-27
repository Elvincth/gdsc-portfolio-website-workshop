import React from "react";

//Here we need to export the Button component to be able to use it in other files.
//The Button component is a React functional component that receives the ButtonProps as a parameter.
//The Button component returns a button element with the children as its content.
export function Button({
  children,
}: {
  // The children is a reserved prop in React. It is used to render the content of the component.
  // See: https://react.dev/reference/react/Children
  children: React.ReactNode;
}) {
  // {} is used to destructure the props object, so we can use the props directly without using props.variant, props.children, etc.
  return (
    <button
      className="px-4 text-sm py-3 rounded-md 
    flex items-center justify-center gap-2 
    bg-zinc-800 text-white hover:bg-zinc-900"
    >
      {children}
    </button>
  );
}
