// Ao carregar a página, verificar se o modo foi salvo no localStorage
const savedMode = localStorage.getItem("mode");
if (savedMode) {
  document.documentElement.dataset.mode = savedMode;
  // Atualizar o estado do checkbox conforme o modo salvo
  document.querySelector(".toggle input").checked = savedMode === "dark";
}

// Ouvir as mudanças no toggle e salvar o modo no localStorage
document.querySelector(".toggle input").addEventListener("change", (event) => {
  const mode = event.currentTarget.checked ? "dark" : "light";
  document.documentElement.dataset.mode = mode;
  localStorage.setItem("mode", mode); 
});
