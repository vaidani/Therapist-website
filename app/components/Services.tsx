'use client';

export default function TherapyVideoSection() {
  return (
    <section className="py-16 px-6 md:px-12 bg-[#fef6e4] rounded-lg mt-6 mx-4">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        🛠️ Services
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 h-[400px] rounded-lg overflow-hidden shadow-lg">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-lg"
          >
            <source
              src="https://media.istockphoto.com/id/1402628737/video/doctor-consoling-sad-senior-man-in-waiting-room.mp4?s=mp4-640x640-is&k=20&c=vdN9UHE_KlZFyzUfvg_O7I3lPNh_qcmuf1wZtizBRyg="
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              🌿 One-on-One Stress Therapy
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Work privately with a licensed therapist to explore your stress triggers.
              Learn techniques to build emotional resilience in daily life.
              Sessions are customized to your lifestyle and comfort level.
              Practice mindfulness and CBT-based approaches for calm.
              Ideal for individuals facing anxiety, burnout, or overwhelm.
            </p>
            <img
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shutterstock-426694642-therapist-stress-tips-chombosan-opener-1485992354.jpg?crop=1xw:0.786xh;center,top&resize=480:*"
              alt="Stress Therapy"
              className="rounded-lg shadow-md object-cover w-[800px] h-[400px] mx-auto"
            />
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              💬 Relationship & Communication Counseling
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Strengthen emotional connection in personal or family relationships.
              Break negative communication cycles with constructive tools.
              Gain clarity in conflicts and practice healthy boundaries.
              Navigate relationship stress with expert support and empathy.
              Perfect for couples or individuals seeking stronger bonds.
            </p>
            <img
              src="https://cdn4.vectorstock.com/i/1000x1000/96/63/therapy-and-counselling-under-stress-vector-44559663.jpg"
              alt="Relationship Therapy"
              className="rounded-lg shadow-md object-cover max-h-60 mx-auto"
            />
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              🧠 Trauma Healing & Recovery
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Heal safely from past trauma with compassionate guidance.
              Understand your coping mechanisms and emotional responses.
              Restore self-trust, confidence, and mental peace over time.
              Build a supportive framework for long-term wellness.
              For those affected by PTSD, grief, or emotional wounds.
            </p>
            <img
              src="https://theworldthinks.com/wp-content/uploads/2024/03/Healing-from-Emotional-Trauma-3-Proven-Strategies-for-Recovery-and-Resilience.png"
              alt="Trauma Recovery"
              className="rounded-lg shadow-md object-cover w-[800px] h-[400px] mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}




































