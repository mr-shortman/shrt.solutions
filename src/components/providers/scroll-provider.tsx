"use client";

import { LayoutProps } from "@/app/layout";
import { pageNavigationConfig } from "@/config/page-navigation.config";
import { scrollSensivity } from "@/config/site.config";
import { debounce } from "@/lib/utils";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export type ScrollStateType = {
  direction: null | string;
  count: number;
};

export const ScrollContext = React.createContext<{
  scroll: ScrollStateType;
  setScroll: (scroll: ScrollStateType) => void;
}>({
  setScroll() {},
  scroll: {
    direction: null,
    count: 0,
  },
});

export const pushNewRoute = debounce(
  (pathname: string, scroll: ScrollStateType, router: AppRouterInstance) => {
    const pageIndex = pageNavigationConfig.findIndex(
      (item) => item.route === pathname
    );
    const newRoute =
      pageIndex === pageNavigationConfig.length - 1 &&
      scroll.direction === "down"
        ? pageNavigationConfig[0]
        : pageIndex === 0 && scroll.direction === "up"
        ? pageNavigationConfig[pageNavigationConfig.length - 1]
        : pageNavigationConfig[
            scroll.direction === "up" ? pageIndex - 1 : pageIndex + 1
          ];
    console.log(newRoute);
    return router.push((newRoute?.route as string) ?? "/");
  },
  500
);

function ScrollProvider({ children }: LayoutProps) {
  const [scroll, setScroll] = React.useState<ScrollStateType>({
    direction: null,
    count: 0,
  });
  const pathname = usePathname();
  const router = useRouter();
  React.useEffect(() => {
    function detectMouseWheelDirection(e: any) {
      var delta = null,
        direction: false | string = false;
      if (!e) {
        // if the event is not provided, we get it from the window object
        e = window.event;
      }
      if (e.wheelDelta) {
        // will work in most cases
        delta = e.wheelDelta / 60;
      } else if (e.detail) {
        // fallback for Firefox
        delta = -e.detail / 2;
      }
      if (delta !== null) {
        direction = delta > 0 ? "up" : "down";
      }

      return direction;
    }

    const handleEvent = (e: WheelEvent) => {
      const newDirection = detectMouseWheelDirection(e) as string;
      if (
        scroll.count >= scrollSensivity &&
        newDirection === scroll.direction
      ) {
        return pushNewRoute(pathname, scroll, router);
      }

      setScroll({
        direction: newDirection,
        count: scroll.direction !== newDirection ? 1 : scroll.count + 1,
      });
    };
    window.addEventListener("wheel", handleEvent);

    return () => {
      window.removeEventListener("wheel", handleEvent);
    };
  }, [scroll, router, pathname]);

  return (
    <ScrollContext.Provider value={{ scroll, setScroll }}>
      {children}
    </ScrollContext.Provider>
  );
}

export default ScrollProvider;
