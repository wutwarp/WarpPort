export type Project = {
  name: string;
  shortName: string;
  description: string;
  techStack: string[];
  type: string;
  image: string;
  preview: "hr" | "ranking" | "website" | "service" | "monitor" | "warehouse" | "game";
  accent: string;
};

export const projects: Project[] = [
  {
    name: "StinHR – Human Resource Management System",
    shortName: "StinHR",
    description:
      "Developed and enhanced an HRMS for educational institutions, covering employee management, payroll, leave, performance evaluation, and approval workflows.",
    techStack: ["ASP.NET Core", "C#", "jQuery", "SQL Server"],
    type: "Enterprise System",
    image: "/projects/stinhr.png",
    preview: "hr",
    accent: "#2979ff",
  },
  {
    name: "CU-iDMS for Rankings – Chulalongkorn University",
    shortName: "CU-iDMS for Rankings",
    description:
      "Developed and maintained a university ranking data management system, including workflow improvements, user permissions, data approval, and reporting features.",
    techStack: ["ASP.NET Core", "C#", "jQuery", "SQL Server"],
    type: "University System",
    image: "/projects/cu-idms.png",
    preview: "ranking",
    accent: "#e85a96",
  },
  {
    name: "ETDA Website",
    shortName: "ETDA Website",
    description:
      "Developed and enhanced the agency's official website using Kentico CMS, contributing to technical design and website improvements.",
    techStack: ["Kentico CMS", "HTML", "CSS", "JavaScript"],
    type: "Government Website",
    image: "/projects/etda.png",
    preview: "website",
    accent: "#7857db",
  },
  {
    name: "ITService – Enterprise Service Management System",
    shortName: "ITService",
    description:
      "Designed and developed an internal service management system supporting ticketing, approval workflows, access requests, and IT asset lending.",
    techStack: ["ASP.NET MVC", "C#", "jQuery", "SQL Server", "Azure AD", "IIS"],
    type: "Internal Tool",
    image: "/projects/itservice.png",
    preview: "service",
    accent: "#0f91c8",
  },
  {
    name: "DI Water Monitoring System",
    shortName: "DI Water Monitoring",
    description:
      "Developed a monitoring system for DI water quality used in manufacturing, including standard validation and historical data tracking.",
    techStack: ["ASP.NET MVC", "C#", "jQuery", "SQL Server"],
    type: "Manufacturing System",
    image: "/projects/di-water.png",
    preview: "monitor",
    accent: "#10a6a0",
  },
  {
    name: "3D Warehouse Simulation – Thai Samsung Electronics",
    shortName: "3D Warehouse Simulation",
    description:
      "Developed a real-time 3D warehouse visualization system using Unity, integrating inventory data through RESTful APIs built with Node.js.",
    techStack: ["Unity", "C#", "C++", "Node.js", "REST API", "Postman"],
    type: "3D Simulation",
    image: "/projects/warehouse-simulation.png",
    preview: "warehouse",
    accent: "#6177eb",
  },
  {
    name: "Senior Project – Single Player Survival Game",
    shortName: "Single Player Survival Game",
    description:
      "Developed a single-player survival game for Windows using Godot Engine with C# and C++, focusing on gameplay systems and core mechanics.",
    techStack: ["Godot Engine", "C#", "C++"],
    type: "Game Development",
    image: "/projects/survival-game.png",
    preview: "game",
    accent: "#566a48",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: "<>",
    skills: ["Next.js", "React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "jQuery"],
  },
  {
    title: "Backend",
    icon: "{ }",
    skills: ["ASP.NET Core", "ASP.NET MVC", "C#", "Node.js", "REST API"],
  },
  {
    title: "Database",
    icon: "DB",
    skills: ["SQL Server", "PostgreSQL", "Prisma", "Supabase"],
  },
  {
    title: "Tools & Deployment",
    icon: "↗",
    skills: ["Git", "GitHub", "IIS", "Windows Server", "Virtual Machine", "Azure AD", "Cloudflare", "Postman"],
  },
] as const;
