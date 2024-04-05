import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { sepia } from "@cloudinary/url-gen/actions/effect";

export async function createPage(data) {
  try {
    const res = await fetch(`${process.env.API_URL}/api/page`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getPages() {
  try {
    const res = await fetch(`${process.env.API_URL}/api/page`);
    const result = await res.json();
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// upload image to cloudinary
export const uploadImages = async (images) => {
  const urls = [];
  const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.CLOUDINARY_NAME,
      apiKey: process.env.CLOUDINARY_API_KEY,
      apiSecret: process.env.CLOUDINARY_API_SECRET,
    },
  });
  try {
    for (const image of images) {
      if (!image.file) continue;
        
      // urls.push(res.secure_url);
    }
    return urls;
  } catch (error) {
    console.error(error);
    return [];
  }
};
