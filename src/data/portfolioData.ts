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
  url?: string;
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
    title: "Software Developer | Offline-First Apps · Data Pipelines · AI Integrations",
    location: "Perú",
    email: "victor25pq@gmail.com",
    linkedin: "https://www.linkedin.com/in/victor-angelpocomucha-quispe",
    youtube: "https://www.youtube.com/channel/UCAftGRdVTvPs4EB7OVnnIXA",
    bio: "Construyo aplicaciones de misión crítica, sistemas offline-first y pipelines de datos automatizados para entornos industriales, forestales y operativos.",
    aboutLong: "Diseño aplicaciones móviles offline-first, plataformas web, pipelines de datos e integraciones de IA para convertir procesos complejos en soluciones digitales robustas."
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
      id: "rigtech-app",
      title: "Plataforma de Izaje",
      subtitle: "Gestión de Maniobras de Izaje",
      year: "2026",
      category: "mobile",
      stack: ["Flutter", "Dart", "Riverpod", "Isar NoSQL", "Supabase", "PKCE OAuth2", "Deno Edge Functions", "PDF Engine"],
      description: "Plataforma móvil offline-first para la gestión integral de maniobras de izaje en minería y construcción. Digitaliza la creación de planes de izaje, checklists preoperacionales, monitoreo de viento y generación de reportes técnicos en PDF, sustituyendo flujos de trabajo en papel que demoraban semanas.",
      features: [
        "Gestión de planes de izaje completos en flujos multi-paso (configuración, carga, croquis de presión).",
        "Checklists preoperacionales de grúas con alerta de fallo crítico e inhabilitación inmediata del equipo.",
        "Monitoreo en tiempo real de velocidad de viento alineado a las tablas de carga del fabricante.",
        "Motor nativo de reportes PDF con cálculos de rigging y firmas manuscritas digitalizadas.",
        "Sincronización offline-first robusta con base de datos Isar y Supabase en la nube."
      ],
      challenges: [
        "Sincronización bidireccional de 35 tablas con resolución de conflictos por timestamp.",
        "Motor matemático in-app de izaje (cálculo de capacidad neta, presión sobre suelo, deducciones por aparejos).",
        "Abstracción de Isar y Supabase bajo un patrón de Repositorio unificado (el UI no sabe de dónde vienen los datos).",
        "Optimización de consultas Supabase previniendo el patrón N+1 mediante Deep Select."
      ],
      role: "Full-Stack Developer / Solutions Architect",
      roleDetails: [
        "Diseñé la arquitectura completa MVVM feature-first con Riverpod dividida en 10 módulos independientes.",
        "Creé el sistema de diseño visual premium adaptado a entornos industriales de alta visibilidad.",
        "Programé el motor de sincronización masivo y la cola de subida en segundo plano.",
        "Desarrollé las Edge Functions en Deno para creación de usuarios y envío de notificaciones automáticas."
      ],
      coverImage: "/projects/rigtech-app.webp"
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
      id: "mosaico",
      title: "Enriquecimiento de Datos",
      subtitle: "Sistema de Enriquecimiento de Base de Medios",
      year: "2026",
      category: "data",
      stack: ["Node.js", "TypeScript", "Google Cloud Run", "Google Firestore", "Google Sheets API", "Apps Script", "Google Gemini", "Serper.dev", "DataForSEO", "Docker", "Jest"],
      description: "Plataforma corporativa de enriquecimiento de datos de medios de comunicación integrada como panel lateral en Google Sheets. Automatiza el descubrimiento de URLs oficiales, clasificación de tráfico SEO en 4 niveles, homologación inteligente de roles con IA y depuración de contactos importados de LinkedIn.",
      features: [
        "Pipeline de enriquecimiento en 4 pasos ejecutado asíncronamente desde Google Sheets Sidebar.",
        "Ingesta y procesamiento de archivos ZIP de LinkedIn para deduplicación y cálculo de relevancia.",
        "Scoring multiseñal para descubrir URLs legítimas y descartar redes sociales/espejos.",
        "Homologación automática de puestos de periodistas usando Gemini 1.5 Flash con catálogo dinámico.",
        "Clasificación automática de medios en Tiers de tráfico SEO con DataForSEO API."
      ],
      challenges: [
        "Bypass de límites de Apps Script mediante un sistema de polling asíncrono desde el Sidebar directo a Cloud Run.",
        "Motor de checkpoints basado en Firestore e idempotencia con hashes SHA-256 para reanudar jobs fallidos sin re-procesar.",
        "Verificación HTTP paralela con timeout controlado para validar dominios en tiempo real.",
        "Normalización de teléfonos a formato E.164, deduplicación multidimensional y creación de manifiestos auditables."
      ],
      role: "Full-Stack Developer / Solutions Architect",
      roleDetails: [
        "Realicé el análisis técnico y de viabilidad económica del proyecto (PDR v3.0).",
        "Diseñé la arquitectura serverless multi-tenant en Google Cloud Platform.",
        "Desarrollé el backend de procesamiento en Node.js/TypeScript y el add-on en Google Apps Script.",
        "Configuré el pipeline de CI/CD con Docker y Google Cloud Build e implementé tests en Jest."
      ],
      coverImage: "/projects/mosaico.webp"
    },
    {
      id: "izzi-simulador",
      title: "Simulador de Comisiones",
      subtitle: "Proyector de Nóminas Multinivel",
      year: "2025",
      category: "web",
      stack: ["React", "Vite", "Tailwind CSS", "Zustand", "Firebase Cloud Functions", "BigQuery", "Recharts", "Node.js"],
      description: "Plataforma web de simulación y proyección de comisiones diseñada para la fuerza de ventas de una importante empresa de telecomunicaciones. Conecta una interfaz moderna con el data warehouse corporativo a través de un backend serverless, automatizando cálculos sobre esquemas de compensación complejos.",
      features: [
        "Validación en tiempo real por código SAP e inicios de sesión basados en roles (vendedor/supervisor/admin).",
        "Motor de cálculo reactivo que simula más de 20 canales de venta con aceleradores independientes.",
        "Visualización interactiva de nóminas con comparativa de comisión base, bonos de productividad y garantías.",
        "BFF (Backend-for-Frontend) serverless para consultas seguras de datos agregados.",
        "Persistencia de escenarios simulados en Zustand con cálculo instantáneo en cliente."
      ],
      challenges: [
        "Diseño de una arquitectura de reglas extensible que soporte políticas cambiantes de comisiones por canal y región.",
        "Optimización de queries a BigQuery para garantizar tiempos de carga inferiores a 1 segundo.",
        "Integración de aceleradores por rango (Cintas Amarilla, Negra, Platino) y multiplicadores RGU."
      ],
      role: "Full-Stack Developer / Solutions Architect",
      roleDetails: [
        "Modelé el dominio de comisiones y lideré el análisis de requerimientos con el equipo de finanzas.",
        "Desarrollé la interfaz responsiva y el dashboard de datos densos con React y Tailwind.",
        "Escribí las Cloud Functions en Node.js e integré las consultas parametrizadas a BigQuery.",
        "Desplegué el ecosistema completo en Firebase con configuraciones seguras de CORS y rate limiting."
      ],
      coverImage: "/projects/izzi-simulador.webp"
    },
    {
      id: "to-vibe",
      title: "toVibe",
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
      coverImage: "/projects/to-vibe.webp",
      url: "https://to-vibe.vercel.app/"
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
