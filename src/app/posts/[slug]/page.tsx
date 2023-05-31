import { getPostContent, getPostsInfo } from "@/utils";
import { BsChevronLeft } from "react-icons/bs";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export async function generateStaticParams() {
  const posts = getPostsInfo();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const ViewPost = (props: any) => {
  return (
    <main className="relative">
      <div className="mx-auto max-w-4xl overflow-auto px-4">
        <Link
          href={"/posts"}
          className="fixed left-80 top-20 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ring-zinc-800/25 dark:ring-white/25"
        >
          <BsChevronLeft size={20} color="black" />
        </Link>
        <ReactMarkdown
          className="prose dark:prose-invert"
          remarkPlugins={[remarkGfm]}
        >
          {getPostContent(props.params.slug)}
        </ReactMarkdown>
      </div>
    </main>
  );
};

export default ViewPost;
