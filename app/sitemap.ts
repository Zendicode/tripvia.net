import type { MetadataRoute } from 'next';
import { site } from '@/content/site';

const routes = [
  '',
  '/how-it-works',
  '/pricing',
  '/support',
  '/privacy',
  '/terms',
  '/delete-account',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((path) => ({
    url: `${site.url}${path}/`,
    lastModified,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));
}
