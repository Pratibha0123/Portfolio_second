import { useState } from "react";
import { Send, Mail, User, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill all fields.");
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-20 bg-[#0b1018] overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </div>

        <div className="bg-[#11161d]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name Input */}
            <div className="relative group">
              <div className="absolute left-4 top-4 text-gray-500 group-focus-within:text-blue-400 transition-colors">
                <User size={20} />
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full bg-black/20 border border-white/10 rounded-xl px-10 sm:px-12 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                required
              />
            </div>

            {/* Email Input */}
            <div className="relative group">
              <div className="absolute left-4 top-4 text-gray-500 group-focus-within:text-blue-400 transition-colors">
                <Mail size={20} />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full bg-black/20 border border-white/10 rounded-xl px-12 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                required
              />
            </div>

            {/* Message Input */}
            <div className="relative group">
              <div className="absolute left-4 top-4 text-gray-500 group-focus-within:text-blue-400 transition-colors">
                <MessageSquare size={20} />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your Message..."
                className="w-full bg-black/20 border border-white/10 rounded-xl px-12 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-blue-500/20"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              {!isSubmitting && <Send size={20} />}
            </button>

            {status && (
              <p className={`text-center text-sm font-medium ${status.includes("success") ? "text-green-400" : "text-red-400"}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
