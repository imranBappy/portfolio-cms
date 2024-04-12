import cloudinaryInit from "@/utils/cloudinary";
import { v2 as cloudinary } from "cloudinary";
const path = require("path");
import fs, { writeFile } from "fs/promises";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");
    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = file.name.replaceAll(" ", "_");
    await writeFile(
      path.join(process.cwd(), "public/temp/" + filename),
      buffer
    );
    const tempFilePath = path.join(process.cwd(), "public/temp/" + filename);
    cloudinaryInit();
    const image = await cloudinary.uploader.upload(tempFilePath, {
      // folder: "products",
      allowed_formats: ["jpg", "jpeg", "png", "gif"],
      format: "jpeg",
      public_id: `${file.fieldname}-${Date.now()}-${file.originalname}.jpeg`,
    });

    await fs.unlink(tempFilePath);
    return Response.json(image);
  } catch (error) {
    console.log(error);
    return Response.json({
      message: error,
    });
  }
}
