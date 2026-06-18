import type { MetadataRoute } from 'next';

import { libraries } from '@/contents/libraries/data';
import { projects } from '@/contents/projects/data';
import {
  Library,
  Project,
} from '@/types';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';

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

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries = projects.map((p:Project) =>
    buildEntry(`projects/${p.slug}`, 0.7, 'monthly')
  );
  const libraryEntries = libraries.map((p:Library) =>
    buildEntry(`libraries/${p.slug}`, 0.7, 'monthly')
  );

  return [
    buildEntry('', 1.0, 'monthly'),
    buildEntry('projects', 0.9, 'weekly'),
    buildEntry('libraries', 0.9, 'weekly'),
    ...projectEntries,
    // وقتی دیتای libraries رو هم داشتی همینطوری اضافه کن:
    // ...libraries.map((l) => buildEntry(`libraries/${l.slug}`, 0.7, 'monthly')),
  ];
}