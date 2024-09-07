"use client";
import HTMLRenderer from "@/components/HtmlRender";
import { getPost } from "@/lib/blogPostFetchingLogix";
import { SingleBlogPost } from "@/types/postTypes";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const BlogSinglePageClient = ({ id }: { id: string }) => {
  const [getBlogPost, setGetBlogPost] = useState<SingleBlogPost>();
  useEffect(() => {
    const getPostData = async () => {
      const data = await getPost(Number(id));
      console.log(data);
      setGetBlogPost(data);
    };
    getPostData();
  }, [id]);

  if (!getBlogPost) {
    return (
      <h1 className="mt-32 px-5 md:mt-32 lg:m-20 lg:mt-32">Loading........</h1>
    );
  }

  return (
    <div className="mt-32 px-5 md:mt-32 lg:m-20 lg:mt-32">
      <div className="relative w-full h-[600px]">
        <Image
          src={getBlogPost.post.featuredImage.node.mediaItemUrl}
          alt={getBlogPost.post.featuredImage.node.title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <h1 className="my-8 text-5xl font-bold">{getBlogPost.post.title}</h1>
      <HTMLRenderer html={getBlogPost.post.content} />
    </div>
  );
};

export default BlogSinglePageClient;
