import { SiteLayout } from "../components/SiteLayout";
import { HeroSlot, HomeContent } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";

function normalizePathname(pathname: string) {
  if (!pathname) {
    return "/";
  }

  return pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

export default function App() {
  const pathname = normalizePathname(window.location.pathname);

  if (pathname === "/") {
    return (
      <SiteLayout heroSlot={<HeroSlot />}>
        <HomeContent />
      </SiteLayout>
    );
  }

  return <SiteLayout><NotFoundPage /></SiteLayout>;
}
