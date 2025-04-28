import { createClient } from "contentful";

const useContentful = () => {
  const blogs = createClient({
    space: process.env.NEXT_PUBLIC_BLOG_SPACE,
    accessToken: process.env.NEXT_PUBLIC_BLOG_ACCESS_TOKEN,
    host: process.env.NEXT_PUBLIC_CONTENTFUL_HOST,
  });


  const getBlogs = async () => {
    try {
      const entries = await blogs.getEntries({
        content_type: "lbmBlogs",
      });
      return entries.items;
    } catch (error) {
      console.error(`Error fetching blogs: ${error}`);
      return [];
    }
  };

  return { getBlogs };
};

export default useContentful;
