import { SiteLayout } from "../components/SiteLayout";
import { getBlogPostBySlug } from "../data/blogPosts";
import { AboutPage } from "../pages/AboutPage";
import { BlogPage } from "../pages/BlogPage";
import { BlogPostPage } from "../pages/BlogPostPage";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";

function normalizePathname(pathname: string) {
  if (!pathname) {
    return "/";
  }

  return pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

function matchBlogSlug(pathname: string) {
  const match = pathname.match(/^\/blog\/([^/]+)$/);
  return match ? decodeURIComponent(match[1]) : null;
}

function resolvePage(pathname: string) {
  if (pathname === "/") {
    return <HomePage />;
  }

  if (pathname === "/about") {
    return <AboutPage />;
  }

  if (pathname === "/blog") {
    return <BlogPage />;
  }

  if (pathname === "/404") {
    return <NotFoundPage />;
  }

  const blogSlug = matchBlogSlug(pathname);
  if (blogSlug) {
    const blogPost = getBlogPostBySlug(blogSlug);
    return blogPost ? <BlogPostPage post={blogPost} /> : <NotFoundPage />;
  }

  return <NotFoundPage />;
}

export default function App() {
  const pathname = normalizePathname(window.location.pathname);

  return <SiteLayout>{resolvePage(pathname)}</SiteLayout>;
}
