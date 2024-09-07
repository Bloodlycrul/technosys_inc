"use server";

export const fetchPost = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_BLOG_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
            query GetAllPosts {
              posts(first: 100) {
                nodes {
                  id
                  postId 
                  title
                  date
                  excerpt
                  featuredImage {
                    node {
                      mediaItemUrl
                      title
                    }
                  }
                  categories {
                    nodes {
                      name
                      categoryId
                    }
                  }
                }
              }
            }
          `,
    }),
  });

  const { data } = await res.json();
  return data.posts.nodes;
};

export const getPost = async (id: number) => {
  const query = `
    query GetPost($id: ID!) {
      post(id: $id, idType: DATABASE_ID) {
        title
        date
        content
        featuredImage {
          node {
            mediaItemUrl
            title
          }
        }
        categories {
          nodes {
            name
            categoryId
          }
        }
      }
    }
  `;

  const response = await fetch(process.env.NEXT_PUBLIC_BLOG_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables: { id } }),
  });
  const { data } = await response.json();
  return data;
};
