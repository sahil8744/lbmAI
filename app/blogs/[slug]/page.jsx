import Link from "next/link";
import BlogsBanner from "../../components/BlogsBanner";
import BlogoComponent from "../../components/BlogComponent";
import { Suspense } from "react";
import BlogsSideBarFrom from "../../components/BlogsSideBarFrom";
import Image from 'next/image';

export async function generateStaticParams() {
  const contentful = require("contentful");

  const client = contentful.createClient({
    space: "xwwzk71iuupz",
    accessToken: "cJrKwn9hhoU6al0j8aDsLaKsuYmO-BOC10Hhh1dC5KY",
    host: "preview.contentful.com",
  });

  const entries = await client.getEntries({
    content_type: "lbmBlogs",
  });

  return entries?.items?.map((val) => ({
    slug: val?.fields?.pageUrl?.split(" ").join("-")?.toLowerCase(),
    title: val?.fields?.metatitle,
    description: val?.fields?.metadescription,
    image: val?.fields?.image?.fields?.file?.url,
  }));
}
export async function generateMetadata({ params }) {
  const data = await generateStaticParams();
  const currentBlog = data.find((blog) => blog.slug === params.slug);
  const dynamicTitle = currentBlog?.title || "Teqo Solutions";
  const dynamicDescription = currentBlog?.description || "Teqo Solutions";
  const dynamicImage = currentBlog?.image;
  return {
    title: dynamicTitle,
    description: dynamicDescription,
    openGraph: {
      title: dynamicTitle,
      description: dynamicDescription,
      images: [
        {
          url: `https:${dynamicImage}`,
        },
      ],
    },
  };
}
const BlockchainBlogs = ({ params }) => {
  const SocialLinks = [
    {
      icon: "facebook",
      path: "https://www.facebook.com/lbmsolutionspvtltd",
      background: "#3b5998",
    },
    {
      icon: "twitter",
      path: "https://x.com/lbm_solutions",
      background: "#1da1f2",
    },
    {
      icon: "linkedin",
      path: "https://www.linkedin.com/company/lbm-solutions-chandigarh",
      background: "#0077b5",
    },
    {
      icon: "linkedin",
      path: "https://www.linkedin.com/company/lbm-solutions/",
      background: "#2ba2dc",
    },
    {
      icon: "telegram",
      path: "https://t.me/lbmsolutions",
      background: "#2ba2dc",
    },
  ];

  return (
    <>
      {/* banner components */}
      <Suspense fallback={"<Loading />"}>
        <BlogsBanner para={params?.slug} />
      </Suspense>

      <div className="container mt-5 blogs_content">
        <div className="row justify-content-center">
          <Suspense fallback={"<Loading />"}>
            <BlogoComponent para={params?.slug} />
          </Suspense>

          <div className="col-xl-4 ps-xxl-5 mt-5 mt-xl-0 ">
            {/* <BlogsSideBar /> */}
            <div className={`all_elements `}>
              {/* social_links */}
              <div className="social_links d-flex align-items-center justify-content-between border-top border-bottom py-2">
                <span className="fw-semibold fs-5">Follow Us :</span>
                <ul className="p-0 m-0 d-flex align-items-center list-unstyled">
                  {SocialLinks.map((val, i) => (
                    <li key={i}>
                      <Link href={val.path}>
                        <span
                          className={`p-2 rounded-5 d-inline-block ms-2`}
                          style={{ background: val.background }}
                        >
                          <Image
                            src={`../social_media/${val.icon}.png`}
                            alt="image"
                            className="d-block"
                           
                            width={0} 
                            height={0} 
                            sizes="100vw"
                            style={{width: "20px", height: "auto", }} 
                            priority
                            quality={100}
                          />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* More Posts */}
              <div className="more_pos mt-4">
                <h4 className="fw-bold">More Posts</h4>

                <BlogsSideBarFrom para={params?.slug} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockchainBlogs;

// import Link from "next/link";
// import BlogsBanner from "../../components/BlogsBanner";
// import BlogoComponent from "../../components/BlogComponent";
// import { Suspense } from "react";
// import BlogsSideBarFrom from "../../components/BlogsSideBarFrom";

// // Fetch blog data dynamically
// export async function getServerSideProps({ params }) {
//   const contentful = require("contentful");

//   const client = contentful.createClient({
//     space: "xwwzk71iuupz",
//     accessToken: "cJrKwn9hhoU6al0j8aDsLaKsuYmO-BOC10Hhh1dC5KY",
//     host: "preview.contentful.com",
//   });

//   const entries = await client.getEntries({
//     content_type: "lbmBlogs",
//     "fields.pageUrl": params.slug.replace("-", " "), // Match slug with pageUrl
//   });

//   const blog = entries?.items[0]?.fields || null;

//   if (!blog) {
//     return {
//       notFound: true, // Return 404 if blog not found
//     };
//   }

//   return {
//     props: {
//       blog: {
//         title: blog.metatitle || "Teqo Solutions",
//         description: blog.metadescription || "Teqo Solutions",
//         slug: params.slug,
//       },
//     },
//   };
// }

// const BlockchainBlogs = ({ blog }) => {
//   const SocialLinks = [
//     {
//       icon: "facebook",
//       path: "https://www.facebook.com/lbmsolutionspvtltd",
//       background: "#3b5998",
//     },
//     {
//       icon: "twitter",
//       path: "https://x.com/lbm_solutions",
//       background: "#1da1f2",
//     },
//     {
//       icon: "linkedin",
//       path: "https://www.linkedin.com/company/lbm-solutions-chandigarh",
//       background: "#0077b5",
//     },
//     {
//       icon: "telegram",
//       path: "https://t.me/lbmsolutions",
//       background: "#2ba2dc",
//     },
//   ];

//   return (
//     <>
//       {/* Dynamic Metadata */}
//       <head>
//         <title>{blog.title}</title>
//         <meta name="description" content={blog.description} />
//       </head>

//       {/* Banner Component */}
//       <Suspense fallback={"<Loading />"}>
//         <BlogsBanner para={blog.slug} />
//       </Suspense>

//       <div className="container mt-5">
//         <div className="row justify-content-center">
//           {/* Main Blog Component */}
//           <Suspense fallback={"<Loading />"}>
//             <BlogoComponent para={blog.slug} />
//           </Suspense>

//           <div className="col-xl-4 ps-xxl-5 mt-5 mt-xl-0">
//             <div className={`all_elements`}>
//               {/* Social Links */}
//               <div className="social_links d-flex align-items-center justify-content-between border-top border-bottom py-2">
//                 <span className="fw-semibold fs-5">Follow Us :</span>
//                 <ul className="p-0 m-0 d-flex align-items-center list-unstyled">
//                   {SocialLinks.map((val, i) => (
//                     <li key={i}>
//                       <Link href={val.path}>
//                         <span
//                           className={`p-2 rounded-5 d-inline-block ms-2`}
//                           style={{ background: val.background }}
//                         >
//                           <img
//                             src={`../social_media/${val.icon}.png`}
//                             alt="image"
//                             className="d-block"
//                             style={{ width: "20px" }}
//                           />
//                         </span>
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* More Posts */}
//               <div className="more_pos mt-4">
//                 <h4 className="fw-bold">More Posts</h4>
//                 <BlogsSideBarFrom para={blog.slug} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BlockchainBlogs;
