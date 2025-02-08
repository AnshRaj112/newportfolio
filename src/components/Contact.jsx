import React, { useState } from 'react';
import { LuMail } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { TbSend } from "react-icons/tb";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    else if (!validateEmail(formData.email)) formErrors.email = "Invalid email format";
    if (!formData.message) formErrors.message = "Message is required";
    if (Object.keys(formErrors).length > 0) return setErrors(formErrors);

    try {
      const response = await fetch('https://newportfolio-backend-uret.onrender.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
        alert('Message sent successfully!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name*" />
        {errors.name && <p className="error">{errors.name}</p>}
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email*" />
        {errors.email && <p className="error">{errors.email}</p>}
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message*" />
        {errors.message && <p className="error">{errors.message}</p>}
        <button type="submit"><TbSend /> Submit</button>
      </form>
      <div className="contact-info">
        <p><GrLocation /> Bhubaneswar, India</p>
        <p><LuMail /> anshraj112@gmail.com</p>
      </div>
    </section>
  );
};

export default Contact;
