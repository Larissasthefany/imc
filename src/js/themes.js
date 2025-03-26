const savedMode = localStorage.getItem("mode");

const themes = {
  dark: {
    backgroundColor: "#333",
    color: "#d3d3d3",
  },

  light: {
    backgroundColor: "#fff",
    color: "#a2a2a2",
  },
};

function updateTheme(mode) {
  const theme = themes[mode];

  if (theme) {
    Object.keys(theme).forEach((key) => {
      document.body.style[key] = theme[key]; 
      document.querySelector("main").style[key] = theme[key]; 
    });
  }
}

// Aplica o tema salvo quando a página for carregada
if (savedMode) {
  // Atualiza o estado do checkbox conforme o modo salvo
  document.querySelector(".toggle input").checked = savedMode === "dark";
  updateTheme(savedMode);
}

// Ouve as mudanças no toggle e salva o modo no localStorage
document.querySelector(".toggle input").addEventListener("change", (event) => {
  const mode = event.currentTarget.checked ? "dark" : "light";
  localStorage.setItem("mode", mode); 
  updateTheme(mode);
});
