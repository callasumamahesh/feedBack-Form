import AdminPage from "../components/adminPage";

export default async function Admin() {
  const res = await fetch('http://localhost:3000/api/feedback', { cache: "no-store" });
  const data = await res.json();
  return <AdminPage getFeedBackData={data} />;
}
