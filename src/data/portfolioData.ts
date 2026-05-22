export interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  stack: string[];
  description: string;
  features: string[];
  challenges: string[];
  role: string;
  roleDetails: string[];
  category: 'mobile' | 'web' | 'data' | 'utility';
  coverImage?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  contributions: string[];
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface PortfolioData {
  profile: {
    name: string;
    title: string;
    location: string;
    email: string;
    linkedin: string;
    youtube: string;
    bio: string;
    aboutLong: string;
  };
  projects: Project[];
  experiences: Experience[];
  education: Education[];
}

export const portfolioData: PortfolioData = {
  profile: {
    name: "Victor Angel PQ",
    title: "Offline-First Mobile & Software Developer",
    location: "Perú",
    email: "victor25pq@gmail.com",
    linkedin: "https://www.linkedin.com/in/victor-angelpocomucha-quispe",
    youtube: "https://www.youtube.com/channel/UCAftGRdVTvPs4EB7OVnnIXA",
    bio: "Construyo aplicaciones de misión crítica, sistemas offline-first y pipelines de datos automatizados para entornos industriales, forestales y operativos.",
    aboutLong: "Apasionado por conectar la realidad del campo con tecnología robusta y de alta disponibilidad. Especializado en diseñar aplicaciones móviles offline-first, pipelines de datos e integraciones de IA."
  },
  projects: [
    {
      id: "forest-ia",
      title: "ForestAI",
      subtitle: "Forest Census App",
      year: "2026",
      category: "mobile",
      stack: ["Flutter", "Dart", "Riverpod", "SQFlite", "Supabase", "OpenAI Whisper", "GPT-4o", "FastAPI", "Python", "FFmpeg", "Kotlin"],
      description: "Aplicación móvil Offline-First diseñada para el levantamiento de censos forestales en entornos remotos sin conectividad. Permite a operarios forestales capturar datos de árboles (especie, DAP, altura) mediante comandos de voz con Whisper local y validación híbrida en la nube.",
      features: [
        "Captura de voz a texto en tiempo real usando modelos Whisper locales (Edge) con ondas dinámicas.",
        "Sincronización inteligente y diferida con scoring de confianza híbrida (Local + Cloud).",
        "Funcionamiento 100% offline con persistencia atómica en SQFlite y auto-sync al recuperar red.",
        "Extracción estructurada mediante procesamiento de lenguaje natural (NLP) y Slot Filling.",
        "Foreground services nativos en Kotlin para grabación ininterrumpida con pantalla bloqueada."
      ],
      challenges: [
        "Arquitectura Clean Architecture + Feature-First con Riverpod y MVVM para máxima testeabilidad.",
        "Pipeline de IA híbrida: transcripción local para feedback inmediato + validación cloud con GPT-4o para auditoría de calidad.",
        "Resolución de continuidad de datos entre audios consecutivos mediante detección de solapamiento.",
        "Sincronización bidireccional segmentada y control de Row Level Security (RLS) en Supabase."
      ],
      role: "Full-Stack Developer / Solutions Architect",
      roleDetails: [
        "Diseñé la arquitectura completa del sistema en Flutter (Mobile) y FastAPI (Backend).",
        "Implementé la UI/UX completa con tema 'Forest Dark Mode' y componentes interactivos.",
        "Desarrollé la lógica de negocio central de captura, procesamiento local y API de Whisper/GPT-4o.",
        "Programé los servicios en Kotlin para la grabación en segundo plano y compresión a .ogg con FFmpeg."
      ],
      coverImage: "/projects/forest-ia.webp"
    },
    {
      id: "ev-dashboard",
      title: "Dashboard de Reforestación",
      subtitle: "Envol Vert Analytical Platform",
      year: "2025",
      category: "data",
      stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Recharts", "TanStack Query", "Supabase", "Python", "PostgreSQL", "Google Sheets API"],
      description: "Plataforma analítica y de monitoreo forestal diseñada para la ONG internacional Envol Vert. Centraliza la trazabilidad operativa de viveros, embolsado, distribución y siembra de especies nativas, transformando datos dispersos de Google Sheets en un dashboard ejecutivo interactivo.",
      features: [
        "Pipeline ETL automatizado que sincroniza datos de Google Sheets/AppSheet hacia PostgreSQL.",
        "Dashboard ejecutivo con KPIs en tiempo real y gráficos interactivos avanzados (Treemap, barras apiladas, anidados).",
        "Filtros jerárquicos geográficos coordinados de forma reactiva (País → Proyecto → Zona).",
        "Comparador dinámico de zonas de trabajo y proyectos con vistas lado a lado.",
        "Exportación nativa de reportes categorizados a Excel directamente desde el cliente."
      ],
      challenges: [
        "Diseño de un flujo ETL idempotente desde una fuente no relacional a un esquema relacional con dependencias complejas.",
        "Transformación de tipos compuestos (EnumLists de AppSheet a arrays nativos TEXT[] en Postgres).",
        "Mecanismo de soft-delete lógico para marcar registros removidos sin perder historial analítico.",
        "Optimización del estado reactivo global para evitar re-renders en gráficos de datos densos."
      ],
      role: "Full-Stack Developer / Solutions Architect",
      roleDetails: [
        "Diseñé e implementé la arquitectura de datos, flujos de integración y esquemas relacionales.",
        "Desarrollé el dashboard en React + Tailwind con componentes personalizados de visualización.",
        "Programé el script de sincronización ETL en Python con detección de cambios y soft-deletes.",
        "Configuré el backend en Supabase con RLS, vistas materializadas y funciones en PL/pgSQL."
      ],
      coverImage: "/projects/ev-dashboard.webp"
    },
    {
      id: "to-do",
      title: "To-Do",
      subtitle: "Kanban & Focus Timer Offline-First",
      year: "2026",
      category: "web",
      stack: ["React", "Vite", "Supabase", "@dnd-kit", "vite-plugin-pwa", "Workbox", "Marked", "PostgreSQL", "CSS Custom Properties"],
      description: "Aplicación web progresiva (PWA) de productividad individual. Combina un tablero Kanban arrastrable, temporizador de enfoque basado en timestamps que sobrevive a recargas, y un analizador de lenguaje natural en español para auto-detectar propiedades de tareas.",
      features: [
        "Tablero Kanban interactivo con drag-and-drop y soporte para reordenamientos complejos.",
        "Temporizador de enfoque inmune a tabs en background mediante diferencia de timestamps.",
        "Parser inteligente en español que extrae fechas ('el lunes', 'mañana'), duraciones ('2h') y tags en tiempo real.",
        "PWA instalable con Service Worker para funcionamiento 100% offline y sincronización diferida.",
        "Soporte nativo de renderizado de Markdown con Marked."
      ],
      challenges: [
        "Cola de mutaciones persistente en localStorage que encola 11 tipos de operaciones de sincronización.",
        "Eliminación de drift del temporizador calculando diferencias de Date.now en lugar de contadores simples.",
        "Detección precisa de colisiones vertical/horizontal usando la suite de @dnd-kit."
      ],
      role: "Full-Stack Developer & Solutions Architect",
      roleDetails: [
        "Diseñé la arquitectura offline con la estrategia syncQueue y caché stale-while-revalidate.",
        "Creé el sistema de diseño completo con más de 60 tokens CSS y soporte de glassmorphism.",
        "Construí la base de datos en Supabase con políticas RLS, triggers de auditoría e índices compuestos.",
        "Desarrollé la totalidad de los 22 componentes React usando atomic design puro."
      ],
      coverImage: "/projects/to-do.webp"
    }
  ],
  experiences: [
    {
      role: "Software Developer — Offline-First Apps & Automation Systems",
      company: "Envol Vert",
      period: "Noviembre 2025 - Presente",
      location: "Perú",
      description: "Desarrollo de aplicaciones de campo, paneles de control analíticos y automatización de datos para operaciones forestales y ambientales en zonas de nula conectividad.",
      contributions: [
        "Diseñé e implementé la arquitectura de sincronización offline para colecta de datos ecológicos.",
        "Construí dashboards interactivos para el seguimiento de reforestación (hectáreas plantadas, mortalidad de especies).",
        "Normalicé bases de datos masivas y lideré procesos de migración desde esquemas no relacionales a PostgreSQL."
      ],
      skills: ["React", "TypeScript", "Python", "Supabase", "PostgreSQL", "AppSheet", "Vite", "ETL"]
    },
    {
      role: "Software Developer / Solutions Developer",
      company: "Independiente",
      period: "Julio 2025 - Presente",
      location: "Perú",
      description: "Consultoría y desarrollo de software a medida enfocado en herramientas internas, automatización de procesos y optimización de flujos de datos.",
      contributions: [
        "Desarrollo de add-ons empresariales para Google Workspace vinculados a microservicios en la nube.",
        "Construcción de motores de cálculo de comisiones e integraciones con data warehouses.",
        "Diseño de aplicaciones móviles para inspecciones y control de operaciones de campo."
      ],
      skills: ["Node.js", "TypeScript", "Flutter", "GCP", "Firebase", "Firestore", "Google Sheets API"]
    },
    {
      role: "Data Analytics Entry",
      company: "Envol Vert",
      period: "Enero 2023 - Marzo 2023",
      location: "Perú",
      description: "Optimización de recopilación y análisis de datos ecológicos.",
      contributions: [
        "Automaticé la recolección de datos en campo usando aplicaciones móviles, erradicando la pérdida de registros.",
        "Diseñé dashboards interactivos para agilizar la toma de decisiones en juntas directivas."
      ],
      skills: ["AppSheet", "Google Sheets", "Data Analytics"]
    }
  ],
  education: [
    {
      degree: "Desarrollo de Software",
      institution: "ISIL",
      period: "2023 - 2026"
    },
    {
      degree: "Data Analytics for Business",
      institution: "Colectivo23",
      period: "2023"
    },
    {
      degree: "Google Data Analytics Certificate",
      institution: "Coursera",
      period: "2022 - 2023"
    },
    {
      degree: "Egresado en Ingeniería Forestal y Ambiental",
      institution: "Universidad Nacional del Centro del Perú (UNCP)",
      period: "2016 - 2022"
    }
  ]
};
