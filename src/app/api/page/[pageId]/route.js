import connectDB from "@/database";
import Page from "@/models/Page";
export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(req, { params }) {
  try {
    const { pageId } = params;
    await connectDB();
    const page = await Page.findById(pageId);
    return Response.json(page);
  } catch (error) {
    return Response.json({
      message: "Failed to fetch page!",
      error: error,
    });
  }
}
