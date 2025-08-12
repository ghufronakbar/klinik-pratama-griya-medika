export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: ArticleCategory;
  images: ArticleImage[];
  author: string;
  publishedAt: string;
  readTime: number;
  tags: string[];
  featured: boolean;
}

export interface ArticleImage {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  isFeatured: boolean;
}

export interface ArticleCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
}

export const articleCategories: ArticleCategory[] = [
  {
    id: "kesehatan-umum",
    name: "Kesehatan Umum",
    slug: "kesehatan-umum",
    description: "Tips dan informasi kesehatan untuk kehidupan sehari-hari",
    color: "emerald"
  },
  {
    id: "pencegahan",
    name: "Pencegahan",
    slug: "pencegahan",
    description: "Langkah-langkah pencegahan penyakit dan menjaga kesehatan",
    color: "blue"
  },
  {
    id: "ibu-anak",
    name: "Ibu & Anak",
    slug: "ibu-anak",
    description: "Kesehatan ibu hamil, menyusui, dan tumbuh kembang anak",
    color: "pink"
  },
  {
    id: "gigi-mulut",
    name: "Gigi & Mulut",
    slug: "gigi-mulut",
    description: "Perawatan dan kesehatan gigi serta mulut",
    color: "cyan"
  },
  {
    id: "lansia",
    name: "Lansia",
    slug: "lansia",
    description: "Kesehatan dan perawatan untuk usia lanjut",
    color: "orange"
  }
];

