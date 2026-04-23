import type { BlogPost } from "../data/blogPosts";

type BlogListItemProps = {
  post: BlogPost;
};

export function BlogListItem({ post }: BlogListItemProps) {
  return (
    <article className="border-b border-[var(--fw-border)] py-8 last:border-b-0 md:py-10">
      <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--fw-muted)]">{post.date}</p>

      <h2 className="mt-4 text-2xl leading-tight tracking-[-0.02em] text-[var(--fw-text)] md:text-3xl">
        <a href={`/blog/${post.slug}`} className="transition-colors duration-200 hover:text-[var(--fw-muted)]" aria-label={`Read article: ${post.title}`}>
          {post.title}
        </a>
      </h2>

      <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--fw-muted)] md:text-lg">{post.description}</p>

      <p className="mt-6 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--fw-text)]">
        <a href={`/blog/${post.slug}`} aria-label={`Continue reading ${post.title}`}>
          Read Article
        </a>
      </p>
    </article>
  );
}
