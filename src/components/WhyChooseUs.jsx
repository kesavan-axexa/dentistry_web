import React, { useState } from "react";
import { motion } from "framer-motion";

const WhyChooseUs = React.forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    treatment: "Cleaning & Whitening",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Validate form fields
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone Number is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSubmitted(true);

      // Simulate sending an email
      const mockEmail = `
        To: kesavan8388@gmail.com
        Subject: New Appointment Request
        Body:
          Name: ${formData.name}
          Phone Number: ${formData.phoneNumber}
          Email: ${formData.email}
          Treatment of Interest: ${formData.treatment}
      `;
      console.log("Mock Email Sent:", mockEmail);

      // Reset form
      setFormData({
        name: "",
        phoneNumber: "",
        email: "",
        treatment: "Cleaning & Whitening",
      });
    }
  };

  return (
    <div ref={ref} className="bg-gray-50 text-gray-800 py-16 px-5 md:px-16 xl:px-32">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          className="text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-teal-500">
            Why <span className="text-gray-800">Choose Us?</span>
          </h2>
          <div className="border-t-4 border-teal-500 w-20 mb-8"></div>
          <ul className="space-y-8">
            {[
              "Exceptional Dental Care Tailored for You",
              "Exclusive Offers: Free Consultations & X-Rays",
              "Cutting-Edge Family & Cosmetic Dentistry",
              "Comprehensive Insurance Coverage Accepted",
              "Same-Day Treatments for Your Convenience",
              "Highly Recommended by Satisfied Patients",
            ].map((reason, index) => (
              <li key={index} className="flex items-center space-x-6">
                <div className="bg-teal-500 text-white rounded-full p-3 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="md:text-xl text-lg leading-relaxed font-medium text-gray-700">
                  {reason}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="bg-gray-200 text-gray-800 rounded-2xl shadow-xl p-8 md:p-12"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-700 mb-6">Get in Touch</h3>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-base font-bold mb-2 text-gray-700" htmlFor="name">
                Name:
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border ${
                  errors.name ? "border-red-500" : "border-gray-400"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-base font-bold mb-2 text-gray-700" htmlFor="phoneNumber">
                Phone Number:
              </label>
              <input
                id="phoneNumber"
                type="tel"
                placeholder="Enter Your Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={`w-full px-4 py-3 border ${
                  errors.phoneNumber ? "border-red-500" : "border-gray-400"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm`}
              />
              {errors.phoneNumber && <p className="text-red-500 text-sm mt-2">{errors.phoneNumber}</p>}
            </div>
            <div>
              <label className="block text-base font-bold mb-2 text-gray-700" htmlFor="email">
                Email:
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border ${
                  errors.email ? "border-red-500" : "border-gray-400"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-base font-bold mb-2 text-gray-700" htmlFor="treatment">
                Treatment of Interest:
              </label>
              <select
                id="treatment"
                value={formData.treatment}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm"
              >
                <option>Cleaning & Whitening</option>
                <option>Cosmetic Dentistry</option>
                <option>Dental Implants</option>
                <option>Orthodontics</option>
                <option>Emergency Care</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3 rounded-lg font-bold hover:from-teal-600 hover:to-teal-700 transition-all shadow-lg"
            >
              Schedule Now
            </button>
          </form>
          {isSubmitted && (
            <p className="text-green-500 mt-4">Your appointment request has been submitted!</p>
          )}
          <p className="text-xs text-gray-500 mt-4 leading-relaxed">
            By submitting this form, you agree to receive communications about our services. Your privacy matters to us, and we ensure confidentiality.
          </p>
        </motion.div>
      </div>
    </div>
  );
});

export default WhyChooseUs;
