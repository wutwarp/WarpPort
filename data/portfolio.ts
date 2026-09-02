import type { LocalizedText } from "@/lib/i18n";

export type Project = {
  name: LocalizedText;
  shortName: string;
  description: LocalizedText;
  detailDescription?: LocalizedText;
  techStack: string[];
  type: LocalizedText;
  image: string;
  images?: string[];
  demoUrl?: string;
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
    name: {
      en: "CUNurse Data Management System",
      th: "ระบบจัดการข้อมูล CUNurse",
    },
    shortName: "CUNurse",
    description: {
      en: "A research and academic data management system for CU Nursing, supporting research records, grants, administrative work, reports, and theses.",
      th: "ระบบจัดการข้อมูลวิจัยและผลงานวิชาการของคณะพยาบาลศาสตร์ จุฬาฯ รองรับงานวิจัย ทุน งานบริหาร รายงานผล และวิทยานิพนธ์",
    },
    detailDescription: {
      en: "A research and academic data management system for the Faculty of Nursing, Chulalongkorn University. The system supports the management of research records, academic works, grants, administrative tasks, reports, and theses, enabling structured data collection, review, and tracking across the faculty.",
      th: "ระบบจัดการข้อมูลวิจัยและผลงานวิชาการสำหรับคณะพยาบาลศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย รองรับการบันทึกและจัดการข้อมูลด้านงานวิจัย ผลงานวิชาการ ทุน งานบริหาร รายงานผล และวิทยานิพนธ์ ช่วยให้หน่วยงานสามารถรวบรวม ตรวจสอบ และติดตามข้อมูลสำคัญได้อย่างเป็นระบบ",
    },
    techStack: ["ASP.NET Core", "C#", "jQuery", "SQL Server"],
    type: {
      en: "University System / Academic Management System",
      th: "ระบบมหาวิทยาลัย / ระบบจัดการข้อมูลงานวิชาการ",
    },
    image: "/projects/cu-nurse/cu-nurse-01.avif",
    images: [
      "/projects/cu-nurse/cu-nurse-01.avif",
      "/projects/cu-nurse/cu-nurse-02.avif",
      "/projects/cu-nurse/cu-nurse-03.avif",
    ],
    preview: "ranking",
    accent: "#db5f99",
  },
  {
    name: {
      en: "Manpower Planning System",
      th: "ระบบบริหารอัตรากำลังพล",
    },
    shortName: "Manpower",
    description: {
      en: "A manpower planning system for visualizing organizational positions, employee assignments, and vacant roles to support workforce planning and organization management.",
      th: "ระบบบริหารอัตรากำลังพล แสดงโครงสร้างตำแหน่งงาน พนักงานในแต่ละตำแหน่ง และตำแหน่งที่ว่าง เพื่อสนับสนุนการวางแผนกำลังคนขององค์กร",
    },
    techStack: ["ASP.NET Core", "C#", "JavaScript", "SQL Server"],
    type: { en: "Enterprise System", th: "ระบบองค์กร" },
    image: "/projects/manpower/manpower-01.avif",
    images: ["/projects/manpower/manpower-01.avif"],
    preview: "hr",
    accent: "#2f7bff",
  },
  {
    name: {
      en: "Enterprise RPT Management System",
      th: "ระบบจัดการข้อมูล RPT สำหรับองค์กร",
    },
    shortName: "Enterprise RPT",
    description: {
      en: "An enterprise RPT management system supporting NTA management, role permissions, approval workflows, email approval, notifications, and report generation.",
      th: "ระบบจัดการข้อมูล RPT สำหรับองค์กรระดับบริษัทมหาชน รองรับ NTA, Role Permission, Workflow การอนุมัติ, Email Approval, Notification และการออกรายงาน",
    },
    detailDescription: {
      en: "An enterprise RPT management system for a public company, supporting NTA data management, user roles and permissions, approval workflows, email notifications, email-based approval, and report generation. The system helps support data tracking, status monitoring, internal review, and enterprise-level data management processes.",
      th: "ระบบจัดการข้อมูล RPT สำหรับองค์กรระดับบริษัทมหาชน รองรับการจัดการข้อมูล NTA การกำหนดสิทธิ์และบทบาทผู้ใช้งาน Workflow การอนุมัติ การแจ้งเตือนและ Approve ผ่าน Email รวมถึงการออกรายงานต่าง ๆ เพื่อสนับสนุนการตรวจสอบ การติดตามสถานะ และการบริหารจัดการข้อมูลภายในองค์กร",
    },
    techStack: ["ASP.NET Core", "C#", "jQuery", "SQL Server", "Role Permission", "Email Approval", "Report Generation"],
    type: {
      en: "Enterprise System / Approval Workflow System",
      th: "ระบบองค์กร / ระบบอนุมัติข้อมูล",
    },
    image: "/projects/rpt/rpt-01.avif",
    images: [
      "/projects/rpt/rpt-01.avif",
      "/projects/rpt/rpt-02.avif",
      "/projects/rpt/rpt-03.avif",
    ],
    preview: "service",
    accent: "#2478d4",
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
      en: "Fitness Event Landing Page",
      th: "เว็บไซต์กิจกรรมการแข่งขันออกกำลังกาย",
    },
    shortName: "Fitness Event",
    description: {
      en: "A fitness event landing page optimized for fast loading, smooth user experience, and high-traffic readiness during registration periods.",
      th: "เว็บไซต์ Landing Page สำหรับโปรโมทการแข่งขันออกกำลังกาย พร้อมปรับแต่ง Performance ให้โหลดเร็ว ใช้งานลื่นไหล และรองรับผู้เข้าชมช่วงเปิดรับสมัคร",
    },
    detailDescription: {
      en: "A promotional landing page for a fitness event campaign, designed to present event details, images, videos, and registration links. Focused on performance optimization to ensure fast loading, smooth user experience, and high-traffic readiness during registration periods.",
      th: "เว็บไซต์ Landing Page สำหรับโปรโมทกิจกรรมการแข่งขันออกกำลังกาย รองรับการนำเสนอรายละเอียดกิจกรรม รูปภาพ วิดีโอ และลิงก์ลงทะเบียน พร้อมปรับแต่ง Performance ให้เว็บไซต์โหลดเร็ว ใช้งานลื่นไหล และรองรับผู้เข้าชมจำนวนมากในช่วงเปิดรับสมัคร",
    },
    techStack: ["HTML", "CSS", "JavaScript", "Cloudflare", "GA4", "Performance Optimization"],
    type: {
      en: "Event Landing Page",
      th: "เว็บไซต์โปรโมทกิจกรรม",
    },
    image: "/projects/fitness-event/fitness-event-01.avif",
    images: [
      "/projects/fitness-event/fitness-event-01.avif",
      "/projects/fitness-event/fitness-event-02.avif",
    ],
    preview: "website",
    accent: "#ff7043",
  },
  {
    name: {
      en: "Inventory Management System",
      th: "ระบบจัดการคลังสินค้า",
    },
    shortName: "Inventory Management",
    description: {
      en: "A full-featured inventory management system built with Next.js and Supabase, supporting stock-in/stock-out, over-deduction prevention, and warehouse dashboard insights.",
      th: "ระบบจัดการคลังสินค้าแบบครบวงจรด้วย Next.js และ Supabase รองรับการรับเข้า–เบิกออกสินค้า ป้องกันการตัดสต็อกเกินจริง และแสดง Dashboard ภาพรวมคลังสินค้า",
    },
    detailDescription: {
      en: "A full-featured inventory management system built with Next.js and Supabase, supporting product management, stock-in/stock-out transactions, inventory tracking, and prevention of over-deduction beyond available stock. Includes a dashboard for visualizing stock overview, inventory movements, remaining quantities, and key warehouse insights.",
      th: "ระบบจัดการคลังสินค้าแบบครบวงจร พัฒนาด้วย Next.js และ Supabase รองรับการจัดการสินค้า การรับเข้า–เบิกออกสต็อก การตรวจสอบจำนวนคงเหลือ และการป้องกันการตัดสต็อกเกินจำนวนจริง พร้อม Dashboard สำหรับแสดงภาพรวมสินค้า คลังคงเหลือ รายการเคลื่อนไหว และข้อมูลสำคัญเพื่อช่วยในการบริหารจัดการคลังสินค้า",
    },
    techStack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Authentication", "Dashboard"],
    type: {
      en: "Inventory System / Stock Management System",
      th: "ระบบคลังสินค้า / ระบบจัดการสต็อก",
    },
    image: "/projects/inventory/inventory-01.avif",
    images: [
      "/projects/inventory/inventory-01.avif",
      "/projects/inventory/inventory-02.avif",
      "/projects/inventory/inventory-02-1.avif",
      "/projects/inventory/inventory-03.avif",
      "/projects/inventory/inventory-04.avif",
    ],
    preview: "service",
    accent: "#2f7bff",
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
    image: "/projects/itservice/itservice-01.avif",
    images: ["/projects/itservice/itservice-01.avif"],
    preview: "service",
    accent: "#0f91c8",
  },
  {
    name: {
      en: "Department Service Request System",
      th: "ระบบคำร้องบริการภายในองค์กร",
    },
    shortName: "Department Service Request",
    description: {
      en: "A multi-department ticketing system for RD, HR, and GI Service, supporting request submission, status tracking, and handler assignment across internal departments.",
      th: "ระบบเปิดคำร้องสำหรับหน่วยงานภายในองค์กร เช่น RD, HR และ GI Service รองรับการสร้าง Ticket ส่งคำขอ ติดตามสถานะ และจัดการผู้รับผิดชอบในแต่ละแผนก",
    },
    detailDescription: {
      en: "A multi-department service request system supporting RD Service, HR Service, and GI Service. The system allows employees to create tickets and submit requests to the responsible department, track request status, assign handlers, and improve communication between employees and internal service teams.",
      th: "ระบบเปิดคำร้องและแจ้งปัญหาสำหรับหน่วยงานภายในองค์กร เช่น RD Service, HR Service และ GI Service รองรับการสร้าง Ticket เพื่อส่งคำขอไปยังหน่วยงานที่เกี่ยวข้อง ติดตามสถานะการดำเนินงาน จัดการผู้รับผิดชอบ และช่วยให้การสื่อสารระหว่างพนักงานกับแต่ละแผนกเป็นระบบมากขึ้น",
    },
    techStack: ["ASP.NET MVC", "C#", "jQuery", "SQL Server", "Azure AD", "Role Permission"],
    type: {
      en: "Ticketing System / Internal Service System",
      th: "ระบบ Ticket / ระบบบริการภายในองค์กร",
    },
    image: "/projects/department-service/department-service-01.avif",
    images: ["/projects/department-service/department-service-01.avif"],
    preview: "service",
    accent: "#1687c9",
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
    image: "/projects/di-water/di-water-01.avif",
    images: ["/projects/di-water/di-water-01.avif"],
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
  {
    name: {
      en: "3D Door Simulation & Quotation System",
      th: "ระบบจำลองประตู 3 มิติและเสนอราคา",
    },
    shortName: "3D Door Configurator",
    description: {
      en: "A 3D door configurator for visualizing door models, sizes, and specifications, with interactive open/close simulation and report generation for dimensions and pricing.",
      th: "ระบบจำลองประตู 3 มิติ สามารถเลือกรูปแบบ ขนาด และรายละเอียดของประตู พร้อมจำลองการเปิด–ปิด และออกรายงานสรุปขนาดกับราคา",
    },
    detailDescription: {
      en: "A 3D door configurator system that allows users to customize door models, dimensions, colors, and materials with interactive open/close simulation. The system displays product specifications, dimensions, and estimated pricing, with support for image export, specification export, and email sharing for presentation and quotation purposes.",
      th: "ระบบจำลองและออกแบบประตู 3 มิติ ผู้ใช้สามารถเลือกรูปแบบประตู ปรับขนาด สี วัสดุ และจำลองการเปิด–ปิดประตูแบบ Interactive ได้ พร้อมแสดงรายละเอียดสินค้า ขนาด และราคาประมาณการ นอกจากนี้ยังรองรับการส่งออกรูปภาพ สเปกประตู และส่งข้อมูลผ่าน Email เพื่อใช้ในการนำเสนอหรือประเมินราคาก่อนการสั่งผลิต",
    },
    techStack: ["Unity", "C#", "3D Visualization", "Report Generation"],
    type: {
      en: "3D Product Configurator / Quotation System",
      th: "ระบบจำลองสินค้า / ระบบเสนอราคา",
    },
    image: "/projects/door-3d/door-3d-01.avif",
    images: [
      "/projects/door-3d/door-3d-01.avif",
      "/projects/door-3d/door-3d-02.avif",
      "/projects/door-3d/door-3d-03.avif",
      "/projects/door-3d/door-3d-04.avif",
    ],
    demoUrl: "https://wutwarp.github.io/prototype2D-3D/",
    preview: "warehouse",
    accent: "#e19a56",
  },
];

export const skillGroups = [
  {
    title: { en: "Frontend", th: "หน้าจอแสดงผล" },
    icon: "<>",
    skills: ["Next.js", "React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "jQuery"],
  },
  {
    title: { en: "Backend", th: "ระบบหลังบ้าน" },
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
