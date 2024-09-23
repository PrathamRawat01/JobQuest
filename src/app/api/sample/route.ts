export async function GET(request: Request) {
  try {
    // your logic
    return Response.json({ message: "Success", data: { id: 0, text: "Run Successfully" } });
  } catch (error) {
    return Response.json({
      message: "Error",
      error: { id: 0, text: "Failure" } ,
    });
  }
}
