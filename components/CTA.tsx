import { clinicData } from '@/lib/clinic-data';
import { MessageCircle, Phone } from 'lucide-react';
import Link from 'next/link';

export default function CTA() {
  return (
    <section id="kontak" className="py-20 bg-gradient-to-br from-emerald-600 to-blue-600">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Siap Untuk Konsultasi?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Jangan tunda kesehatan Anda. Hubungi kami sekarang untuk mendapatkan pelayanan terbaik.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              href={`https://wa.me/${clinicData.contact.whatsapp}?text=Halo,%20saya%20ingin%20mendaftar%20konsultasi%20di%20Klinik%20Griya%20Medika`}
              className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-100 text-emerald-600 font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              target="_blank"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Daftar via WhatsApp
            </Link>
            
            <a
              href={`tel:${clinicData.contact.phone}`}
              className="inline-flex items-center px-8 py-4 bg-transparent hover:bg-white/10 text-white font-semibold rounded-xl border-2 border-white hover:border-gray-100 transition-all duration-200"
            >
              <Phone className="w-5 h-5 mr-2" />
              {clinicData.contact.phone}
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <p className="text-white/90 text-sm">
              <strong>Jam Layanan:</strong> Senin-Sabtu (06.00-11.00 & 16.00-20.00) • Minggu (16.00-20.00) WIB
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}