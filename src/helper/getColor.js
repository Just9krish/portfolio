export default function getColor(language) {
  if (!language) {
    return "#000000"; // or whatever default color you want to use
  }

  const colors = {
    // Frontend
    javascript: "#F7DF1E",
    html: "#E34F26",
    css: "#1572B6",
    scss: "#C6538C",
    react: "#61DAFB",
    "reactjs": "#61DAFB",
    "react.js": "#61DAFB",
    nextjs: "#000000",
    "next.js": "#000000",
    typescript: "#2F74C0",
    tailwindcss: "#06B6D4",
    "tailwind css": "#06B6D4",

    // Backend
    nodejs: "#72B05A",
    "node.js": "#72B05A",
    express: "#000000",
    "express.js": "#000000",

    // Databases
    mongodb: "#429543",
    postgresql: "#336791",
    postgres: "#336791",
    mysql: "#4479A1",

    // Cloud & Services
    aws: "#FF9900",
    "aws sns": "#FF9900",
    "aws mediaconvert": "#FF9900",
    docker: "#2496ED",

    // Other
    ejs: "#A91E50",
    mongoose: "#9C4C4C",
    websockets: "#FF6B6B",
    "monaco editor": "#007ACC",
    python: "#3572A5",
    java: "#B07219",
    git: "#F05032",
    github: "#181717",
  };

  // Handle variations and partial matches
  const normalizedLanguage = language.toLowerCase().replace(/[^a-z0-9]/g, '');

  for (const [key, value] of Object.entries(colors)) {
    const normalizedKey = key.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (normalizedLanguage.includes(normalizedKey) || normalizedKey.includes(normalizedLanguage)) {
      return value;
    }
  }

  return colors[language.toLowerCase()] || "#6B7280"; // Default gray color
}
