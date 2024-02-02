import { pageNavigationConfig } from "@/config/page-navigation.config";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export const getPageInex = (route: string, pathname: string) =>

export function debounce(func: (...args: any) => void, timeout: number = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
