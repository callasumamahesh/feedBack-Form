// import AdminPage from "../components/adminPage";

// export default async function Admin() {
//   const res = await fetch('http://localhost:3000/api/feedback', { cache: "no-store" });
//   const data = await res.json();
//   return <AdminPage getFeedBackData={data} />;
// }


"use client";

import { useEffect, useState } from "react";
import AdminPage from "../components/adminPage";

export default function Admin() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFeedbacks() {
      try {
        const res = await fetch("/api/feedback");
        const data = await res.json();
        setFeedbacks(data);
      } catch (error) {
        console.error("Failed to fetch feedbacks:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchFeedbacks();
  }, []);

  if (loading) return <p className="text-center mt-4 text-4xl">Loading feedbacks...</p>;

  return <AdminPage getFeedBackData={feedbacks} />;
}
