export async function GET(request) {
  //   const searchParams = request.nextUrl.searchParams;
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");

  return Response.json({
    message: "GET request",
    id,
  });
}

export async function POST(request) {
  const data = await request.json();
  console.log("POST request", data);
  return Response.json({
    message: "POST request",
    data: data,
  });
}
