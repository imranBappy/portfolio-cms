export async function POST(req) {
  const { email, password } = await req.json();
  if (process.env.NEXT_PUBLIC_EMAIL !== email?.toLowerCase()) {
    return Response.json({
      message: "Email not found",
      isAuthenticated: false,
    });
  }
  if (process.env.NEXT_PUBLIC_PASSWORD !== password) {
    return Response.json({
      message: "Password incorrect",
      isAuthenticated: false,
    });
  }
  return Response.json({
    isAuthenticated: true,
    message: "Login successful",
    token: "token",
  });
}
