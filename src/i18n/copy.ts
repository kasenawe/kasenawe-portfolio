import type { Language, Copy } from "../types/portfolio";

export const copyByLanguage: Record<Language, Copy> = {
  es: {
    nav: {
      about: "Sobre mi",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      badge: "Junior Developer | React + Node",
      title: "Maximiliano Quintana",
      subtitle:
        "Desarrollador con 3 anos de experiencia laboral en SuiteCRM, APIs y webhooks. Enfocado hoy en crear productos modernos con React y Node.js.",
      ctaPrimary: "Ver proyectos",
      ctaSecondary: "Contactar",
    },
    about: {
      title: "Perfil profesional",
      intro:
        "Estoy en transicion hacia roles frontend/fullstack con React y Node.js, combinando experiencia real de negocio con nuevas practicas de producto.",
      points: [
        "3 anos trabajando en PHP y SuiteCRM con integraciones de APIs y webhooks.",
        "Bootcamp de React y Node.js con JavaScript, HTML y CSS.",
        "Enfoque en mejorar habilidades frontend para aportar mas valor en equipos de producto.",
      ],
    },
    projects: {
      title: "Proyectos destacados",
      intro:
        "Estos proyectos muestran mi evolucion desde mis primeras apps hasta soluciones mas completas con frontend y backend.",
      items: [
        {
          name: "Hackflix",
          description:
            "Clon de Netflix como SPA en React, consumiendo la API de TMDB mediante llamadas AJAX.",
          stack: ["React", "AJAX", "TMDB API"],
          liveUrl: "https://hackflix.vercel.app",
          repoUrl: "https://github.com/kasenawe",
        },
        {
          name: "Ecommerce Joyeria Infantil",
          description:
            "Ecommerce para Uruguay con frontend en React + TypeScript y backend en Node.js + Express.",
          stack: [
            "React",
            "TypeScript",
            "Vite",
            "Tailwind CSS",
            "Node.js",
            "Express",
          ],
          liveUrl: "https://lunaperla.vercel.app",
          repoUrl: "https://github.com/kasenawe",
        },
        {
          name: "App de Quiropraxia",
          description:
            "Plataforma de reservas y pagos de sesiones con Firebase, Mercado Pago y asistente IA con Gemini.",
          stack: [
            "React 19",
            "TypeScript",
            "Firebase",
            "Vercel Functions",
            "Mercado Pago",
            "Gemini API",
          ],
          liveUrl: "https://quiropractica.vercel.app",
          repoUrl: "https://github.com/kasenawe",
        },
      ],
    },
    contact: {
      title: "Contacto",
      intro: "Estoy buscando una nueva oportunidad como React/Node developer.",
      emailLabel: "Email",
      locationLabel: "Ubicacion",
      openToWork: "Disponible para entrevistas y desafios tecnicos.",
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
      badge: "Junior Developer | React + Node",
      title: "Maximiliano Quintana",
      subtitle:
        "Developer with 3 years of professional experience in SuiteCRM, APIs, and webhooks. Now focused on building modern products with React and Node.js.",
      ctaPrimary: "View projects",
      ctaSecondary: "Contact me",
    },
    about: {
      title: "Professional profile",
      intro:
        "I am transitioning into frontend/fullstack roles with React and Node.js, combining business experience with modern product practices.",
      points: [
        "3 years working with PHP and SuiteCRM, including API and webhook integrations.",
        "React and Node.js bootcamp with JavaScript, HTML, and CSS.",
        "Focused on strengthening frontend skills to deliver more impact in product teams.",
      ],
    },
    projects: {
      title: "Featured projects",
      intro:
        "These projects show my growth from early apps to more complete frontend and backend solutions.",
      items: [
        {
          name: "Hackflix",
          description:
            "Netflix clone built as a React SPA, consuming TMDB API data through AJAX calls.",
          stack: ["React", "AJAX", "TMDB API"],
          liveUrl: "https://hackflix.vercel.app",
          repoUrl: "https://github.com/kasenawe",
        },
        {
          name: "Kids Jewelry Ecommerce",
          description:
            "Ecommerce for Uruguay built with a React + TypeScript frontend and a Node.js + Express backend.",
          stack: [
            "React",
            "TypeScript",
            "Vite",
            "Tailwind CSS",
            "Node.js",
            "Express",
          ],
          liveUrl: "https://lunaperla.vercel.app",
          repoUrl: "https://github.com/kasenawe",
        },
        {
          name: "Chiropractic App",
          description:
            "Booking and online payment platform with Firebase, Mercado Pago, and a Gemini-powered AI assistant.",
          stack: [
            "React 19",
            "TypeScript",
            "Firebase",
            "Vercel Functions",
            "Mercado Pago",
            "Gemini API",
          ],
          liveUrl: "https://quiropractica.vercel.app",
          repoUrl: "https://github.com/kasenawe",
        },
      ],
    },
    contact: {
      title: "Contact",
      intro:
        "I am actively looking for a new opportunity as a React/Node developer.",
      emailLabel: "Email",
      locationLabel: "Location",
      openToWork: "Available for interviews and technical challenges.",
    },
    footer: "Built with React + TypeScript + Vite",
  },
};
