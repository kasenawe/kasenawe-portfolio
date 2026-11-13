import type { Language, Copy } from "../types/portfolio";

export const copyByLanguage: Record<Language, Copy> = {
  es: {
    nav: {
      about: "Sobre mí",
      skills: "Tecnologías",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      badge: "Sistemas | Soporte de aplicaciones | Integraciones",
      title: "Maximiliano Quintana",
      subtitle:
        "Profesional de tecnología con más de 13 años de experiencia combinando soporte de aplicaciones, sistemas empresariales, infraestructura, integraciones y desarrollo de software. Conecto necesidades de negocio con soluciones técnicas: analizo problemas, diagnostico incidentes, integro sistemas y participo en la implementación de mejoras.",
      ctaPrimary: "Ver proyectos",
      ctaSecondary: "Contactar",
      ctaResume: "Ver CV",
      resumeFileName: "maximiliano-quintana-resume-es.pdf",
    },
    about: {
      title: "Perfil profesional",
      intro:
        "Profesional técnico con experiencia en aplicaciones empresariales, análisis funcional y resolución de problemas. Combino una trayectoria en soporte e infraestructura con desarrollo e integración de software para comprender procesos y ayudar a que los sistemas funcionen de forma confiable.",
      points: [
        "Soporte de aplicaciones, gestión de incidentes y trabajo con usuarios y equipos técnicos.",
        "Integraciones mediante APIs REST, pruebas con Postman y diagnóstico de datos con SQL.",
        "Desarrollo y mantenimiento de aplicaciones empresariales con PHP, SuiteCRM y MySQL.",
        "Experiencia en ServiceNow ITSM, infraestructura y coordinación de procesos empresariales.",
        "Desarrollo de soluciones web para clientes con tecnologías como React, TypeScript y Supabase.",
      ],
    },
    skills: {
      title: "Tecnologías y experiencia",
      intro: "Herramientas y conocimientos aplicados en soporte, sistemas empresariales, integraciones y desarrollo.",
      groups: [
        { title: "Soporte y sistemas", items: ["ServiceNow ITSM", "Gestión de incidentes", "Troubleshooting"] },
        { title: "Integraciones y datos", items: ["APIs REST", "Postman", "SQL", "MySQL", "PostgreSQL"] },
        { title: "Desarrollo empresarial", items: ["PHP", "SuiteCRM", "JavaScript", "TypeScript", "Svelte"] },
        { title: "Desarrollo web y entrega", items: ["React", "Next.js", "Node.js", "Supabase", "Git", "Vercel"] },
      ],
      evidence: "Experiencia aplicada en sistemas de gestión, aplicaciones móviles y PSICOAPOYO.",
      cta: "Ver proyectos",
    },
    projects: {
      title: "Proyectos destacados",
      intro:
        "Proyectos que combinan análisis de requerimientos, desarrollo, integraciones e implementación, con distintos estados de avance y despliegue.",
      actions: {
        live: "Ver demo",
        repo: "Repositorio",
        caseStudy: "Ver caso de estudio",
      },
      items: [
        {
          name: "PSICOAPOYO | Plataforma de gestión clínica",
          status: "En desarrollo · Staging",
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
              body: "Transformar la operativa de una clínica pequeña en un producto digital que mantenga separados los flujos administrativos y clínicos, proteja la información sensible y permita evolucionar el sistema sin perder trazabilidad.",
            },
            {
              title: "Mi contribución",
              body: "Dirijo el producto y la ejecución técnica: convierto necesidades clínicas y operativas en alcance implementable, reviso arquitectura y código, defino controles de acceso, realizo QA y priorizo riesgos antes de aprobar cada entrega.",
            },
            {
              title: "Alcance implementado",
              body: "Navegación y permisos por rol, asignación segura de pacientes a profesionales, consentimientos inmutables con aceptación y revocación trazables, agenda y bloqueos protegidos, anamnesis de adultos, gestión de cuentas y eventos de auditoría.",
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
            "Proyecto de ecommerce para Uruguay con catálogo dinámico, variantes de productos, panel administrativo, backend en Node.js e integración con Mercado Pago.",
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
        "Estoy abierto a oportunidades en soporte de aplicaciones, análisis de sistemas, integraciones, implementación técnica y desarrollo de software empresarial.",
      emailLabel: "Email",
      locationLabel: "Ubicación",
      openToWork:
        "Disponible para entrevistas y nuevos desafíos profesionales.",
    },
    footer: "Construido con React + TypeScript + Vite",
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      badge: "Systems | Application Support | Integrations",
      title: "Maximiliano Quintana",
      subtitle:
        "Technology professional with over 13 years of experience combining application support, enterprise systems, infrastructure, integrations, and software development. I connect business needs with technical solutions by analyzing problems, troubleshooting incidents, integrating systems, and implementing improvements.",
      ctaPrimary: "View projects",
      ctaSecondary: "Contact me",
      ctaResume: "View Resume",
      resumeFileName: "maximiliano-quintana-resume-en.pdf",
    },
    about: {
      title: "Professional profile",
      intro:
        "Technology professional experienced in enterprise applications, functional analysis, and troubleshooting. I combine a background in support and infrastructure with software development and integration to understand business processes and help systems operate reliably.",
      points: [
        "Application support, incident management, and collaboration with users and technical teams.",
        "REST API integrations, endpoint testing with Postman, and data troubleshooting with SQL.",
        "Development and maintenance of enterprise applications using PHP, SuiteCRM, and MySQL.",
        "Experience with ServiceNow ITSM, infrastructure, and enterprise processes.",
        "Development of web solutions for clients using technologies such as React, TypeScript, and Supabase.",
      ],
    },
    skills: {
      title: "Technologies and experience",
      intro: "Tools and skills applied to support, enterprise systems, integrations, and development.",
      groups: [
        { title: "Application support and systems", items: ["ServiceNow ITSM", "Incident management", "Troubleshooting"] },
        { title: "Integrations and data", items: ["REST APIs", "Postman", "SQL", "MySQL", "PostgreSQL"] },
        { title: "Enterprise development", items: ["PHP", "SuiteCRM", "JavaScript", "TypeScript", "Svelte"] },
        { title: "Web development and delivery", items: ["React", "Next.js", "Node.js", "Supabase", "Git", "Vercel"] },
      ],
      evidence: "Experience applied to management systems, mobile applications, and PSICOAPOYO.",
      cta: "Explore projects",
    },
    projects: {
      title: "Featured projects",
      intro:
        "Projects combining requirements analysis, development, integrations, and implementation, at different stages of development and deployment.",
      actions: {
        live: "Live",
        repo: "Repo",
        caseStudy: "View case study",
      },
      items: [
        {
          name: "PSICOAPOYO | Clinical Management Platform",
          status: "In development · Staging",
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
              body: "Turn a small clinic's day-to-day operation into a digital product that separates administrative and clinical workflows, protects sensitive information, and can evolve without losing traceability.",
            },
            {
              title: "My contribution",
              body: "I lead product and technical delivery: translating clinical and operational needs into implementable scope, reviewing architecture and code, defining access controls, performing QA, and prioritizing risks before approving each release.",
            },
            {
              title: "Implemented scope",
              body: "Role-based navigation and permissions, secure patient-to-professional assignment, immutable consent with traceable acceptance and revocation, protected scheduling and blocks, adult intake records, account management, and audit events.",
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
            "Ecommerce project for Uruguay with a dynamic catalog, product variants, admin panel, Node.js backend, and Mercado Pago integration.",
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
        "I am open to opportunities in application support, systems analysis, integrations, technical implementation, and enterprise software development.",
      emailLabel: "Email",
      locationLabel: "Location",
      openToWork: "Available for interviews and new professional challenges.",
    },
    footer: "Built with React + TypeScript + Vite",
  },
};
