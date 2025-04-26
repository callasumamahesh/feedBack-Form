import { connectToDB } from "@/lib/mongodb";
import Feedback from "@/model/feedbackModel";

export async function POST(request) {
  try {
    const body = await request.json(); // parse JSON from the request body
    await connectToDB(); // connect to MongoDB
    console.log(body, 'This is the body')
    const feedback = new Feedback(body);
    const savedFeedback = await feedback.save();

    return Response.json({ message: "Feedback saved!", data: savedFeedback, status: 201 },);
  } catch (error) {
    console.log(error)
    return Response.json({ error: "Failed to submit feedback" }, { status: 500 });
  }
}
