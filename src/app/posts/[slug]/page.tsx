import { getPostContent, getPostsInfo } from "@/utils";
import { BsChevronLeft } from "react-icons/bs";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

export async function generateStaticParams() {
    const posts = getPostsInfo();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

const ViewPost = (props: any) => {
    return <main className="relative">
        <div className="max-w-4xl px-4 mx-auto overflow-auto">
            <Link href={'/posts'} className="fixed z-50 top-20 left-80 flex items-center justify-center rounded-full ring-1 ring-zinc-800/25 dark:ring-white/25 h-10 w-10 bg-white">
                <BsChevronLeft size={20} color="black" />
            </Link>
            <ReactMarkdown className="prose dark:prose-invert" remarkPlugins={[remarkGfm]}>{getPostContent(props.params.slug)}</ReactMarkdown>
        </div>
    </main>
}

export default ViewPost;