export const clinicData = {
  name: "Klinik Pratama Griya Medika Candimulyo",
  motto: "Kesembuhan Pasien Prioritas Kami",
  hero: {
    opening: "Pelayanan kesehatan terpercaya di",
    closing: "dengan fasilitas lengkap dan tenaga medis profesional.",
  },
  address: {
    street: "Jl. Candimulyo – Tegalrejo No.01, RT 02 RW 01",
    village: "Dusun Barisan, Kelurahan Candimulyo",
    district: "Kecamatan Candimulyo",
    regency: "Kabupaten Magelang",
    province: "Jawa Tengah",
    country: "Indonesia",
    full: "Jl. Candimulyo – Tegalrejo No.01, RT 02 RW 01, Dusun Barisan, Kelurahan Candimulyo, Kecamatan Candimulyo, Kabupaten Magelang",
  },
  service: {
    title: "Layanan Kesehatan Kami",
    description:
      "Pelayanan medis komprehensif dengan standar kualitas tinggi untuk kesehatan Anda dan keluarga",
    info: "Semua layanan tersedia untuk pasien umum dan peserta BPJS/KIS yang terdaftar",
  },
  services: [
    {
      id: "rawat-jalan",
      title: "Pengobatan Rawat Jalan",
      description:
        "Pelayanan medis umum dan BPJS/KIS dengan dokter berpengalaman",
      icon: "🏥",
    },
    {
      id: "pengobatan-gigi",
      title: "Pengobatan Gigi",
      description: "Perawatan gigi dan mulut lengkap untuk kesehatan optimal",
      icon: "🦷",
    },
    {
      id: "bedah-minor",
      title: "Bedah Minor",
      description: "Tindakan bedah kecil dengan fasilitas steril dan aman",
      icon: "🔬",
    },
    {
      id: "sunat-khitan",
      title: "Sunat/Khitan",
      description: "Layanan sunat modern dengan perawatan terpadu",
      icon: "✂️",
    },
    {
      id: "perawatan-luka",
      title: "Perawatan Luka",
      description: "Penanganan luka termasuk ulkus dengan metode terkini",
      icon: "🩹",
    },
    {
      id: "kb-ibu-anak",
      title: "KB, Kesehatan Ibu & Anak",
      description: "Program KB dan layanan kesehatan untuk ibu dan anak",
      icon: "👶",
    },
    {
      id: "imunisasi",
      title: "Imunisasi",
      description: "Vaksinasi lengkap sesuai jadwal imunisasi nasional",
      icon: "💉",
    },
    {
      id: "pelayanan-holistik",
      title: "Pelayanan Holistik",
      description: "Promotif, preventif, kuratif, dan rehabilitatif terpadu",
      icon: "🌟",
    },
    {
      id: "medical-checkup",
      title: "Medical Check-up",
      description: "Pemeriksaan kesehatan berkala untuk deteksi dini",
      icon: "📋",
    },
    {
      id: "laboratorium",
      title: "Laboratorium",
      description: "Pemeriksaan darah, urine, dan dahak dengan akurat",
      icon: "🧪",
    },
  ],
  advantages: [
    {
      title: "Melayani BPJS/KIS Terdaftar",
      description:
        "Klinik resmi terdaftar BPJS Kesehatan untuk kemudahan berobat",
    },
    {
      title: "Tenaga Medis Profesional",
      description: "Dokter dan perawat berpengalaman dengan komitmen tinggi",
    },
    {
      title: "Fasilitas Memadai",
      description: "Ruang periksa, tindakan, farmasi, dan laboratorium lengkap",
    },
    {
      title: "Akses Mudah & Ramah Keluarga",
      description: "Lokasi strategis dengan pelayanan ramah untuk semua usia",
    },
  ],
  operatingHours: [
    { day: "Senin", hours: "06.00–11.00 & 16.00–20.00 WIB" },
    { day: "Selasa", hours: "06.00–11.00 & 16.00–20.00 WIB" },
    { day: "Rabu", hours: "06.00–11.00 & 16.00–20.00 WIB" },
    { day: "Kamis", hours: "06.00–11.00 & 16.00–20.00 WIB" },
    { day: "Jumat", hours: "06.00–11.00 & 16.00–20.00 WIB" },
    { day: "Sabtu", hours: "06.00–11.00 & 16.00–20.00 WIB" },
    { day: "Minggu", hours: "16.00–20.00 WIB" },
  ],
  contact: {
    phone: process.env.NEXT_PUBLIC_CLINIC_PHONE!,
    whatsapp: process.env.NEXT_PUBLIC_CLINIC_WHATSAPP!,
    email: process.env.NEXT_PUBLIC_CLINIC_EMAIL!,
    mapsUrl: process.env.NEXT_PUBLIC_CLINIC_MAPS_URL!,
  },
};

export const siteConfig = {
  name: "Klinik Pratama Griya Medika Candimulyo",
  description:
    "Klinik Pratama Griya Medika Candimulyo - Kesembuhan Pasien Prioritas Kami. Layanan kesehatan umum, BPJS/KIS, pengobatan gigi, bedah minor, dan laboratorium di Magelang.",
  url: process.env.NEXT_PUBLIC_SITE_URL!, // Placeholder URL
  ogImage: "/og-image.jpg", // Placeholder image
};
