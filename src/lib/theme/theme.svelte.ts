import { STORAGE_KEYS } from "$lib/constants";

function createThemeStore() {
  let darkMode = $state(false);

  function init() {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(STORAGE_KEYS.DARK_MODE);
      darkMode = saved === "true";
      document.body.classList.toggle("dark", darkMode);
    }
  }

  function toggle() {
    darkMode = !darkMode;
    localStorage.setItem(STORAGE_KEYS.DARK_MODE, String(darkMode));
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
