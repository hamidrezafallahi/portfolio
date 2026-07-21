import type { MetadataRoute } from 'next';

import { libraries } from '@/contents/libraries/data';
import { projects } from '@/contents/projects/data';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.hamidrezafalahi.ir';

type ChangeFreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

function buildEntry(
  path: string,
  priority: number,
  changeFrequency: ChangeFreq
): MetadataRoute.Sitemap[number] {
  return {
    url: `${BASE_URL}/${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: {
      languages: {
        en: `${BASE_URL}/en/${path}`,
        fa: `${BASE_URL}/fa/${path}`,
        'x-default': `${BASE_URL}/en/${path}`,
      },
    },
  };
}
function buildLocalizedEntries(
  path: string,
  priority: number,
  changeFrequency: ChangeFreq
): MetadataRoute.Sitemap {
  return [
    buildEntry(`fa/${path}`, priority, changeFrequency),
    buildEntry(`en/${path}`, priority, changeFrequency),
  ];
}
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...buildLocalizedEntries('', 1.0, 'monthly'),
    ...buildLocalizedEntries('projects', 0.9, 'weekly'),
    ...buildLocalizedEntries('libraries', 0.9, 'weekly'),

    ...projects.flatMap((p) =>
      buildLocalizedEntries(`projects/${p.slug}`, 0.7, 'monthly')
    ),

    ...libraries.flatMap((l) =>
      buildLocalizedEntries(`libraries/${l.slug}`, 0.7, 'monthly')
    ),
  ];
}