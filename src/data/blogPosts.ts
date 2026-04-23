export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "field-notes-without-friction",
    title: "Field Notes Without Friction",
    description: "How disciplined capture workflows reduce reporting latency and rework.",
    date: "Apr 20, 2026",
    content: [
      "Most documentation systems fail in the same place: data capture at the edge. Site teams are moving, coordinating, and solving issues in real time. Any workflow that asks for extra formatting during capture will be bypassed under schedule pressure.",
      "FieldWork is intentionally opinionated about the first five minutes after an observation is made. Photos, voice notes, and short typed context are captured in one pass, then normalized later into structured report blocks. The goal is to preserve signal without asking for editorial overhead during execution.",
      "This pattern shifts effort from repetitive manual assembly to deterministic transformation. Teams still control the narrative, but they are no longer spending hours transcribing events that already happened on site.",
      "When teams adopt this model, reporting becomes an operational byproduct rather than an end-of-week sprint. The quality of updates improves because the information is captured closer to the original decision point.",
      "The result is straightforward: fewer missing details, clearer status communication, and less admin drag across the project lifecycle."
    ]
  },
  {
    slug: "report-templates-for-live-projects",
    title: "Report Templates For Live Projects",
    description: "A practical framework for templates that stay useful from kickoff to handover.",
    date: "Apr 17, 2026",
    content: [
      "A report template is only valuable if it survives project complexity. Many templates look polished in isolation, then collapse once multiple trades, delays, and revisions enter the timeline.",
      "A resilient template starts with stable sections: phase status, blockers, safety context, and next actions. These sections should remain constant even as the project state changes. Consistency allows stakeholders to compare updates across weeks without relearning the document each time.",
      "FieldWork structures output around this principle. Teams can adapt language and detail level, but the document skeleton remains predictable. Predictability is what makes large projects auditable.",
      "Template design should also account for escalation. A status item that is informational this week may become a contractual risk next week. The format must make that transition visible without restructuring the entire report.",
      "Good templates are not decorative. They are operational interfaces for decision-making under time constraints."
    ]
  },
  {
    slug: "timestamp-discipline-on-site",
    title: "Timestamp Discipline On Site",
    description: "Why precise sequencing of updates is critical for coordination and claims defense.",
    date: "Apr 13, 2026",
    content: [
      "Construction communication often fails because teams debate sequence instead of substance. If timestamps are inconsistent, every follow-up meeting starts by reconstructing order of events.",
      "FieldWork treats timestamp integrity as a first-class constraint. Every capture event carries a verifiable time reference and remains attached to its project context through the reporting pipeline.",
      "This has practical value beyond internal coordination. In disputes, claims, and client reviews, the ability to show a clear event timeline is materially different from presenting anecdotal recollection.",
      "Timestamp discipline also helps with resource planning. Once event ordering is reliable, teams can identify where handoffs stall and where recurring delays are introduced.",
      "Precision in sequence is not bureaucracy. It is the baseline for accountable execution in multi-party projects."
    ]
  },
  {
    slug: "photo-streams-to-decision-logs",
    title: "From Photo Streams To Decision Logs",
    description: "Turning fragmented visual records into structured, stakeholder-ready updates.",
    date: "Apr 09, 2026",
    content: [
      "A directory of site photos is not documentation. Without context, a photo stream is difficult to interpret and nearly impossible to audit at scale.",
      "FieldWork converts visual records into decision logs by attaching each image to phase metadata, location context, and concise narrative intent. The objective is to preserve operational meaning, not just archive media.",
      "This approach changes how teams review progress. Instead of scanning dozens of disconnected images, stakeholders can follow a sequence of decisions and outcomes that maps directly to project objectives.",
      "The same structure improves external communication. Clients receive cleaner reports, and internal teams retain traceability when project conditions change.",
      "Documentation quality is ultimately a systems problem. Structured capture plus consistent transformation produces durable project memory."
    ]
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
