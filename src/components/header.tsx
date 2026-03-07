import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-border">
      <nav className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold">
          David&apos;s Blog
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/" className="text-muted hover:text-foreground transition-colors">
            Posts
          </Link>
          <Link href="/tags" className="text-muted hover:text-foreground transition-colors">
            Tags
          </Link>
          <Link href="/about" className="text-muted hover:text-foreground transition-colors">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
