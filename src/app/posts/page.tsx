import { getPostsInfo } from "@/utils";
import Link from "next/link";

const Blog = () => {
  const postsInfo = getPostsInfo();
  return (
    <main>
      <h1 className="mb-8 text-center text-lg">
        Welcome to my blog, where I share fun things <br /> about my coding
        journey.
      </h1>
      <ul>
        {postsInfo.map((el, index) => {
          return (
            <li key={index}>
              <div className="mb-4 rounded-md border px-4 py-2">
                <h2 className="text-lg font-semibold">
                  <Link href={`posts/${el.slug}`}>{el.title}</Link>
                </h2>
                <p className="mb-2 text-sm">{el.preview}</p>
                {el.tags.split(",").map((tag, index) => {
                  return (
                    <span
                      key={index}
                      className="mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold dark:bg-slate-800"
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Blog;