export const articlesData: Article[] = [
  {
    id: "pentingnya-medical-checkup-rutin",
    slug: "pentingnya-medical-checkup-rutin",
    title: "Pentingnya Medical Check-up Rutin untuk Kesehatan Optimal",
    excerpt: "Medical check-up rutin adalah kunci utama dalam menjaga kesehatan dan mencegah penyakit serius. Pelajari mengapa pemeriksaan berkala sangat penting untuk Anda.",
    content: `
      <p>Medical check-up rutin merupakan salah satu investasi terbaik yang dapat Anda lakukan untuk kesehatan jangka panjang. Di Klinik Pratama Griya Medika Candimulyo, kami memahami betapa pentingnya deteksi dini dalam mencegah berbagai penyakit serius.</p>

      <h2>Mengapa Medical Check-up Penting?</h2>
      <p>Banyak penyakit serius seperti diabetes, hipertensi, dan penyakit jantung tidak menunjukkan gejala pada tahap awal. Dengan melakukan pemeriksaan rutin, kondisi-kondisi ini dapat terdeteksi lebih dini sehingga penanganan dapat dilakukan dengan lebih efektif.</p>

      <h2>Apa Saja yang Diperiksa?</h2>
      <ul>
        <li><strong>Pemeriksaan Fisik Lengkap:</strong> Tekanan darah, berat badan, tinggi badan, dan tanda vital lainnya</li>
        <li><strong>Pemeriksaan Laboratorium:</strong> Darah lengkap, gula darah, kolesterol, dan fungsi organ</li>
        <li><strong>Pemeriksaan Khusus:</strong> EKG, rontgen dada, dan pemeriksaan sesuai usia dan risiko</li>
      </ul>

      <h2>Kapan Sebaiknya Melakukan Check-up?</h2>
      <p>Untuk orang dewasa sehat, disarankan melakukan medical check-up setahun sekali. Namun, bagi mereka yang memiliki riwayat penyakit keluarga atau faktor risiko tertentu, pemeriksaan mungkin perlu dilakukan lebih sering.</p>

      <h2>Layanan Medical Check-up di Griya Medika</h2>
      <p>Klinik kami menyediakan paket medical check-up yang komprehensif dengan fasilitas laboratorium lengkap dan tenaga medis berpengalaman. Kami juga melayani peserta BPJS untuk pemeriksaan kesehatan tertentu.</p>

      <p>Jangan tunggu sampai sakit untuk memeriksakan kesehatan Anda. Hubungi kami sekarang untuk jadwal medical check-up rutin Anda.</p>
    `,
    category: articleCategories[0],
    images: [
      {
        id: "img-1",
        url: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Dokter melakukan pemeriksaan medical check-up",
        caption: "Pemeriksaan medical check-up rutin di Klinik Griya Medika",
        isFeatured: true
      },
      {
        id: "img-2",
        url: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Peralatan medis untuk pemeriksaan kesehatan",
        caption: "Fasilitas medis modern untuk pemeriksaan lengkap",
        isFeatured: false
      },
      {
        id: "img-3",
        url: "https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Laboratorium klinik untuk pemeriksaan darah",
        caption: "Laboratorium lengkap untuk berbagai pemeriksaan",
        isFeatured: false
      }
    ],
    author: "Dr. Ahmad Wijaya",
    publishedAt: "2024-01-15",
    readTime: 5,
    tags: ["medical checkup", "kesehatan", "pencegahan", "deteksi dini"],
    featured: true
  },
  {
    id: "tips-menjaga-kesehatan-gigi-anak",
    slug: "tips-menjaga-kesehatan-gigi-anak",
    title: "Tips Menjaga Kesehatan Gigi Anak Sejak Dini",
    excerpt: "Kesehatan gigi anak perlu dijaga sejak dini untuk mencegah masalah di kemudian hari. Simak tips praktis dari dokter gigi kami.",
    content: `
      <p>Kesehatan gigi dan mulut anak merupakan fondasi penting untuk kesehatan gigi di masa dewasa. Di Klinik Pratama Griya Medika Candimulyo, kami sering melihat berbagai masalah gigi pada anak yang sebenarnya dapat dicegah dengan perawatan yang tepat sejak dini.</p>

      <h2>Kapan Mulai Merawat Gigi Anak?</h2>
      <p>Perawatan gigi anak sebaiknya dimulai sejak gigi pertama muncul, biasanya sekitar usia 6 bulan. Bahkan sebelum gigi tumbuh, gusi bayi perlu dibersihkan dengan kain lembut yang dibasahi air hangat.</p>

      <h2>Tips Perawatan Gigi Anak</h2>
      <ul>
        <li><strong>Sikat Gigi Rutin:</strong> 2 kali sehari dengan pasta gigi berfluoride sesuai usia</li>
        <li><strong>Pilih Sikat yang Tepat:</strong> Sikat gigi dengan bulu halus dan kepala kecil</li>
        <li><strong>Batasi Makanan Manis:</strong> Kurangi permen, cokelat, dan minuman manis</li>
        <li><strong>Minum Air Putih:</strong> Biasakan anak minum air putih setelah makan</li>
        <li><strong>Kunjungi Dokter Gigi:</strong> Pemeriksaan rutin setiap 6 bulan</li>
      </ul>

      <h2>Tanda-tanda Masalah Gigi pada Anak</h2>
      <p>Waspadai gejala seperti sakit gigi, gusi bengkak, bau mulut, atau keengganan anak untuk makan. Segera konsultasikan ke dokter gigi jika menemukan tanda-tanda tersebut.</p>

      <h2>Layanan Gigi Anak di Griya Medika</h2>
      <p>Klinik kami menyediakan layanan kesehatan gigi khusus anak dengan pendekatan yang ramah dan menyenangkan. Tim dokter gigi kami berpengalaman menangani anak-anak dengan sabar dan telaten.</p>

      <p>Jangan tunggu sampai anak mengeluh sakit gigi. Mulai kebiasaan baik sejak dini untuk gigi yang sehat seumur hidup.</p>
    `,
    category: articleCategories[3],
    images: [
      {
        id: "img-4",
        url: "https://images.pexels.com/photos/6111563/pexels-photo-6111563.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Anak sedang sikat gigi",
        caption: "Mengajarkan anak sikat gigi dengan benar",
        isFeatured: true
      },
      {
        id: "img-5",
        url: "https://images.pexels.com/photos/6111564/pexels-photo-6111564.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Dokter gigi memeriksa gigi anak",
        caption: "Pemeriksaan gigi anak di klinik",
        isFeatured: false
      }
    ],
    author: "drg. Sari Indrawati",
    publishedAt: "2024-01-10",
    readTime: 4,
    tags: ["gigi anak", "kesehatan gigi", "perawatan gigi", "anak"],
    featured: true
  },
  {
    id: "pentingnya-imunisasi-lengkap",
    slug: "pentingnya-imunisasi-lengkap",
    title: "Pentingnya Imunisasi Lengkap untuk Perlindungan Optimal",
    excerpt: "Imunisasi adalah cara terbaik melindungi anak dari berbagai penyakit berbahaya. Ketahui jadwal dan jenis imunisasi yang diperlukan.",
    content: `
      <p>Imunisasi merupakan salah satu program kesehatan masyarakat yang paling berhasil dalam mencegah penyakit menular. Di Klinik Pratama Griya Medika Candimulyo, kami berkomitmen mendukung program imunisasi nasional untuk melindungi kesehatan anak-anak Indonesia.</p>

      <h2>Mengapa Imunisasi Penting?</h2>
      <p>Imunisasi membantu tubuh membangun kekebalan terhadap penyakit-penyakit berbahaya seperti campak, polio, difteri, dan hepatitis B. Dengan imunisasi lengkap, anak akan terlindungi dari penyakit yang dapat menyebabkan kecacatan atau bahkan kematian.</p>

      <h2>Jadwal Imunisasi Dasar</h2>
      <ul>
        <li><strong>0-2 bulan:</strong> Hepatitis B, BCG, Polio</li>
        <li><strong>2-4 bulan:</strong> DPT-HB-Hib, Polio, PCV, Rotavirus</li>
        <li><strong>6-9 bulan:</strong> Campak/MR</li>
        <li><strong>12-15 bulan:</strong> DPT-HB-Hib lanjutan, PCV lanjutan</li>
        <li><strong>18-24 bulan:</strong> DPT-HB-Hib booster, Campak/MR</li>
      </ul>

      <h2>Imunisasi Tambahan</h2>
      <p>Selain imunisasi dasar, tersedia juga imunisasi tambahan seperti varicella (cacar air), influenza, dan HPV untuk perlindungan yang lebih komprehensif.</p>

      <h2>Keamanan Vaksin</h2>
      <p>Semua vaksin yang digunakan telah melalui uji keamanan yang ketat. Efek samping yang mungkin terjadi umumnya ringan seperti demam ringan atau kemerahan di tempat suntikan.</p>

      <h2>Layanan Imunisasi di Griya Medika</h2>
      <p>Klinik kami menyediakan layanan imunisasi lengkap sesuai jadwal nasional. Kami juga melayani imunisasi untuk peserta BPJS dan memberikan konsultasi lengkap tentang jadwal imunisasi yang tepat untuk anak Anda.</p>
    `,
    category: articleCategories[1],
    images: [
      {
        id: "img-6",
        url: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Perawat menyiapkan vaksin imunisasi",
        caption: "Persiapan vaksin imunisasi di klinik",
        isFeatured: true
      },
      {
        id: "img-7",
        url: "https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Anak mendapat imunisasi",
        caption: "Proses imunisasi yang aman dan nyaman",
        isFeatured: false
      }
    ],
    author: "Dr. Rina Sari",
    publishedAt: "2024-01-08",
    readTime: 6,
    tags: ["imunisasi", "vaksin", "anak", "pencegahan"],
    featured: true
  },
  {
    id: "mengenal-hipertensi-silent-killer",
    slug: "mengenal-hipertensi-silent-killer",
    title: "Mengenal Hipertensi: Si Pembunuh Senyap",
    excerpt: "Hipertensi sering tidak menunjukkan gejala namun dapat berakibat fatal. Pelajari cara mencegah dan mengelola tekanan darah tinggi.",
    content: `
      <p>Hipertensi atau tekanan darah tinggi sering disebut sebagai "silent killer" karena jarang menunjukkan gejala yang jelas namun dapat menyebabkan komplikasi serius seperti stroke, serangan jantung, dan gagal ginjal.</p>

      <h2>Apa itu Hipertensi?</h2>
      <p>Hipertensi terjadi ketika tekanan darah sistolik ≥140 mmHg dan/atau diastolik ≥90 mmHg. Kondisi ini memaksa jantung bekerja lebih keras untuk memompa darah ke seluruh tubuh.</p>

      <h2>Faktor Risiko Hipertensi</h2>
      <ul>
        <li>Usia di atas 40 tahun</li>
        <li>Riwayat keluarga dengan hipertensi</li>
        <li>Kelebihan berat badan</li>
        <li>Kurang aktivitas fisik</li>
        <li>Konsumsi garam berlebihan</li>
        <li>Merokok dan konsumsi alkohol</li>
        <li>Stres berkepanjangan</li>
      </ul>

      <h2>Cara Mencegah Hipertensi</h2>
      <p>Pencegahan hipertensi dapat dilakukan dengan menerapkan gaya hidup sehat seperti olahraga teratur, diet rendah garam, menjaga berat badan ideal, dan mengelola stres dengan baik.</p>

      <h2>Pengelolaan Hipertensi</h2>
      <p>Bagi yang sudah terdiagnosis hipertensi, penting untuk rutin kontrol ke dokter, minum obat sesuai anjuran, dan tetap menjalani gaya hidup sehat.</p>

      <p>Di Klinik Griya Medika, kami menyediakan layanan pemeriksaan dan pengelolaan hipertensi yang komprehensif untuk membantu Anda menjaga tekanan darah tetap normal.</p>
    `,
    category: articleCategories[0],
    images: [
      {
        id: "img-8",
        url: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Pemeriksaan tekanan darah",
        caption: "Pemeriksaan tekanan darah rutin sangat penting",
        isFeatured: true
      }
    ],
    author: "Dr. Budi Santoso",
    publishedAt: "2024-01-05",
    readTime: 5,
    tags: ["hipertensi", "tekanan darah", "jantung", "pencegahan"],
    featured: false
  },
  {
    id: "tips-menjaga-kesehatan-lansia",
    slug: "tips-menjaga-kesehatan-lansia",
    title: "Tips Menjaga Kesehatan di Usia Lanjut",
    excerpt: "Usia lanjut bukan berarti harus sakit-sakitan. Simak tips menjaga kesehatan optimal di usia senja.",
    content: `
      <p>Memasuki usia lanjut memang membawa berbagai perubahan pada tubuh, namun bukan berarti kualitas hidup harus menurun. Dengan perawatan yang tepat, lansia dapat tetap sehat dan aktif.</p>

      <h2>Tantangan Kesehatan Lansia</h2>
      <p>Seiring bertambahnya usia, sistem imun menurun, massa otot berkurang, dan risiko penyakit kronis meningkat. Namun, hal ini dapat diminimalkan dengan gaya hidup sehat.</p>

      <h2>Tips Kesehatan untuk Lansia</h2>
      <ul>
        <li><strong>Olahraga Ringan:</strong> Jalan kaki, senam lansia, atau yoga</li>
        <li><strong>Nutrisi Seimbang:</strong> Perbanyak sayur, buah, dan protein</li>
        <li><strong>Cukup Tidur:</strong> 7-8 jam per hari</li>
        <li><strong>Jaga Kesehatan Mental:</strong> Tetap aktif bersosialisasi</li>
        <li><strong>Kontrol Rutin:</strong> Periksa kesehatan secara berkala</li>
      </ul>

      <h2>Pencegahan Jatuh pada Lansia</h2>
      <p>Jatuh merupakan risiko serius bagi lansia. Pastikan rumah aman dengan pencahayaan cukup, lantai tidak licin, dan gunakan alat bantu jika diperlukan.</p>

      <p>Klinik Griya Medika menyediakan layanan kesehatan khusus lansia dengan pendekatan holistik untuk menjaga kualitas hidup di usia senja.</p>
    `,
    category: articleCategories[4],
    images: [
      {
        id: "img-9",
        url: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Lansia berolahraga ringan",
        caption: "Olahraga ringan untuk menjaga kesehatan lansia",
        isFeatured: true
      }
    ],
    author: "Dr. Maya Sari",
    publishedAt: "2024-01-03",
    readTime: 4,
    tags: ["lansia", "kesehatan", "olahraga", "nutrisi"],
    featured: false
  },
  {
    id: "pentingnya-asi-eksklusif",
    slug: "pentingnya-asi-eksklusif",
    title: "Pentingnya ASI Eksklusif untuk Tumbuh Kembang Bayi",
    excerpt: "ASI eksklusif memberikan nutrisi terbaik untuk bayi. Ketahui manfaat dan tips sukses memberikan ASI eksklusif.",
    content: `
      <p>ASI (Air Susu Ibu) adalah makanan terbaik untuk bayi yang mengandung semua nutrisi yang dibutuhkan untuk tumbuh kembang optimal dalam 6 bulan pertama kehidupan.</p>

      <h2>Manfaat ASI Eksklusif</h2>
      <ul>
        <li>Mengandung antibodi untuk melindungi dari infeksi</li>
        <li>Mudah dicerna dan diserap tubuh bayi</li>
        <li>Mengurangi risiko alergi dan asma</li>
        <li>Mendukung perkembangan otak bayi</li>
        <li>Memperkuat ikatan ibu dan bayi</li>
      </ul>

      <h2>Tips Sukses ASI Eksklusif</h2>
      <p>Inisiasi menyusu dini, posisi menyusui yang benar, dan dukungan keluarga sangat penting untuk kesuksesan ASI eksklusif.</p>

      <h2>Mengatasi Masalah Menyusui</h2>
      <p>Konsultasikan dengan tenaga kesehatan jika mengalami masalah seperti puting lecet, ASI kurang, atau bayi sulit menyusu.</p>

      <p>Tim kesehatan ibu dan anak di Klinik Griya Medika siap membantu ibu dalam perjalanan menyusui yang sukses.</p>
    `,
    category: articleCategories[2],
    images: [
      {
        id: "img-10",
        url: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Ibu menyusui bayi",
        caption: "Momen indah menyusui bayi",
        isFeatured: true
      }
    ],
    author: "Dr. Lestari Wulandari",
    publishedAt: "2024-01-01",
    readTime: 4,
    tags: ["ASI", "bayi", "menyusui", "ibu"],
    featured: false
  }
];

// Helper functions
export function getArticleBySlug(slug: string): Article | undefined {
  return articlesData.find(article => article.slug === slug);
}

export function getFeaturedArticles(): Article[] {
  return articlesData.filter(article => article.featured);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return articlesData.filter(article => article.category.slug === categorySlug);
}

export function getCategoryBySlug(slug: string): ArticleCategory | undefined {
  return articleCategories.find(category => category.slug === slug);
}

export function getRecentArticles(limit: number = 6): Article[] {
  return articlesData
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}