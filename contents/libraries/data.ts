import { Library } from '@/types';

export const libraries: Library[] = [
  {
    slug: "persian-range-picker",
    name: "persianRangePicker.name",
    description: "persianRangePicker.description",
    features: [
      "persianRangePicker.features.typescript",
      "persianRangePicker.features.calendar",
      "persianRangePicker.features.customizable",
      "persianRangePicker.features.lightweight",
      "persianRangePicker.features.rtl"
    ],
    usageExample: "persianRangePicker.usageExample",
    tech: ["React", "TypeScript", "Rollup"],
    npm: "https://npmjs.com/package/persian-range-picker",
    github: "https://github.com/hamidreza-fallahi/persian-range-picker",
    media: [
      {
        type: "image",
        src: "/projects/range-picker/1.webp",
        alt: "persianRangePicker.media.preview"
      },
      {
        type: "image",
        src: "/projects/range-picker/2.webp",
        alt: "persianRangePicker.media.config"
      },
      {
        type: "video",
        src: "/projects/range-picker/demo.mp4",
        alt: "persianRangePicker.media.demo"
      }
    ]
  }
];