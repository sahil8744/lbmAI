"use client";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import BlockAsset from "./BlockAsset";

const options = {
  renderText: (text) => {
    return text.split("\n").reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, []);
  },
  renderMark: {
    [MARKS.CODE]: (text) => {
      return (
        <pre>
          <code>{text}</code>
        </pre>
      );
    },
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (
        node.content.find((item) =>
          item.marks?.find((mark) => mark.type === "code")
        )
      ) {
        return (
          <div>
            <pre>
              <code>{children}</code>
            </pre>
          </div>
        );
      }
      return <p>{children}</p>;
    },
    // [INLINES.ENTRY_HYPERLINK]: (node) => {
    //   if (node.data.target.sys.contentType.sys.id === "post") {
    //     return (
    //       <Link href={`/posts/${node.data.target.fields.slug}`}>
    //         {node.data.target.fields.title}
    //       </Link>
    //     );
    //   }
    // },
    [INLINES.HYPERLINK]: (node) => {
      const text = node.content.find((item) => item.nodeType === "text")?.value;
      return <Link href={node.data.uri}>{text}</Link>;
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
        return (
          <iframe
            height="400"
            width="100%"
            src={node.data.target.fields.embedUrl}
            title={node.data.target.fields.title}
            allowFullScreen={true}
          />
        );
      }
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      try {
        const id = node.data.target.sys.id;
        return <BlockAsset assetId={id} />;
      } catch (err) {
        console.log(err);
      }
    },
  },
};

const RichText = ({ content }) => {
  return <>{documentToReactComponents(content, options)}</>;
};
export default RichText;
