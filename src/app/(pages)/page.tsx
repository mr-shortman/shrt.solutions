import { pageNavigationConfig } from "@/config/page-navigation.config";
import { notFound } from "next/navigation";

function Page() {
  const page = pageNavigationConfig.find((item) => item.route === "/");
  if (!page) return notFound();
  return page.component;
}

export default Page;
