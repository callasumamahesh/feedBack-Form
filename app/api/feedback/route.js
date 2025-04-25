import { connectToDB } from "@/lib/mongodb";

export async function GET(request) {
  connectToDB()
  const feedbackData = [
    {
      id: 1,
      fullName: "Alice Johnson",
      email: "alice.johnson@example.com",
      feedback: "Great service! Very satisfied with the experience."
    },
    {
      id: 2,
      fullName: "Brian Smith",
      email: "brian.smith@example.com",
      feedback: "Website was a bit slow but support was helpful."
    },
    {
      id: 3,
      fullName: "Catherine Lee",
      email: "catherine.lee@example.com",
      feedback: "I love the UI, very clean and intuitive."
    },
    {
      id: 4,
      fullName: "David Kim",
      email: "david.kim@example.com",
      feedback: "Had trouble logging in initially but resolved quickly."
    },
    {
      id: 5,
      fullName: "Ella Turner",
      email: "ella.turner@example.com",
      feedback: "Excellent experience, would recommend to friends."
    },
    {
      id: 6,
      fullName: "Frankie Gomez",
      email: "frankie.gomez@example.com",
      feedback: "Could use more payment options."
    },
    {
      id: 7,
      fullName: "Grace Liu",
      email: "grace.liu@example.com",
      feedback: "Customer support was responsive and helpful."
    },
    {
      id: 8,
      fullName: "Henry Patel",
      email: "henry.patel@example.com",
      feedback: "Nice product range, fast delivery too."
    },
    {
      id: 9,
      fullName: "Isabella Davis",
      email: "isabella.davis@example.com",
      feedback: "Very user-friendly platform. I enjoyed using it."
    },
    {
      id: 10,
      fullName: "Jack Brown",
      email: "jack.brown@example.com",
      feedback: "Everything worked smoothly. Great job!"
    }
  ];

  return Response.json(feedbackData);
}
