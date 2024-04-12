import connectDB from "@/database";
import Page from "@/models/Page";

export async function GET(res, { params }) {
  try {
    const { pageId, textId } = params;
    await connectDB();
    const page = await Page.findById(pageId, {
      texts: {
        $elemMatch: {
          _id: textId,
        },
      },
    });
    const text = page ? (page.texts.length ? page.texts[0] : null) : null;
    return Response.json(text);
  } catch (error) {
    return Response.json({
      message: "Failed to fetch text!",
      error: error,
    });
  }
}
