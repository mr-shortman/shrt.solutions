import type { Metadata } from "next";
import { Inter, Roboto, Darker_Grotesque } from "next/font/google";
import "./globals.css";
import PageAnimatePresence from "@/components/hoc/page-animate-presence";
import { PreviousPathnameProvider } from "@/components/providers";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["greek"] });
const darker_Grotesque = Darker_Grotesque({
  subsets: ["latin"],
  weight: "500",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export interface LayoutProps {
  children: JSX.Element;
}

export default function RootLayout({ children }: Readonly<LayoutProps>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          // darker_Grotesque.className,
          "overflow-hidden h-screen w-full"
        )}
      >
        <PageAnimatePresence>
          <PreviousPathnameProvider>{children}</PreviousPathnameProvider>
        </PageAnimatePresence>
      </body>
    </html>
  );
}
