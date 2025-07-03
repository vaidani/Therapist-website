'use client';

export default function Hero() {
  return (
    <section className="relative py-12 px-6 md:px-12 bg-[#fef6e4] rounded-lg mt-6 mx-4 flex flex-col items-center justify-center">
      
      {/* Video on Top */}
      <div className="w-full md:w-[800px] h-[400px] rounded-lg overflow-hidden shadow-lg mb-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://media.istockphoto.com/id/1974067879/video/flying-into-the-sunset-nicoya-peninsula-costa-rica-part-2.mp4?s=mp4-640x640-is&k=20&c=ab_IYna6R98UBfsghBC-zZTdxqkfQStIR5nmqdQksS8="
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Text Content Below */}
      <div className="text-center max-w-3xl text-gray-900">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          ✨ Compassionate Therapy for a Healthier You
        </h1>
        <p className="text-lg md:text-xl font-semibold mb-6">
          ✨ Helping you navigate anxiety, relationships, and healing with personalized care.
        </p>
        <a
          href="#contact"
          className="bg-gray-900 text-white text-lg font-bold py-3 px-8 rounded-full hover:bg-gray-700 transition inline-block"
        >
          ✨ Book a Free Consult
        </a>
      </div>
    </section>
  );
}













