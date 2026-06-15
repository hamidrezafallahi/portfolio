import { Project } from '@/types';

export const projects: Project[] = [

{
 slug:"persian-range-picker",


 title:{
  fa:"کتابخانه Persian Range Picker",
  en:"Persian Range Picker Library"
 },


 description:{
  fa:"کامپوننت انتخاب بازه تاریخ شمسی و میلادی برای React",
  en:"React date range picker supporting Jalali and Gregorian calendars"
 },


 problem:{
  fa:"انتخاب تاریخ چندتقویمی در پروژه‌های فارسی چالش‌برانگیز بود.",
  en:"Multi-calendar date selection was challenging in Persian applications."
 },


 solution:{
  fa:"یک کامپوننت reusable با TypeScript ساخته شد.",
  en:"A reusable TypeScript component was created."
 },


 role:{
  fa:"طراحی معماری و توسعه کامل کتابخانه",
  en:"Architecture design and full library development"
 },


 stack:[
  "React",
  "TypeScript",
  "Rollup"
 ],


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