import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import React from "react";

const links = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/about",
    name: "about",
  },
  {
    path: "/portfolio",
    name: "portfolio",
  },
  {
    path: "/pricing",
    name: "pricing",
  },
  {
    path: "/contact",
    name: "contact",
  },
];

const Nav = ({ containerStyles, linkStyles, undelineStyles, clickCallback }) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={link.index}
            className={`capitalize ${linkStyles}`}
            onClick={() => {
              if (clickCallback) clickCallback();
            }}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100px" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${undelineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
