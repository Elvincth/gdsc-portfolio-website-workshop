// As this component have client side code, we need to add the following line to the top of the file:
"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

//Here we define the navigation links
const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
];

export function Header() {
  // usePathname is a hook that returns the current pathname of the URL
  //See: https://nextjs.org/docs/app/api-reference/functions/use-pathname
  const pathname = usePathname();
  // useState is a hook that allows you to add state to function components
  // it will auto re-render the component when the state changes
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [showNav, setShowNav] = useState(true);

  //useEffect is a hook that allows you to perform side effects in function components
  //Here we use useEffect to add an event listener to the window object when the component mounts
  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      //We get the current scroll position by using window.scrollY
      //The scrollY property returns the number of pixels that the document has already been scrolled vertically
      const currentScrollPos = window.scrollY;

      // If the user scrolls up, show the navbar
      // If the user scrolls down, hide the navbar
      if (prevScrollPos > currentScrollPos) {
        setShowNav(true);
        console.log("Show navbar");
      } else {
        setShowNav(false);
        console.log("Hide navbar");
      }
      setPrevScrollPos(currentScrollPos);
    };
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className={clsx(
        "fixed left-0 right-0 z-50 flex justify-center transition-all duration-500",
        {
          "top-4": showNav,
          "-top-16": !showNav,
        }
      )}
    >
      <ul className="flex px-5 rounded-full bg-white/90 py-2 text-sm font-medium text-zinc-500 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5">
        <div className="flex space-x-4">
          {navigation.map((item, index) => (
            <li
              key={index}
              className={clsx("transition-colors hover:text-zinc-900", {
                "text-zinc-900": pathname === item.href,
              })}
            >
              <Link key={item.name} href={item.href}>
                {item.name}
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
}
