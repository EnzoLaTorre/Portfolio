// ============================================================
// PROYECTOS - datos del portafolio
// Para agregar un proyecto, copia un bloque "project" y edítalo.
// Opciones por proyecto:
//   title        (obligatorio) Nombre del proyecto.
//   description  (obligatorio) Descripción breve.
//   tags         (obligatorio) Arreglo de tecnologías: ['HTML','CSS',...]
//   demoUrl      (obligatorio) Enlace al demo ('#' si aún no tienes).
//   repoUrl      (obligatorio) Enlace al repositorio.
//   image        (opcional)    URL de la captura/screenshot del proyecto.
//   gradient     (opcional)    Clave de degradado de abajo; solo si no usas image.
// ============================================================
window.PROJECTS_DATA = {

  // Degradados para miniaturas sin imagen. Puedes agregar más:
  gradients: {
    sunset: 'linear-gradient(135deg, #f59e0b, #ef4444, #8b5cf6)',
    ocean: 'linear-gradient(135deg, #06b6d4, #3b82f6, #8b5cf6)',
    forest: 'linear-gradient(135deg, #10b981, #06b6d4, #3b82f6)',
    neon: 'linear-gradient(135deg, #38bdf8, #818cf8, #d946ef)',
  },

  // Lista de proyectos:
  projects: [
    {
      title: 'Enzo La Torre · Portafolio',
      description:
        'Este mismo sitio web: portafolio responsive con diseño oscuro, animaciones y validación de formulario, construido solo con HTML, CSS y JavaScript.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      demoUrl: '#',
      repoUrl: 'https://github.com/enzolatorre/enzolatorre.github.io',
      image: '',
      gradient: 'neon',
    },
    {
      title: 'Gestor de Tareas con POO',
      description:
        'Gestor de tareas con JavaScript puro aplicando programación orientada a objetos: clases, encapsulamiento, herencia y persistencia con localStorage.',
      tags: ['HTML', 'CSS', 'JavaScript', 'POO'],
      demoUrl: 'https://enzolatorre.github.io/gestor-tareas/',
      repoUrl: 'https://github.com/EnzoLaTorre/gestor-tareas',
      image: '',
      gradient: 'ocean',
    },

    // ----- Ejemplos de proyectos de ciencia de datos (solo estructura) -----
    // Cuando tengas un proyecto de data science, copia uno de estos bloques
    // dentro del arreglo "projects". Sus tags sumarán tarjetas a "Tecnologías"
    // automáticamente (ej.: 'Python', 'Pandas', 'Power BI' ya están en base).

    // {
    //   title: 'Análisis de ventas con Python',
    //   description:
    //     'Limpieza, análisis y visualización de un dataset real usando Pandas y Power BI.',
    //   tags: ['Python', 'Pandas', 'Power BI'],
    //   demoUrl: '#',
    //   repoUrl: '#',
    //   gradient: 'ocean',
    // },

    // {
    //   title: 'Dashboard de métricas',
    //   description:
    //     'Consulta de datos con SQL y tablero interactivo para tomar decisiones.',
    //   tags: ['SQL', 'Power BI'],
    //   demoUrl: '#',
    //   repoUrl: '#',
    //   gradient: 'forest',
    // },

    // ----- Ejemplo de proyecto backend -----

    // {
    //   title: 'API REST de tareas',
    //   description:
    //     'API REST construida con Node.js y Express para gestionar tareas y usuarios.',
    //   tags: ['Node.js', 'Express'],
    //   demoUrl: '#',
    //   repoUrl: '#',
    //   gradient: 'sunset',
    // },
  ],
};