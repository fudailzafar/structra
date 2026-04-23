import { BlogListItem } from "../components/BlogListItem";
import { Container } from "../components/Container";
import { SectionHeader } from "../components/SectionHeader";
import { BLOG_POSTS } from "../data/blogPosts";

export function BlogPage() {
  return (
    <section aria-labelledby="blog-index-heading" className="border-b border-[var(--fw-border)] bg-[var(--fw-bg)] py-24">
      <Container className="max-w-[980px]">
        <SectionHeader
          id="blog-index-heading"
          kicker="Engineering Journal"
          title="Notes from the field systems team."
          description="Operational writing on documentation quality, reporting structure, and execution discipline."
        />

        <div className="mt-14 border-y border-[var(--fw-border)]">
          {BLOG_POSTS.map((post) => (
            <BlogListItem key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
