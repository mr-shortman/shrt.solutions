"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteName } from "@/config/site.config";
import { Icons } from "../icons";
import { motion } from "framer-motion";
import { ScrollContext } from "../providers/scroll-provider";
import { pageNavigationConfig } from "@/config/page-navigation.config";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

function Navbar() {
  const { scroll } = React.useContext(ScrollContext);
  const varaints = {
    animate: {
      opacity: 1 / Number(scroll?.count),
    },
  };
  const pathname = usePathname();
  return (
    <div className="w-full flex justify-between py-12 container">
      <motion.div
        className="flex items-center gap-2"
        variants={varaints}
        initial="animate"
        animate="animate"
      >
        <Icons.logo />
        <span className="font-semibold uppercase">{siteName}</span>
      </motion.div>

      <ul className="flex items-center gap-4 lg:gap-6 xl:gap-8">
        {pageNavigationConfig.map(({ route, metadata, navLink }, idx) => {
          const active = route === pathname;
          if (navLink === "button")
            return (
              <li key={idx}>
                <Link href={route}>
                  <Button variant={active ? "outline" : "default"}>
                    {metadata?.title}
                  </Button>
                </Link>
              </li>
            );
          if (navLink)
            return (
              <li key={idx}>
                <Link href={route}>
                  <span
                    className={cn(
                      " relative before:absolute before:w-full  before:rounded-full before:bg-primary before:px-2 before:-bottom-2 ",
                      active
                        ? "text-primary before:h-1"
                        : "text-muted-foreground/50"
                    )}
                  >
                    {metadata?.title}
                  </span>
                </Link>
              </li>
            );
          return null;
        })}
      </ul>
    </div>
  );
}

export default Navbar;
