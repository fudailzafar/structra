import { Container } from "../components/Container";
import type { BlogPost } from "../data/blogPosts";

type BlogPostPageProps = {
  post: BlogPost;
};

export function BlogPostPage({ post }: BlogPostPageProps) {
  return (
    <article aria-labelledby="blog-post-heading" className="border-b border-[var(--fw-border)] bg-[var(--fw-bg)] py-24">
      <Container className="max-w-[860px]">
        <a
          href="/blog"
          aria-label="Back to blog"
          className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--fw-muted)] transition-colors duration-200 hover:text-[var(--fw-text)]"
        >
          Back To Blog
        </a>

        <header className="mt-8 border-b border-[var(--fw-border)] pb-10">
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--fw-muted)]">{post.date}</p>

          <h1
            id="blog-post-heading"
            className="mt-5 max-w-3xl text-balance text-4xl leading-[1.08] tracking-[-0.04em] text-[var(--fw-text)] md:text-6xl"
          >
            {post.title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--fw-muted)] md:text-lg">{post.description}</p>
        </header>

        <div className="mt-10 max-w-[720px] space-y-8">
          {post.content.map((paragraph) => (
            <p key={paragraph} className="text-[17px] leading-8 text-[var(--fw-text)]">
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </article>
  );
}
