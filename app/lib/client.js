import * as contentful from "contentful";

export const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_BLOG_SPACE,
  accessToken: process.env.NEXT_PUBLIC_BLOG_ACCESS_TOKEN,
  host: process.env.NEXT_PUBLIC_CONTENTFUL_HOST,
});
