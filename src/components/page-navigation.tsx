"use client";

import React, { useContext } from "react";
import { pageNavigationConfig } from "@/config/page-navigation.config";
import { cn, debounce } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { motion, useMotionValue, useTransform } from "framer-motion";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Button } from "./ui/button";
import { ArrowBigDown, ArrowDown } from "lucide-react";
import {
  ScrollContext,
  ScrollStateType,
  pushNewRoute,
} from "./providers/scroll-provider";
import { scrollSensivity } from "@/config/site.config";
interface Props {
  pathname: string;
  router: AppRouterInstance;
}

const NavigationDots = ({ pathname, router }: Props) => {
  return (
    <motion.div className=" p-6 flex flex-col gap-3">
      {pageNavigationConfig.map((page, idx) => {
        const isActive = page.route === pathname;
        return (
          <motion.div
            onClick={() => router.push(page.route)}
            whileHover={{
              scale: 1.25,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className={cn(
              "w-4 h-4 rounded-full",
              isActive ? "bg-primary" : "bg-muted-foreground/25"
            )}
            key={idx}
          />
        );
      })}
    </motion.div>
  );
};

interface NavigationArrowProps {
  scrollContext: {
    scroll: ScrollStateType;
    setScroll: (scroll: ScrollStateType) => void;
  };

  type: "up" | "down";
}

const NavigationArrow = ({ type, scrollContext }: NavigationArrowProps) => {
  const { scroll, setScroll } = scrollContext;
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

  const pathname = usePathname();
  const router = useRouter();
  return (
    <Button
      disabled
      size={"icon"}
      variant={"ghost"}
      onClick={() => {
        pushNewRoute(pathname, scroll, router);
      }}
    >
      <svg
        className={cn(
          "w-6 h-6 text-muted-foreground/25",
          type === "down" ? "rotate-180" : ""
        )}
        viewBox="0 0 141 202"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M35.2668 35.0666L0.333496 70L7.66683 77.3333L15.0002 84.6666L42.7335 56.9333L70.3335 29.3333L98.0668 56.9333L125.667 84.6666L133 77.3333L140.333 70L105.267 34.9333L70.3335 -4.57764e-05L35.2668 35.0666Z"
          fill={
            scroll.direction === type && scroll.count >= 1
              ? "hsl(var(--success))"
              : "hsl(var(--muted))"
          }
          initial={{ pathLength: 0.9, opacity: 1 }}
          style={{
            pathLength,
            opacity,
          }}
        />
        <motion.path
          d="M35.2668 92.4L0.333496 127.333L7.40016 134.4C11.2668 138.133 15.0002 141.333 15.6668 141.333C16.4668 141.333 29.0002 128.933 43.5335 113.867L70.0668 86.4L97.9335 114.267L125.667 142L133 134.667L140.333 127.333L105.267 92.2667L70.3335 57.3333L35.2668 92.4Z"
          initial={{ pathLength: 0.9, opacity: 1 }}
          style={{ pathLength, opacity }}
          fill={
            scroll.direction === type && scroll.count >= 2
              ? "hsl(var(--success))"
              : "hsl(var(--muted))"
          }
        />

        <motion.path
          d="M35.2668 152.4L0.333496 187.333L7.40016 194.4C11.2668 198.133 15.0002 201.333 15.6668 201.333C16.4668 201.333 29.0002 188.933 43.5335 173.867L70.0668 146.4L97.9335 174.267L125.667 202L133 194.667L140.334 187.333L105.267 152.267L70.3335 117.333L35.2668 152.4Z"
          fill={
            scroll.direction === type && scroll.count >= scrollSensivity
              ? "hsl(var(--success))"
              : "hsl(var(--muted))"
          }
          initial={{ pathLength: 0.9, opacity: 1 }}
          style={{ pathLength, opacity }}
        />
      </svg>
    </Button>
  );
};

function PageNavigation() {
  const pathname = usePathname();
  const router = useRouter();
  const scrollContext = useContext(ScrollContext);
  const active =
    pageNavigationConfig.findIndex((item) => item.route === pathname) + 1;

  return (
    <>
      <div className="hidden lg:flex absolute top-1/2 right-12 transform  -translate-y-1/2  flex-col  items-center">
        <NavigationArrow scrollContext={scrollContext} type="up" />
        <NavigationDots pathname={pathname} router={router} />
        <NavigationArrow scrollContext={scrollContext} type="down" />
      </div>
    </>
  );
}

export default PageNavigation;
