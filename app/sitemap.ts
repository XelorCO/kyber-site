import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://kyber-security.fr';
  const now = new Date();

  return [
    { url: base,                                    lastModified: now, changeFrequency: 'monthly',  priority: 1.0 },
    { url: `${base}/cgv`,                           lastModified: now, changeFrequency: 'yearly',   priority: 0.3 },
    { url: `${base}/politique-de-confidentialite`,  lastModified: now, changeFrequency: 'yearly',   priority: 0.3 },
    { url: `${base}/success`,                       lastModified: now, changeFrequency: 'never',    priority: 0.1 },
  ];
}
