import { getPostContent, getPostsInfo } from "@/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

export async function generateStaticParams() {
    const posts = getPostsInfo();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

const ViewPost = (props: any) => {
    return <main className="max-w-2xl mx-auto overflow-auto">
        <ReactMarkdown className="prose dark:prose-invert" remarkPlugins={[remarkGfm]}>{getPostContent(props.params.slug)}</ReactMarkdown>
    </main>
}

export default ViewPost;