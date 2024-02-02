import { PageNavigation } from "@/components";
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
        <main className="flex w-full flex-col items-center justify-between px-4 md:px-12">
          {children}
        </main>
      </>
    </ScrollProvider>
  );
}

export default Layout;
