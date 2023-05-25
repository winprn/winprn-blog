import { getPostsInfo } from "@/utils";
import Link from "next/link";

const Blog = () => {
    const postsInfo = getPostsInfo();
    return (
        <main>
            <h1 className='text-lg text-center mb-8'>Welcome to my blog, where I share fun things <br /> about my coding journey.</h1>
            <ul>
                {
                    postsInfo.map((el, index) => {
                        return <li key={index}>
                            <div className="mb-4">
                                <h2 className="text-lg"><Link href={`posts/${el.slug}`}>{el.title}</Link></h2>
                                <p className="text-sm">{el.preview}</p>
                            </div>
                        </li >
                    })
                }
            </ul >
        </main>
    )
}

export default Blog;