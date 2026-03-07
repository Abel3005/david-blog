import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About David's Blog.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-3xl font-bold">About</h1>
      <div className="prose prose-gray mt-10 max-w-none">
        <p>
          Hi, I&apos;m David. I write about web development, TypeScript, and
          software engineering.
        </p>
        <p>
          This blog is built with Next.js 15, Tailwind CSS, and MDX. Posts are
          written in MDX with syntax highlighting powered by Shiki.
        </p>
        <p>
          Feel free to explore the posts or browse by tags. You can also
          subscribe via <a href="/rss.xml">RSS</a>.
        </p>
      </div>
    </div>
  );
}
