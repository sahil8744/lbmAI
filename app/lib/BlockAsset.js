"use client";
import React, { useState, useEffect } from "react";
import { getRichImage } from "./getRichImage";

const BlockAsset = ({ assetId }) => {
  const [imageData, setImageData] = useState({ url: "", alt: "" });
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getRichImage(assetId)
      .then((res) => {
        setImageData({
          url: res.url,
          alt: res.alt,
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching image: ", error);
        setLoading(false);
      });
  }, [assetId]);

  if (isLoading) return <p>Loading...</p>;
  if (!imageData.url) return <p>No image found!</p>;

  return (
    <div>
      <img
        src={imageData.url}
        alt={imageData.alt}
        className="img-fluid"
      />
    </div>
  );
};

export default BlockAsset;
