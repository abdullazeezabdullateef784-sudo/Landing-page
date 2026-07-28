export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center text-white py-24 px-6">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Building the Future with Technology
      </h1>

      <p className="max-w-2xl text-lg text-gray-300 mb-8">
        We create modern websites, mobile applications, cloud solutions,
        and AI-powered software that help businesses grow.
      </p>

      <div className="flex gap-4">
        <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700">
          Get Started
        </button>

        <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black">
          Learn More
        </button>
      </div>
    </section>
  );
}