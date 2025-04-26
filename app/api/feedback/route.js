import { connectToDB } from "@/lib/mongodb";
import Feedback from "@/model/feedbackModel";

export async function GET(request) {
  try {
    await connectToDB();

    const feedbacks = await Feedback.find(); // Fetch all feedbacks from MongoDB

    return Response.json(feedbacks);
  } catch (error) {
    console.error("Error fetching feedbacks:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch feedbacks" }), {
      status: 500,
    });
  }
}
