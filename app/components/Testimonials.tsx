'use client';

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-orange-50 py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">🌟 Testimonials</h2>

        <div className="space-y-10">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-left">
            <p className="text-gray-700 italic mb-4">
              “Working with Dr. Blake helped me understand my anxiety and feel more grounded. I’ve regained confidence in myself.”
            </p>
            <p className="font-bold text-gray-900">— Sarah R.</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-left">
            <p className="text-gray-700 italic mb-4">
              “She truly listens and creates a safe space to heal. I feel stronger and more in control of my emotions.”
            </p>
            <p className="font-bold text-gray-900">— James M.</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-left">
            <p className="text-gray-700 italic mb-4">
              “Therapy sessions with Dr. Blake were life-changing. Her support helped me get through my toughest days.”
            </p>
            <p className="font-bold text-gray-900">— Priya S.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

