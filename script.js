
const correlativas = {
  "Historia de la Cultura I": "Correlativa: Ninguna",
  "La Tecnología y sus Usos": "Correlativa: Ninguna",
  "Literatura y Pensamiento": "Correlativa: Ninguna",
  "Introducción al Medio Audiovisual": "Correlativa: Ninguna",
  "Introducción a la Comunicación": "Correlativa: Ninguna",
  "Historia de la Cultura II": "Correlativa: Historia de la Cultura I",
  "Historia del Cine": "Correlativa: Ninguna",
  "Pensamiento Social Argentino y Latinoamericano": "Correlativa: Ninguna",
  "Fundamentos de la Programación I": "Correlativa: La Tecnología y sus Usos",
  "Fundamentos de la Programación II": "Correlativa: Fundamentos de la Programación I",
  "Cultura Lúdica: Jugar es Humano": "Correlativa: Ninguna",
  "Historia de los Videojuegos": "Correlativa: Historia del Cine",
  "Gestión de Proyectos": "Correlativa: Ninguna",
  "Diseño Lúdico I": "Correlativa: Ninguna",
  "Taller de Diseño y Animación en 2D": "Correlativa: Ninguna",
  "Juegos Serios I": "Correlativa: Cultura Lúdica: Jugar es Humano",
  "Industria del Videojuego": "Correlativa: Ninguna",
  "Taller de Diseño UIX/GUI": "Correlativa: Taller de Diseño y Animación en 2D",
  "Aspectos Legales del Desarrollo de Videojuegos": "Correlativa: Gestión de Proyectos",
  "Producción y Prácticas Lúdicas I": "Correlativa: Diseño Lúdico I",
  "Taller de Prototipado Digital": "Correlativa: Fundamentos de la Programación I",
  "Diseño Lúdico II": "Correlativa: Diseño Lúdico I",
  "Economía de la Cultura": "Correlativa: Ninguna",
  "Taller Introductorio al Diseño en 3D": "Correlativa: Taller de Diseño UIX/GUI",
  "Q.A. (\"Control de Calidad\")": "Correlativa: Taller de Prototipado Digital",
  "Producción y Prácticas Lúdicas II": "Correlativa: Producción y Prácticas Lúdicas I",
  "Internacionalización de Proyectos": "Correlativa: Aspectos Legales del Desarrollo de Videojuegos",
  "Marketing Digital": "Correlativa: Ninguna",
  "Narrativas Transmedia": "Correlativa: Taller Introductorio al Diseño en 3D",
  "Taller de Desarrollo de Entornos Virtuales": "Correlativa: Q.A. (\"Control de Calidad\")",
  "Juegos Serios II": "Correlativa: Juegos Serios I",
  "Modelos Organizacionales": "Correlativa: Internacionalización de Proyectos",
  "Inglés I": "Correlativa: Ninguna",
  "Inglés II": "Correlativa: Inglés I",
  "Ética y Liderazgo": "Correlativa: Modelos Organizacionales",
  "Planificación de Negocios": "Correlativa: Producción y Prácticas Lúdicas II",
  "Metodología de la Investigación I": "Correlativa: Ninguna",
  "Metodología de la Investigación II": "Correlativa: Metodología de la Investigación I",
  "Taller Proyectual": "Correlativa: Producción y Prácticas Lúdicas II y Narrativas Transmedia y Taller de Desarrollo de Entornos Virtuales"
};

function mostrar(nombre) {
  const info = correlativas[nombre] || "No se encontró información";
  document.getElementById("detalle").innerText = `${nombre} — ${info}`;
}
