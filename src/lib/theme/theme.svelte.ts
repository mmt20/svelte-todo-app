function createThemeStore() {
  let darkMode = $state(false);

  function init() {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("darkMode");
      darkMode = saved === "true";
      document.body.classList.toggle("dark", darkMode);
    }
  }

  function toggle() {
    darkMode = !darkMode;
    localStorage.setItem("darkMode", String(darkMode));
    document.body.classList.toggle("dark", darkMode);
  }

  return {
    get darkMode() {
      return darkMode;
    },
    init,
    toggle,
  };
}

export const theme = createThemeStore();
