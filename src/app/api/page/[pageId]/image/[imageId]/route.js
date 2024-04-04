import connectDB from "@/database";
import Page from "@/models/Page";

export async function GET(res, { params }) {
  try {
    const { pageId, imageId } = params;
    console.log({ pageId, imageId });
    await connectDB();
    const page = await Page.findById(pageId, {
      images: {
        $elemMatch: {
          _id: imageId,
        },
      },
    });
    const image = page ? (page.images?.length ? page.images[0] : null) : null;
    return Response.json(image);
  } catch (error) {
    console.log(error);
    return Response.json({
      message: "Failed to fetch text!",
      error: error,
    });
  }
}
