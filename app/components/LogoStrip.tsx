'use client';

export default function LogoStrip() {
  return (
    <section className="bg-white py-10 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Trusted Wellness Partners</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <img
            src="https://static.vecteezy.com/system/resources/previews/036/905/383/non_2x/design-a-logo-for-a-stress-release-massage-therapy-vector.jpg"
            alt="Stress Therapy Logo"
            className="w-40 h-auto object-contain rounded-md shadow-md"
          />
          <img
            src="https://i.etsystatic.com/22989786/r/il/4568b3/3710849627/il_fullxfull.3710849627_90f0.jpg"
            alt="Wellness Logo"
            className="w-40 h-auto object-contain rounded-md shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
