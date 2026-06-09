import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://kyber-security.fr';
  const now = new Date();

  return [
    { url: base,                                                           lastModified: now, changeFrequency: 'monthly',  priority: 1.0 },
    { url: `${base}/gestionnaire-mots-de-passe-post-quantique`,            lastModified: now, changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${base}/telechargement`,                                       lastModified: now, changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${base}/chiffrement-kyber1024`,                                lastModified: now, changeFrequency: 'monthly',  priority: 0.8 },
    { url: `${base}/comparatif-bitwarden-1password-kyber`,                 lastModified: now, changeFrequency: 'monthly',  priority: 0.8 },
    { url: `${base}/blog`,                                                 lastModified: now, changeFrequency: 'weekly',   priority: 0.7 },
    { url: `${base}/blog/kyber-local-vs-cloud`,                            lastModified: now, changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${base}/blog/cryptographie-post-quantique`,                    lastModified: now, changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${base}/blog/argon2id-vs-pbkdf2`,                              lastModified: now, changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${base}/blog/ordinateurs-quantiques-mots-de-passe`,            lastModified: now, changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${base}/cgv`,                                                  lastModified: now, changeFrequency: 'yearly',   priority: 0.3 },
    { url: `${base}/politique-de-confidentialite`,                         lastModified: now, changeFrequency: 'yearly',   priority: 0.3 },
    { url: `${base}/success`,                                              lastModified: now, changeFrequency: 'never',    priority: 0.1 },
  ];
}
