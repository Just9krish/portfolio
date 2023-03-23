export default function getColor(language) {
  if (!language) {
    return "#000000"; // or whatever default color you want to use
  }

  const colors = {
    python: "#3572A5",
    java: "#B07219",
    javascript: "#F7DF1E",
    c: "#555555",
    cpp: "#F34B7D",
    html: "#E34F26",
    css: "#1572B6",
    ejs: "#A91E50",
    scss: "#C6538C",
    nodejs: "#72B05A",
    mongoose: "#9C4C4B",
    mongodb: "#429543",
  };

  return colors[language.toLowerCase()] || "#000000";
}
