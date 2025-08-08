import { clinicData } from '@/lib/clinic-data';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Informasi Klinik */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">GM</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Klinik Pratama</h3>
                <p className="text-gray-400 text-sm">Griya Medika Candimulyo</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              {clinicData.motto}
            </p>
            <p className="text-gray-400 text-sm">
              Pelayanan kesehatan terpercaya dengan fasilitas modern dan tenaga medis profesional.
            </p>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-emerald-400 mr-3 mt-0.5" />
                <p className="text-gray-300 text-sm">{clinicData.address.full}</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-emerald-400 mr-3" />
                <p className="text-gray-300 text-sm">{clinicData.contact.phone}</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-emerald-400 mr-3" />
                <p className="text-gray-300 text-sm">{clinicData.contact.email}</p>
              </div>
            </div>
          </div>

          {/* Jam Layanan */}
          <div>
            <h4 className="font-semibold text-lg mb-4 flex items-center">
              <Clock className="w-5 h-5 text-emerald-400 mr-2" />
              Jam Layanan
            </h4>
            <div className="space-y-2">
              <p className="text-gray-300 text-sm">
                <strong>Senin - Sabtu:</strong><br />
                06.00-11.00 & 16.00-20.00 WIB
              </p>
              <p className="text-gray-300 text-sm">
                <strong>Minggu:</strong><br />
                16.00-20.00 WIB
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} {clinicData.name}. Hak Cipta Dilindungi. |{' '}
            <a href="#" className="text-emerald-400 hover:text-emerald-300 transition-colors">
              Kebijakan Privasi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}