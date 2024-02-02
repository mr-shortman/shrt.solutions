import { pageNavigationConfig } from "@/config/page-navigation.config";
import { notFound } from "next/navigation";

export default function Home({ params }: any) {
  const pageIndex = pageNavigationConfig.findIndex(
    (item) => item.route === `/${params.slug}`
  );
  if (pageIndex === -1) return notFound();
  const page = pageNavigationConfig[pageIndex];

  return <>{page.component}</>;
}
