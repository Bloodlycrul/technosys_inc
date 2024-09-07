export type PostType = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  postId: string;
  featuredImage: {
    node: {
      mediaItemUrl: string;
      title: string;
    };
  };
  categories: {
    nodes: {
      name: string;
    };
  };
};

export type SingleBlogPost = {
  post: {
    title: string;
    date: string;
    content: string;
    featuredImage: {
      node: {
        mediaItemUrl: string;
        title: string;
      };
    };
    catagories: {
      nodes: {
        name: string;
        catagoryId: string;
      };
    };
  };
};
