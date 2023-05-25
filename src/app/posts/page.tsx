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
                            <div className="mb-4 border rounded-md px-4 py-2">
                                <h2 className="text-lg font-semibold"><Link href={`posts/${el.slug}`}>{el.title}</Link></h2>
                                <p className="text-sm mb-2">{el.preview}</p>
                                {
                                    el.tags.split(',').map((tag, index) => {
                                        return <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 dark:bg-slate-800">{tag}</span>
                                    })
                                }
                            </div>
                        </li >
                    })
                }
            </ul >
        </main>
    )
}

export default Blog;