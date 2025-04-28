import useContentful from "../lib/useContentful";

const MyFunction = async ({}) => {
  const { getBlogs } = useContentful();

  const blogData = await getBlogs();
  const data = blogData?.filter((val) =>
    val?.fields?.url
      ?.split(" ")
      .join("-")
      ?.toLowerCase()
  );

  console.log(data, "dssd");

  return data;
};

export default MyFunction;
