import connectDB from "@/database";
import Page from "@/models/Page";

export async function POST(req) {
  try {
    await connectDB();
    const data = await req.json();
    const page = await Page.create(data);
    return Response.json({
      message: "Successfully created page!",
      data: page,
    });
  } catch (error) {
    return Response.json({
      message: "Failed to create page!",
      error: error,
    });
  }
}

export async function GET(req) {
  try {
    await connectDB();
    const pages = await Page.find();
    return Response.json(pages);
  } catch (error) {
    return Response.json({
      message: "Failed to fetch pages!",
      error: error,
    });
  }
}

export async function PUT(req) {
  try {
    await connectDB();
    const data = await req.json();
    const page = await Page.findByIdAndUpdate(data._id, data, { new: true });
    return Response.json({
      message: "Successfully updated page!",
      data: page,
    });
  } catch (error) {
    return Response.json({
      message: "Failed to update page!",
      error: error,
    });
  }
}
