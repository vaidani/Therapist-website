'use client';

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">📞 Contact Dr. Serena</h2>
        <p className="text-gray-600 mb-10">
          Reach out to schedule your free consultation. Fill the form below or email directly.
        </p>

        <form className="space-y-6 text-left">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Your Name</label>
            <input type="text" className="w-full border border-gray-300 p-3 rounded-lg" placeholder="John Doe" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Your Email</label>
            <input type="email" className="w-full border border-gray-300 p-3 rounded-lg" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Your Message</label>
            <textarea rows={5} className="w-full border border-gray-300 p-3 rounded-lg" placeholder="Write your message..." />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition"
            >
              📩 Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}





