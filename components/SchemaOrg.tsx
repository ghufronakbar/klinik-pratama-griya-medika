import Script from 'next/script';
import { clinicData } from '@/lib/clinic-data';

export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": clinicData.name,
    "url": "https://griyamedika-candimulyo.vercel.app",
    "telephone": clinicData.contact.phone,
    "medicalSpecialty": "PrimaryCare",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": clinicData.address.street,
      "addressLocality": `${clinicData.address.village}, ${clinicData.address.district}`,
      "addressRegion": clinicData.address.province,
      "addressCountry": "ID"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "06:00",
        "closes": "11:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "16:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "16:00",
        "closes": "20:00"
      }
    ]
  };

  return (
    <Script
      id="schema-org"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}