import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      name: formData.name,
      email: formData.email,
      message: formData.message,
    });
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-8 text-[#2F4F2F]">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#2F4F2F] mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-[#C8BFB3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:ring-opacity-50 bg-white text-[#2F4F2F]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#2F4F2F] mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-[#C8BFB3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:ring-opacity-50 bg-white text-[#2F4F2F]"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#2F4F2F] mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-[#C8BFB3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:ring-opacity-50 bg-white text-[#2F4F2F]"
              />
            </div>
            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </form>
        </div>
        <div className="flex-1 space-y-6">
          <div className="card">
            <h3 className="text-xl font-bold mb-4 text-[#2F4F2F]">Visit Us</h3>
            <p className="text-[#2F4F2F] mb-2">123 Coffee Lane</p>
            <p className="text-[#2F4F2F] mb-2">Seattle, WA 98101</p>
            <p className="text-[#2F4F2F] mb-2">Phone: (555) 123-4567</p>
            <p className="text-[#2F4F2F]">Email: hello@beanandbrew.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;