'use client';

export default function About() {
  return (
    <section id="about" className="py-16 px-8 text-center bg-white">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">🌿 About Dr. Serena Blake</h2>

      <div className="flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80"
          alt="Dr. Serena Blake"
          className="rounded-lg shadow-lg w-64 h-auto"
        />
      </div>

      <div className="mt-6 text-gray-700 max-w-2xl mx-auto text-lg leading-8">
        <p className="mb-4">
          💆‍♀️ Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, known for her calm presence and compassionate care.
          With over 8 years of experience and 500+ client sessions, she supports individuals in managing anxiety, rebuilding confidence, and healing from emotional wounds.
        </p>
        <p className="mb-4">
          🧠 She blends science-backed therapies like Cognitive Behavioral Therapy (CBT), mindfulness, and trauma-informed approaches to help clients regain balance and peace.
        </p>
        <p>
          🌸 Whether you’re struggling with stress, emotional pain, or relationship challenges—Dr. Blake creates a safe, supportive space tailored to your unique path to healing.
        </p>
      </div>
    </section>
  );
}



