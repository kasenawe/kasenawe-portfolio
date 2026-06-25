import type { Language, Copy } from "../types/portfolio";

export const copyByLanguage: Record<Language, Copy> = {
  es: {
    nav: {
      about: "Sobre mí",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      badge: "Full Stack Developer | React + Node",
      title: "Maximiliano Quintana",
      subtitle:
        "Desarrollador Fullstack con experiencia en React, TypeScript, Node.js, APIs e integraciones. Combino experiencia profesional en desarrollo backend/SuiteCRM con más de 12 años previos en tecnología, soporte, infraestructura y liderazgo técnico.",
      ctaPrimary: "Ver proyectos",
      ctaSecondary: "Contactar",
      ctaResume: "Descargar CV",
      resumeFileName: "maximiliano-quintana-resume-es.pdf",
    },
    about: {
      title: "Perfil profesional",
      intro:
        "Fullstack Developer con experiencia en desarrollo de soluciones web reales, integrando frontend, backend, APIs, bases de datos y servicios externos.",
      points: [
        "Experiencia profesional en desarrollo backend, SuiteCRM, integraciones de APIs y webhooks.",
        "Proyectos fullstack con React, TypeScript, Node.js, Firebase, Vercel Functions y Mercado Pago.",
        "Más de 12 años de experiencia previa en tecnología, soporte, infraestructura, liderazgo técnico y contacto con usuarios.",
      ],
    },
    projects: {
      title: "Proyectos destacados",
      intro:
        "Soluciones desarrolladas de punta a punta, desde aplicaciones frontend hasta productos completos con backend, integraciones y despliegue en producción.",
      actions: {
        live: "Ver demo",
        repo: "Repositorio",
      },
      items: [
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
        "Estoy abierto a nuevas oportunidades como Fullstack Developer, especialmente en proyectos con React, Node.js, APIs e integraciones.",
      emailLabel: "Email",
      locationLabel: "Ubicación",
      openToWork: "Disponible para entrevistas y desafíos técnicos.",
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
      badge: "Full Stack Developer | React + Node",
      title: "Maximiliano Quintana",
      subtitle:
        "Fullstack Developer with experience in React, TypeScript, Node.js, APIs, and integrations. I combine professional backend/SuiteCRM development experience with 12+ years in technology, support, infrastructure, and technical leadership.",
      ctaPrimary: "View projects",
      ctaSecondary: "Contact me",
      ctaResume: "Download Resume",
      resumeFileName: "maximiliano-quintana-resume-en.pdf",
    },
    about: {
      title: "Professional profile",
      intro:
        "Fullstack Developer experienced in building real web solutions, integrating frontend, backend, APIs, databases, and third-party services.",
      points: [
        "Professional experience in backend development, SuiteCRM, API integrations, and webhooks.",
        "Fullstack projects with React, TypeScript, Node.js, Firebase, Vercel Functions, and Mercado Pago.",
        "12+ years of previous experience in technology, support, infrastructure, technical leadership, and user-facing roles.",
      ],
    },
    projects: {
      title: "Featured projects",
      intro:
        "End-to-end solutions ranging from frontend applications to complete products with backend logic, integrations, and production deployment.",
      actions: {
        live: "Live",
        repo: "Repo",
      },
      items: [
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
        "I am open to new opportunities as a Fullstack Developer, especially in projects involving React, Node.js, APIs, and integrations.",
      emailLabel: "Email",
      locationLabel: "Location",
      openToWork: "Available for interviews and technical challenges.",
    },
    footer: "Built with React + TypeScript + Vite",
  },
};
