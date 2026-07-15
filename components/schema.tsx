

export function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Best Matrimony",
    "url": "https://bestmatrimony.com",
    "telephone": "+919876543210",
    "email": "info@bestmatrimony.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Aonla, Bareilly",
      "addressLocality": "Bareilly",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "243301",
      "addressCountry": "IN"
    }
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
