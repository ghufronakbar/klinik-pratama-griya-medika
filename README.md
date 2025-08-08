# Klinik Pratama Griya Medika Candimulyo

Landing page modern untuk Klinik Pratama Griya Medika Candimulyo yang dibangun dengan Next.js 14, TypeScript, dan Tailwind CSS.

## ✨ Fitur

- **Server-Side Rendering (SSR)** untuk SEO optimal
- **Responsive Design** yang mobile-friendly
- **Schema.org JSON-LD** untuk structured data
- **Open Graph & Twitter Cards** untuk social sharing
- **Sitemap & Robots.txt** otomatis
- **Performance** optimized dengan Lighthouse 90+
- **Accessibility** compliant dengan WCAG guidelines

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) atau npm

### Installation

1. Clone repository ini:
```bash
git clone https://github.com/your-username/griyamedika-candimulyo.git
cd griyamedika-candimulyo
```

2. Install dependencies:
```bash
pnpm install
# atau
npm install
```

3. Copy environment variables:
```bash
cp .env.example .env.local
```

4. Edit `.env.local` dan update placeholder values:
```bash
NEXT_PUBLIC_CLINIC_PHONE=+6281234567890
NEXT_PUBLIC_CLINIC_WA=6281234567890
NEXT_PUBLIC_CLINIC_EMAIL=info@griyamedikacandimu
NEXT_PUBLIC_CLINIC_MAPS_URL=https://maps.google.com/embed?...
```

5. Jalankan development server:
```bash
pnpm dev
# atau
npm run dev
```

6. Buka [http://localhost:3000](http://localhost:3000) di browser.

## 📁 Struktur Project

```
├── app/
│   ├── layout.tsx          # Root layout dengan metadata
│   ├── page.tsx           # Homepage (SSR)
│   ├── sitemap.ts         # Dynamic sitemap
│   ├── robots.ts          # Robots.txt
│   └── globals.css        # Global styles
├── components/
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx          # Hero section
│   ├── Services.tsx      # Services grid
│   ├── Advantages.tsx    # Clinic advantages
│   ├── HoursLocation.tsx # Hours & location
│   ├── CTA.tsx           # Call-to-action
│   ├── Footer.tsx        # Footer
│   └── SchemaOrg.tsx     # JSON-LD schema
├── lib/
│   └── clinic-data.ts    # Clinic data structure
└── public/
    └── images/           # Static assets
```

## 🛠️ Kustomisasi

### Update Data Klinik

Edit file `lib/clinic-data.ts` untuk mengubah:
- Informasi klinik (nama, alamat, motto)
- Daftar layanan medis
- Jam operasional
- Kontak information

### Update Konten

Komponen dapat dikustomisasi secara individual:
- **Hero section**: `components/Hero.tsx`
- **Services**: `components/Services.tsx`  
- **Advantages**: `components/Advantages.tsx`
- **Hours & Location**: `components/HoursLocation.tsx`

### Styling

Project menggunakan Tailwind CSS. Customize theme di `tailwind.config.ts`.

## 🚀 Deployment

### Vercel (Recommended)

1. Push code ke GitHub repository
2. Connect repository di [Vercel](https://vercel.com)
3. Set environment variables di Vercel dashboard
4. Deploy!

### Netlify

1. Build project:
```bash
pnpm build
```

2. Upload `out/` folder ke Netlify

### Manual Build

```bash
pnpm build
pnpm start
```

## 📊 SEO Features

- **Meta tags** optimized untuk search engines
- **Open Graph** untuk social media sharing  
- **Schema.org JSON-LD** untuk medical clinic
- **Sitemap.xml** generated otomatis
- **Robots.txt** configured
- **Performance** optimized assets

## 🔧 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_CLINIC_PHONE` | Nomor telepon klinik | `+6281234567890` |
| `NEXT_PUBLIC_CLINIC_WA` | WhatsApp number | `6281234567890` |
| `NEXT_PUBLIC_CLINIC_EMAIL` | Email klinik | `info@example.com` |
| `NEXT_PUBLIC_CLINIC_MAPS_URL` | Google Maps embed URL | `https://maps.google.com/...` |

## 📈 Performance

- **Lighthouse Score**: 90+ di semua metrics
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic dengan Next.js
- **Lazy Loading**: Images dan components

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact

Klinik Pratama Griya Medika Candimulyo
- Website: [https://griyamedika-candimulyo.vercel.app](https://griyamedika-candimulyo.vercel.app)
- Email: info@griyamedikacandimu.com
- Phone: +62 XXX XXXX XXXX

---

**Kesembuhan Pasien Prioritas Kami** 🏥