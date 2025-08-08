import { clinicData } from "@/lib/clinic-data";
import { Clock, MapPin, ExternalLink } from "lucide-react";

export default function HoursLocation() {
  return (
    <section id="jam-lokasi" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Jam Layanan & Lokasi
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Informasi lengkap jadwal operasional dan lokasi klinik untuk
            kemudahan kunjungan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Jam Layanan */}
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <Clock className="w-8 h-8 text-emerald-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Jam Layanan</h3>
            </div>

            <div className="space-y-3">
              {clinicData.operatingHours.map((schedule, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-2 border-b border-emerald-200 last:border-b-0"
                >
                  <span className="font-medium text-gray-900">
                    {schedule.day}
                  </span>
                  <span className="text-emerald-700 font-semibold">
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-emerald-200 rounded-lg">
              <p className="text-emerald-800 text-sm font-medium text-center">
                ⏰ Daftar lebih awal untuk menghindari antrian panjang
              </p>
            </div>
          </div>

          {/* Lokasi */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <MapPin className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">
                Lokasi Klinik
              </h3>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">
                Alamat Lengkap:
              </h4>
              <p className="text-gray-700 leading-relaxed">
                {clinicData.address.full}
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  clinicData.address.full
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Buka di Google Maps
              </a>

              <div className="bg-blue-200 rounded-lg p-4">
                <p className="text-blue-800 text-sm font-medium text-center">
                  📍 Lokasi strategis dengan akses mudah dari berbagai arah
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Embed Placeholder */}
        <div className="mt-12">
          <div className="bg-gray-100 rounded-2xl p-4 text-center">
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.774736224098!2d110.26884707517381!3d-7.490106592522029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a890e745101bb%3A0xd45904485f53c14d!2sKLINIK%20PRATAMA%20GRIYA%20MEDIKA!5e0!3m2!1sid!2sid!4v1754650741222!5m2!1sid!2sid"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
