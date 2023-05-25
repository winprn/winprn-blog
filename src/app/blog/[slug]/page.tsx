import { getPostContent } from "@/utils";
import Markdown from "markdown-to-jsx";

const ViewPost = (props: any) => {
    return <main className="max-w-2xl mx-auto overflow-auto">
        <Markdown>{getPostContent(props.params.slug)}</Markdown>
    </main>
}

export default ViewPost;