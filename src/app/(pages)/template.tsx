"use client";

import { PreviousPathnameContext } from "@/components/providers/previous-pathname-provider";
import { pageNavigationConfig } from "@/config/page-navigation.config";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const previousPathname = useContext(PreviousPathnameContext);

  const currentPageIndex = pageNavigationConfig.findIndex(
    (item) => item.route === pathname
  );
  const previousPageIndex = pageNavigationConfig.findIndex(
    (item) => item.route === previousPathname
  );
  const direction = previousPageIndex < currentPageIndex ? "top" : "bottom";

  const variants = {
    hidden: { opacity: 0, y: direction === "top" ? -200 : 200 },
    enter: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      className="h-full w-full"
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="hidden"
      transition={{ type: "linear" }}
    >
      {children}
    </motion.div>
  );
}
