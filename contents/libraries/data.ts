import { Library } from '@/types';

export const libraries: Library[] = [
  {
    slug:"persian-range-picker",

    name:{
      fa:"Persian Range Picker",
      en:"Persian Range Picker"
    },


    description:{
      fa:"کامپوننت انتخاب بازه تاریخ شمسی و میلادی برای React",
      en:"React date range picker supporting Jalali and Gregorian"
    },


    features:[
      {
        fa:"پشتیبانی از TypeScript",
        en:"TypeScript support"
      },
      {
        fa:"قابل شخصی سازی",
        en:"Highly customizable"
      }
    ],


    usageExample:{
      fa:"نصب با npm و استفاده مستقیم در React",
      en:"Install with npm and use directly in React"
    },


    tech:[
      "React",
      "TypeScript",
      "Rollup"
    ],


    npm:"https://npmjs.com/...",
    github:"https://github.com/...",


     media:[


  {
   type:"image",

   src:"/projects/range-picker/1.webp",

   alt:{
    fa:"نمایش انتخاب تاریخ",
    en:"Date selection preview"
   }
  },


  {
   type:"image",

   src:"/projects/range-picker/2.webp",

   alt:{
    fa:"نمایش تنظیمات کامپوننت",
    en:"Component configuration"
   }
  },


  {
   type:"video",

   src:"/projects/range-picker/demo.mp4",

   alt:{
    fa:"دموی کتابخانه",
    en:"Library demo"
   }

  }


 ]
  }
];