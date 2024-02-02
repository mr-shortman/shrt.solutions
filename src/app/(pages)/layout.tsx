import { PageNavigation } from "@/components";
import { ThemeSwitch } from "@/components/theme-switch";
import React from "react";
import { LayoutProps } from "../layout";
import { Navbar } from "@/components/layout";
import { ScrollProvider } from "@/components/providers";

function Layout({ children }: LayoutProps) {
  return (
    <ScrollProvider>
      <>
        <Navbar />
        <PageNavigation />
        <main className="flex w-full flex-col items-center justify-between px-12">
          {children}
        </main>
        <ThemeSwitch className="absolute right-12 bottom-12" />
      </>
    </ScrollProvider>
  );
}

export default Layout;
