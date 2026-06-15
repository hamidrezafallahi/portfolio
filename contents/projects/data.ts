import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: "arian-erp",
    title: "arianErp.title",
    description: "arianErp.description",
    problem: "arianErp.problem",
    solution: "arianErp.solution",
    role: "arianErp.role",
    stack: [
      "Next",
      "TypeScript",
      "Redux-toolkit",
      "Rtk-Query",
      "Indexed Db",
      "Firebase",
      "Async-mutex",
      "Antd",
      "Next-intl",
      "Redux-state-sync",
      "Stimulsoft-dashboards-js",
      "Stimulsoft-reports-js"
    ],

    media: [
      {
        type: "image",
        src: "/images/erpDashboard.png",
        alt: "arianErp.media.dashboard"
      },
      {
        type: "image",
        src: "/images/erpList.png",
        alt: "arianErp.media.list"
      },
      {
        type: "image",
        src: "/images/erpForm.png",
        alt: "arianErp.media.form"
      },
      {
        type: "image",
        src: "/images/erpCustom.png",
        alt: "arianErp.media.custom"
      },
      {
        type: "video",
        src: "/videos/erpListLayoutForm.mp4",
        alt: "arianErp.media.layoutForm"
      },
      {
        type: "video",
        src: "/videos/erpRangePicker and report.mp4",
        alt: "arianErp.media.reportRange"
      },
      {
        type: "video",
        src: "/videos/erpCalendar.mp4",
        alt: "arianErp.media.calendar"
      },
      {
        type: "video",
        src: "/videos/complex page roles.mp4",
        alt: "arianErp.media.roles"
      },
      {
        type: "video",
        src: "/videos/uploader.mp4",
        alt: "arianErp.media.uploader"
      },
      {
        type: "video",
        src: "/videos/stimulsoft report.mp4",
        alt: "arianErp.media.stimulsoftReport"
      },
      {
        type: "video",
        src: "/videos/masterDetail calling api.mp4",
        alt: "arianErp.media.voucher"
      }
    ]
  }
];