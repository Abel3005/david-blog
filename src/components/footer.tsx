import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-6 text-sm text-muted">
        <p>&copy; {new Date().getFullYear()} David&apos;s Blog</p>
        <Link
          href="/rss.xml"
          className="hover:text-foreground transition-colors"
        >
          RSS
        </Link>
      </div>
    </footer>
  );
}
