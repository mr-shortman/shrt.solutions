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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Menu } from "lucide-react";

interface Props {
  className?: string;
}

const NavLinks = ({ className }: Props) => {
  const pathname = usePathname();
  return (
    <ul className={cn("items-center gap-4 lg:gap-6 xl:gap-8 flex", className)}>
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
  );
};

function Navbar() {
  const { scroll } = React.useContext(ScrollContext);
  const varaints = {
    animate: {
      opacity: 1 / Number(scroll?.count),
    },
  };
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

      <Sheet>
        <SheetTrigger className="block md:hidden">
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <NavLinks className="flex-col gap-8 mt-12" />
        </SheetContent>
      </Sheet>
      <NavLinks className="hidden md:flex" />
    </div>
  );
}

export default Navbar;
