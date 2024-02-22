"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
];

export function Header() {
  const pathname = usePathname();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
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
