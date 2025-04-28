"use client";
import { client } from "./client";

export const getRichImage = async (assetId) => {
  try {
    const asset = await client.getAsset(assetId);
    const url = asset.fields.file.url;
    const alt = asset.fields.title || "img";
    return { url, alt };
  } catch (err) {
    console.log("Error in getRichImage:", err);
    return null;
  }
};
