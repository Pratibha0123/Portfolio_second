import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Card from "./Card";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // success or error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic frontend validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill all fields.");
      return;
    }

    try {
      // Example: send form data to API endpoint
      // await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });

      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("Something went wrong. Try again later.");
    }
  };

  return (
    <section id="contact" className="border-t border-white/5 py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4">
        <SectionTitle>Contact Me</SectionTitle>

        <Card className="p-6 mt-8">
          <form onSubmit={handleSubmit} className="grid gap-6">
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="peer w-full rounded-lg border border-white/10 bg-transparent px-4 pt-5 pb-2 focus:outline-none focus:border-primary"
                required
              />
              <label className="absolute left-4 top-2 text-sm text-white/50 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-white/30 peer-placeholder-shown:text-base">
                Your Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="peer w-full rounded-lg border border-white/10 bg-transparent px-4 pt-5 pb-2 focus:outline-none focus:border-primary"
                required
              />
              <label className="absolute left-4 top-2 text-sm text-white/50 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-white/30 peer-placeholder-shown:text-base">
                Your Email
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your Message"
                className="peer w-full rounded-lg border border-white/10 bg-transparent px-4 pt-5 pb-2 focus:outline-none focus:border-primary resize-none"
                required
              />
              <label className="absolute left-4 top-2 text-sm text-white/50 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-white/30 peer-placeholder-shown:text-base">
                Your Message
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="rounded-lg bg-primary px-6 py-2 font-medium text-white hover:bg-primary/80 transition-colors"
            >
              Send Message
            </button>

            {/* Status Message */}
            {status && (
              <p
                className={`mt-2 text-sm ${
                  status.includes("success") ? "text-green-400" : "text-red-400"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </Card>
      </div>
    </section>
  );
}
