import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/success'],
      },
    ],
    sitemap: 'https://kyber-security.fr/sitemap.xml',
    host: 'https://kyber-security.fr',
  };
}
