import { clinicData } from "@/lib/clinic-data";

export default function Services({ data }: { data: typeof clinicData }) {
  return (
    <section id="layanan" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {data.service.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {data.service.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.services.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-emerald-50 rounded-2xl p-6">
            <p className="text-emerald-800 font-medium">
              💡 <strong>Informasi:</strong> {data.service.info}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
