import fs from "fs";
import matter from "gray-matter";

interface PostInfo {
  title: string;
  preview: string;
  slug: string;
  tags: string;
}

const folder = "posts";
export const getPostsInfo = (): PostInfo[] => {
  const postFiles = fs.readdirSync(folder);

  const posts = postFiles.map((post) => {
    const fileContent = fs.readFileSync(`${folder}/${post}`);
    const markdown = matter(fileContent);

    return {
      title: markdown.data.title,
      preview: markdown.data.preview,
      tags: markdown.data.tags,
      slug: post.replace(".md", ""),
    };
  });

  return posts;
};

export const getPostContent = (slug: string): string => {
  const filePath = `${folder}/${slug}.md`;
  const content = fs.readFileSync(filePath, "utf8");
  const formattedContent = matter(content);
  return formattedContent.content;
};
