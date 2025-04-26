import React from "react";

function AdminPage({ getFeedBackData }) {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Admin Page</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {getFeedBackData.map((feedback, i) => (
          <div
            key={feedback._id}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between"
          >
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {feedback.name}
              </h2>
              <p className="text-sm text-gray-500 mb-2">{feedback.email}</p>
              <div className="max-h-40 overflow-y-auto">
                <p className="text-gray-700 text-sm">{feedback.message}</p>
              </div>
            </div>
            <div className="flex justify-between gap-4 mt-4">
              <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl">
                Edit
              </button>
              <button className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-xl">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPage;
