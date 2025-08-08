"use client";

import { clinicData } from "@/lib/clinic-data";
import { MessageCircle, Clock } from "lucide-react";
import Link from "next/link";

export default function Hero({ data }: { data: typeof clinicData }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10"></div>

      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 text-sm font-medium rounded-full mb-4">
              ✓ Melayani BPJS/KIS Terdaftar
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {data.name}
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-medium">
            {data.motto}
          </p>

          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
            {data.hero.opening} {data.address.district}, {data.address.regency}
            {data.hero.closing}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={`https://wa.me/${data.contact.whatsapp}?text=Halo,%20saya%20ingin%20mendaftar%20konsultasi%20di%20Klinik%20Griya%20Medika`}
              className="inline-flex items-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              target="_blank"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Daftar via WhatsApp
            </Link>

            <button
              onClick={() =>
                document
                  .querySelector("#jam-lokasi")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-emerald-300 transition-all duration-200"
            >
              <Clock className="w-5 h-5 mr-2" />
              Lihat Jam Layanan
            </button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-200/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-200/30 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-200/30 rounded-full blur-xl"></div>
    </section>
  );
}
