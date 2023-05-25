import { getPostContent, getPostsInfo } from "@/utils";
import Markdown from "markdown-to-jsx";

export async function generateStaticParams() {
    const posts = getPostsInfo();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

const ViewPost = (props: any) => {
    return <main className="max-w-2xl mx-auto overflow-auto">
        <Markdown>{getPostContent(props.params.slug)}</Markdown>
    </main>
}

export default ViewPost;