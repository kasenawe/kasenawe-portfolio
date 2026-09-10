import type { Language, Copy } from "../types/portfolio";

export const copyByLanguage: Record<Language, Copy> = {
  es: {
    nav: {
      about: "Sobre mí",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      badge: "Tecnología | Desarrollo | Integraciones",
      title: "Maximiliano Quintana",
      subtitle:
        "Profesional de tecnología especializado en desarrollo de software, integraciones, automatización y liderazgo técnico de proyectos. Combino experiencia fullstack con más de 12 años en soporte, infraestructura, operaciones y trabajo con usuarios.",
      ctaPrimary: "Ver proyectos",
      ctaSecondary: "Contactar",
      ctaResume: "Descargar CV — Desarrollo de Software",
      resumeFileName: "maximiliano-quintana-resume-es.pdf",
    },
    about: {
      title: "Perfil profesional",
      intro:
        "Profesional de tecnología con experiencia en desarrollo de soluciones web, integraciones entre sistemas y coordinación técnica de iniciativas de punta a punta.",
      points: [
        "Experiencia profesional en desarrollo backend, SuiteCRM, APIs, webhooks y automatización de procesos.",
        "Proyectos fullstack con React, TypeScript, Node.js, Firebase, Supabase, Vercel Functions y Mercado Pago.",
        "Más de 12 años de experiencia previa en tecnología, soporte, infraestructura, operaciones, liderazgo técnico y contacto con usuarios.",
      ],
    },
    projects: {
      title: "Proyectos destacados",
      intro:
        "Soluciones desarrolladas de punta a punta, desde aplicaciones frontend hasta productos completos con backend, integraciones, seguridad y despliegue en producción.",
      actions: {
        live: "Ver demo",
        repo: "Repositorio",
        caseStudy: "Ver caso de estudio",
      },
      items: [
        {
          name: "PSICOAPOYO | Plataforma de gestión clínica",
          status: "MVP clínico seguro · En desarrollo",
          role: "Dirección técnica y producto · Desarrollo full stack",
          description:
            "Plataforma web en desarrollo para la operación segura de una pequeña clínica psicológica de Perú, con especial atención al acceso clínico, la privacidad y la trazabilidad.",
          stack: [
            "Next.js",
            "React",
            "TypeScript",
            "PostgreSQL",
            "Supabase",
            "RLS",
            "Vercel",
            "CI/CD",
          ],
          featured: true,
          highlights: [
            "Acceso por roles y asignación profesional–paciente con políticas de mínimo privilegio.",
            "Consentimientos versionados, agenda segura, anamnesis de adultos y auditoría.",
            "Arquitectura, validación funcional y QA orientados a un dominio de datos sensibles.",
          ],
          caseStudy: [
            {
              title: "El desafío",
              body:
                "Transformar la operativa de una clínica pequeña en un producto digital que mantenga separados los flujos administrativos y clínicos, proteja la información sensible y permita evolucionar el sistema sin perder trazabilidad.",
            },
            {
              title: "Mi contribución",
              body:
                "Dirijo el producto y la ejecución técnica: convierto necesidades clínicas y operativas en alcance implementable, reviso arquitectura y código, defino controles de acceso, realizo QA y priorizo riesgos antes de aprobar cada entrega.",
            },
            {
              title: "Alcance implementado",
              body:
                "Navegación y permisos por rol, asignación segura de pacientes a profesionales, consentimientos inmutables con aceptación y revocación trazables, agenda y bloqueos protegidos, anamnesis de adultos, gestión de cuentas y eventos de auditoría.",
            },
          ],
        },
        {
          name: "Soledad Cedres | Plataforma de reservas",
          description:
            "Aplicación fullstack para gestión de turnos, servicios, disponibilidad horaria, pagos y administración interna para una profesional del área salud/bienestar.",
          stack: [
            "React 19",
            "TypeScript",
            "Firebase",
            "Vercel Functions",
            "Node.js",
            "Mercado Pago",
          ],
          liveUrl: "https://soledadcedres.com.uy",
          repoUrl: "https://github.com/kasenawe/enarmonia",
        },
        {
          name: "Ecommerce Joyería",
          description:
            "Ecommerce para Uruguay con catálogo dinámico, variantes de productos, panel administrativo, backend en Node.js e integración con Mercado Pago.",
          stack: [
            "React",
            "TypeScript",
            "Vite",
            "Tailwind CSS",
            "Node.js",
            "Express",
          ],
          liveUrl: "https://lunaperla.vercel.app",
          repoUrl: "https://github.com/kasenawe/lunaperla",
        },
        {
          name: "Hackflix",
          description:
            "Clon de Netflix desarrollado como SPA en React, consumiendo la API de TMDB mediante llamadas AJAX.",
          stack: ["React", "AJAX", "TMDB API"],
          liveUrl: "https://hackflix-react-nu.vercel.app/",
          repoUrl: "https://github.com/kasenawe/hackflix-react",
        },
      ],
    },
    contact: {
      title: "Contacto",
      intro:
        "Estoy abierto a oportunidades en desarrollo de software, integraciones, automatización y liderazgo técnico de proyectos.",
      emailLabel: "Email",
      locationLabel: "Ubicación",
      openToWork: "Disponible para entrevistas y nuevos desafíos profesionales.",
    },
    footer: "Construido con React + TypeScript + Vite",
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      badge: "Technology | Development | Integrations",
      title: "Maximiliano Quintana",
      subtitle:
        "Technology professional specialized in software development, integrations, automation, and technical project leadership. I combine fullstack experience with 12+ years in support, infrastructure, operations, and user-facing roles.",
      ctaPrimary: "View projects",
      ctaSecondary: "Contact me",
      ctaResume: "Download Resume — Software Development",
      resumeFileName: "maximiliano-quintana-resume-en.pdf",
    },
    about: {
      title: "Professional profile",
      intro:
        "Technology professional experienced in web solutions, systems integration, and technical coordination of end-to-end initiatives.",
      points: [
        "Professional experience in backend development, SuiteCRM, APIs, webhooks, and process automation.",
        "Fullstack projects with React, TypeScript, Node.js, Firebase, Supabase, Vercel Functions, and Mercado Pago.",
        "12+ years of previous experience in technology, support, infrastructure, operations, technical leadership, and user-facing roles.",
      ],
    },
    projects: {
      title: "Featured projects",
      intro:
        "End-to-end solutions ranging from frontend applications to complete products with backend logic, integrations, security, and production deployment.",
      actions: {
        live: "Live",
        repo: "Repo",
        caseStudy: "View case study",
      },
      items: [
        {
          name: "PSICOAPOYO | Clinical Management Platform",
          status: "Secure clinical MVP · In development",
          role: "Technical and product leadership · Full-stack development",
          description:
            "Web platform under development for the secure operation of a small psychology clinic in Peru, with a strong focus on clinical access, privacy, and traceability.",
          stack: [
            "Next.js",
            "React",
            "TypeScript",
            "PostgreSQL",
            "Supabase",
            "RLS",
            "Vercel",
            "CI/CD",
          ],
          featured: true,
          highlights: [
            "Role-based access and professional–patient assignment under least-privilege policies.",
            "Versioned consent, secure scheduling, adult intake records, and auditing.",
            "Architecture, functional validation, and QA designed for a sensitive-data domain.",
          ],
          caseStudy: [
            {
              title: "The challenge",
              body:
                "Turn a small clinic's day-to-day operation into a digital product that separates administrative and clinical workflows, protects sensitive information, and can evolve without losing traceability.",
            },
            {
              title: "My contribution",
              body:
                "I lead product and technical delivery: translating clinical and operational needs into implementable scope, reviewing architecture and code, defining access controls, performing QA, and prioritizing risks before approving each release.",
            },
            {
              title: "Implemented scope",
              body:
                "Role-based navigation and permissions, secure patient-to-professional assignment, immutable consent with traceable acceptance and revocation, protected scheduling and blocks, adult intake records, account management, and audit events.",
            },
          ],
        },
        {
          name: "Soledad Cedres | Booking Platform",
          description:
            "Fullstack application for appointment booking, services, schedule availability, payments, and internal administration for a health/wellness professional.",
          stack: [
            "React 19",
            "TypeScript",
            "Firebase",
            "Vercel Functions",
            "Node.js",
            "Mercado Pago",
          ],
          liveUrl: "https://soledadcedres.com.uy/",
          repoUrl: "https://github.com/kasenawe/enarmonia",
        },
        {
          name: "Jewelry Ecommerce",
          description:
            "Ecommerce platform for Uruguay with dynamic catalog, product variants, admin panel, Node.js backend, and Mercado Pago integration.",
          stack: [
            "React",
            "TypeScript",
            "Vite",
            "Tailwind CSS",
            "Node.js",
            "Express",
          ],
          liveUrl: "https://lunaperla.vercel.app",
          repoUrl: "https://github.com/kasenawe/lunaperla",
        },
        {
          name: "Hackflix",
          description:
            "Netflix clone built as a React SPA, consuming TMDB API data through AJAX calls.",
          stack: ["React", "AJAX", "TMDB API"],
          liveUrl: "https://hackflix-react-nu.vercel.app/",
          repoUrl: "https://github.com/kasenawe/hackflix-react",
        },
      ],
    },
    contact: {
      title: "Contact",
      intro:
        "I am open to opportunities in software development, integrations, automation, and technical project leadership.",
      emailLabel: "Email",
      locationLabel: "Location",
      openToWork: "Available for interviews and new professional challenges.",
    },
    footer: "Built with React + TypeScript + Vite",
  },
};
