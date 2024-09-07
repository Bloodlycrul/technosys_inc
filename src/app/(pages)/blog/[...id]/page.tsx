import { getPost } from "@/lib/blogPostFetchingLogix";
import { Metadata } from "next";
import BlogSinglePageClient from "./page.client";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const post = await getPost(Number(params.id));
  return {
    title: post.post.title,
    description: post.post.excerpt,
    openGraph: {
      images: [post.post.featuredImage.node.mediaItemUrl],
    },
  };
}

export default async function BlogSinglePage({
  params,
}: {
  params: { id: string };
}) {
  return <BlogSinglePageClient id={params.id} />;
}
