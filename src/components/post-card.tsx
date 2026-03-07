import Link from "next/link";
import type { Post } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import { TagBadge } from "./tag-badge";

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="group">
      <Link href={`/posts/${post.slug}`} className="block">
        <h2 className="text-xl font-semibold group-hover:text-accent transition-colors">
          {post.title}
        </h2>
        <p className="mt-2 text-muted">{post.description}</p>
        <div className="mt-3 flex items-center gap-2 text-sm text-muted">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>&middot;</span>
          <span>{post.readingTime}</span>
        </div>
      </Link>
      <div className="mt-3 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <TagBadge key={tag} tag={tag} />
        ))}
      </div>
    </article>
  );
}
