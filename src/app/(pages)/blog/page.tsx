import { fetchPost } from "@/lib/blogPostFetchingLogix";
import React from "react";
import Image from "next/image";
import HTMLRenderer from "@/components/HtmlRender";
import { PostType } from "@/types/postTypes";
import Link from "next/link";

const Blog = async () => {
  const getData = await fetchPost();
  return (
    <div className="mt-32 px-5 md:mt-32 lg:m-20 lg:mt-32">
      <h1 className="text-5xl font-bold">Blog</h1>
      <div className="grid lg:grid-cols-4 lg:gap-8 mt-20">
        {getData &&
          getData.map((data: PostType) => {
            return (
              <Link key={data.postId} href={`/blog/${data.postId}`}>
                <div
                  key={data.date}
                  className="cursor-pointer  p-4 border border-gray-700 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl bg-gray-800 text-white"
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={data.featuredImage?.node.mediaItemUrl}
                      alt={data.featuredImage?.node.title}
                      fill
                      objectFit="cover"
                      objectPosition="center"
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="mt-4">
                    <h2 className="text-xl font-semibold mb-2">{data.title}</h2>
                    <p className="text-sm text-gray-400 mb-4">{data.date}</p>
                    <HTMLRenderer html={data.excerpt} />
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};
export default Blog;
