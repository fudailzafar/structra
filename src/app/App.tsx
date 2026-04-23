import { SiteLayout } from "../components/SiteLayout";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";

function normalizePathname(pathname: string) {
  if (!pathname) {
    return "/";
  }

  return pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

export default function App() {
  const pathname = normalizePathname(window.location.pathname);

  const page = pathname === "/" ? <HomePage /> : <NotFoundPage />;

  return <SiteLayout>{page}</SiteLayout>;
}
