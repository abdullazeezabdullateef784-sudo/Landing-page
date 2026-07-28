export default function Services() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Our Services
        </h2>

        <p className="text-gray-600 mb-12">
          We provide innovative technology solutions to help businesses grow.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="shadow-lg rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Web Development
            </h3>
            <p className="text-gray-600">
              Modern, responsive websites built with the latest technologies.
            </p>
          </div>

          <div className="shadow-lg rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Mobile Apps
            </h3>
            <p className="text-gray-600">
              High-performance Android and iOS applications for your business.
            </p>
          </div>

          <div className="shadow-lg rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Cloud Solutions
            </h3>
            <p className="text-gray-600">
              Secure cloud infrastructure and scalable business solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}