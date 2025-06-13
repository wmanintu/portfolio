import { ref, onMounted } from "vue";

// Global theme state
const isDark = ref(false);

// Apply theme to document
const applyTheme = () => {
  const html = document.documentElement;
  if (isDark.value) {
    html.setAttribute("data-theme", "dark");
  } else {
    html.setAttribute("data-theme", "light");
  }
};

// Initialize theme
const initTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    isDark.value = savedTheme === "dark";
  } else {
    // Check system preference
    isDark.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  applyTheme();
};

// Toggle theme function
const toggleTheme = () => {
  isDark.value = !isDark.value;
  localStorage.setItem("theme", isDark.value ? "dark" : "light");
  applyTheme();
};

// Theme composable
export const useTheme = () => {
  onMounted(() => {
    if (!document.documentElement.hasAttribute("data-theme")) {
      initTheme();
    }
  });

  return {
    isDark: isDark,
    toggleTheme,
    initTheme,
  };
};
