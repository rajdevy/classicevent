import React, { useState } from "react";

export const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form data submitted: ", formData);
  };

  return (
    // <div>ContactUsForm</div>
    <div className="bg-white rounded-lg shadow-lg w-[35%]">
      <div className=" bg-gray-600 h-20 flex items-center justify-center">
        <h2 className="text-[24px] text-white font-normal">Send Us Enquiry</h2>
      </div>

      <div className="mx-4 my-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          autoComplete="off"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
        />
      </div>

      <div className="mx-4 my-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="off"
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
        />
      </div>

      <div className="mx-4 my-4">
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          autoComplete="off"
          value={formData.phone}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
        />
      </div>

      <div className="mx-4 my-4">
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-700"
        >
          Subject
        </label>
        <input
          type="text"
          name="subject"
          autoComplete="off"
          value={formData.subject}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
        />
      </div>

      <div className="mx-4 my-4">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
          rows="4"
        ></textarea>
      </div>

      <div className="mx-4 my-4">
        <button
          type="submit"
          onChange={handleSubmit}
          className="w-full bg-[#ff0000] border border-transparent text-white p-2 rounded-md hover:bg-white hover:border-[#ff0000] hover:text-[#ff0000] transition duration-200"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
