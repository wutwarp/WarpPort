import type { LocalizedText } from "@/lib/i18n";

export type Project = {
  name: LocalizedText;
  shortName: string;
  description: LocalizedText;
  techStack: string[];
  type: LocalizedText;
  image: string;
  images?: string[];
  preview: "hr" | "ranking" | "website" | "service" | "monitor" | "warehouse" | "game";
  accent: string;
};

export const projects: Project[] = [
  {
    name: {
      en: "StinHR – Human Resource Management System",
      th: "StinHR – ระบบบริหารทรัพยากรบุคคล",
    },
    shortName: "StinHR",
    description: {
      en: "Developed and enhanced an HRMS for educational institutions, covering employee management, payroll, leave, performance evaluation, and approval workflows.",
      th: "พัฒนาและปรับปรุงระบบ HRMS สำหรับสถาบันการศึกษา ครอบคลุมข้อมูลบุคลากร เงินเดือน การลา การประเมินผล และ Workflow การอนุมัติ",
    },
    techStack: ["ASP.NET Core", "C#", "jQuery", "SQL Server"],
    type: { en: "Enterprise System", th: "ระบบองค์กร" },
    image: "/projects/stinhr/stinhr-01.avif",
    images: [
      "/projects/stinhr/stinhr-01.avif",
      "/projects/stinhr/stinhr-02.avif",
      "/projects/stinhr/stinhr-03.avif",
    ],
    preview: "hr",
    accent: "#2979ff",
  },
  {
    name: {
      en: "CU-iDMS for Rankings – Chulalongkorn University",
      th: "CU-iDMS for Rankings – จุฬาลงกรณ์มหาวิทยาลัย",
    },
    shortName: "CU-iDMS for Rankings",
    description: {
      en: "Developed and maintained a university ranking data management system, including workflow improvements, user permissions, data approval, and reporting features.",
      th: "พัฒนาและดูแลระบบบริหารจัดการข้อมูลเพื่อสนับสนุนการจัดอันดับมหาวิทยาลัย รวมถึงการปรับปรุง Workflow สิทธิ์ผู้ใช้งาน การอนุมัติข้อมูล และรายงาน",
    },
    techStack: ["ASP.NET Core", "C#", "jQuery", "SQL Server"],
    type: { en: "University System", th: "ระบบมหาวิทยาลัย" },
    image: "/projects/cu-idms/cu-idms-01.avif",
    images: ["/projects/cu-idms/cu-idms-01.avif"],
    preview: "ranking",
    accent: "#e85a96",
  },
  {
    name: { en: "ETDA Website", th: "เว็บไซต์ ETDA" },
    shortName: "ETDA Website",
    description: {
      en: "Developed and enhanced the agency's official website using Kentico CMS, contributing to technical design and website improvements.",
      th: "พัฒนาและปรับปรุงเว็บไซต์หลักของหน่วยงานด้วย Kentico CMS พร้อมมีส่วนร่วมด้านการออกแบบทางเทคนิคและการปรับปรุงเว็บไซต์",
    },
    techStack: ["Kentico CMS", "HTML", "CSS", "JavaScript"],
    type: { en: "Government Website", th: "เว็บไซต์หน่วยงานรัฐ" },
    image: "/projects/etda/etda-01.avif",
    images: [
      "/projects/etda/etda-01.avif",
      "/projects/etda/etda-02.avif",
      "/projects/etda/etda-03.avif",
    ],
    preview: "website",
    accent: "#7857db",
  },
  {
    name: {
      en: "ITService – Enterprise Service Management System",
      th: "ITService – ระบบบริหารจัดการบริการองค์กร",
    },
    shortName: "ITService",
    description: {
      en: "Designed and developed an internal service management system supporting ticketing, approval workflows, access requests, and IT asset lending.",
      th: "ออกแบบและพัฒนาระบบ Service Management ภายในองค์กร รองรับการแจ้งปัญหา Workflow การอนุมัติ คำขอสิทธิ์การใช้งาน และการยืมทรัพย์สิน IT",
    },
    techStack: ["ASP.NET MVC", "C#", "jQuery", "SQL Server", "Azure AD", "IIS"],
    type: { en: "Internal Tool", th: "เครื่องมือภายในองค์กร" },
    image: "/projects/itservice.png",
    preview: "service",
    accent: "#0f91c8",
  },
  {
    name: { en: "DI Water Monitoring System", th: "ระบบติดตามคุณภาพน้ำ DI" },
    shortName: "DI Water Monitoring",
    description: {
      en: "Developed a monitoring system for DI water quality used in manufacturing, including standard validation and historical data tracking.",
      th: "พัฒนาระบบตรวจสอบคุณภาพน้ำ DI สำหรับกระบวนการผลิต รองรับการตรวจสอบค่ามาตรฐานและการจัดเก็บประวัติข้อมูล",
    },
    techStack: ["ASP.NET MVC", "C#", "jQuery", "SQL Server"],
    type: { en: "Manufacturing System", th: "ระบบงานผลิต" },
    image: "/projects/di-water.png",
    preview: "monitor",
    accent: "#10a6a0",
  },
  {
    name: {
      en: "3D Warehouse Simulation – Thai Samsung Electronics",
      th: "ระบบจำลองคลังสินค้า 3 มิติ – Thai Samsung Electronics",
    },
    shortName: "3D Warehouse Simulation",
    description: {
      en: "Developed a real-time 3D warehouse visualization system using Unity, integrating inventory data through RESTful APIs built with Node.js.",
      th: "พัฒนาระบบจำลองคลังสินค้า 3 มิติแบบ Real-time ด้วย Unity โดยเชื่อมต่อข้อมูล Inventory ผ่าน RESTful API ที่พัฒนาด้วย Node.js",
    },
    techStack: ["Unity", "C#", "C++", "Node.js", "REST API", "Postman"],
    type: { en: "3D Simulation", th: "ระบบจำลอง 3 มิติ" },
    image: "/projects/warehouse-simulation/unity3d-01.avif",
    images: ["/projects/warehouse-simulation/unity3d-01.avif"],
    preview: "warehouse",
    accent: "#6177eb",
  },
  {
    name: {
      en: "Senior Project – Single Player Survival Game",
      th: "Senior Project – เกมเอาชีวิตรอดแบบผู้เล่นคนเดียว",
    },
    shortName: "Single Player Survival Game",
    description: {
      en: "Developed a single-player survival game for Windows using Godot Engine with C# and C++, focusing on gameplay systems and core mechanics.",
      th: "พัฒนาเกมเอาชีวิตรอดแบบผู้เล่นคนเดียวสำหรับ Windows ด้วย Godot Engine โดยใช้ C# และ C++ เน้นระบบ Gameplay และกลไกหลักของเกม",
    },
    techStack: ["Godot Engine", "C#", "C++"],
    type: { en: "Game Development", th: "การพัฒนาเกม" },
    image: "/projects/survival-game/godot-01.avif",
    images: ["/projects/survival-game/godot-01.avif"],
    preview: "game",
    accent: "#566a48",
  },
];

export const skillGroups = [
  {
    title: { en: "Frontend", th: "ส่วนหน้า" },
    icon: "<>",
    skills: ["Next.js", "React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "jQuery"],
  },
  {
    title: { en: "Backend", th: "ส่วนหลัง" },
    icon: "{ }",
    skills: ["ASP.NET Core", "ASP.NET MVC", "C#", "Node.js", "REST API"],
  },
  {
    title: { en: "Database", th: "ฐานข้อมูล" },
    icon: "DB",
    skills: ["SQL Server", "PostgreSQL", "Prisma", "Supabase"],
  },
  {
    title: { en: "Tools & Deployment", th: "เครื่องมือและการ Deploy" },
    icon: "↗",
    skills: ["Git", "GitHub", "IIS", "Windows Server", "Virtual Machine", "Azure AD", "Cloudflare", "Postman"],
  },
] as const;
