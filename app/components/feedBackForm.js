'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Live validation
    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Feedback is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      const data = await fetch('http://localhost:3000/api/feedbackpost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const res = await data.json();
      console.log(res, 'This is response')
      if(res.status === 201){
        alert('Feedback Saved')
        setFormData({name: '',
          email: '',
          message: '',})
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-md rounded-2xl p-6 space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Feedback Form</h2>

        <div>
          <label className="block text-sm font-medium text-gray-700 pb-2">Full Name</label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 pb-2">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 pb-2">Feedback</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-xl transition duration-200 cursor-pointer ${
            loading ? 'opacity-60 cursor-not-allowed' : 'hover:bg-blue-700'
          }`}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
        <Link href='/admin'>
          <button className='w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-xl cursor-pointer'>Admin</button>
        </Link>
      </form>
    </div>
  );
}
