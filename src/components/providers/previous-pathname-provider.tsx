"use client";

import { usePathname } from "next/navigation";
import { PropsWithChildren, createContext, useEffect, useRef } from "react";

export const PreviousPathnameContext = createContext<string | undefined>(
  undefined
);

export default function PreviousPathnameProvider({
  children,
}: PropsWithChildren<{}>) {
  const pathname = usePathname();
  const ref = useRef<string>();

  useEffect(() => {
    ref.current = pathname;
  }, [pathname]);

  return (
    <PreviousPathnameContext.Provider value={ref.current}>
      {children}
    </PreviousPathnameContext.Provider>
  );
}
