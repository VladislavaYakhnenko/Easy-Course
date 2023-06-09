import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDarkMode: localStorage.theme === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches,
  }),
  getters: {
    darkModeClass: (state) => (state.isDarkMode ? 'dark' : ''),
  },
  actions: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      localStorage.theme = this.isDarkMode ? 'dark' : 'light';
      this.setTheme();
    },
    setTheme() {
      const isDark = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
      document.documentElement.classList.toggle('dark', isDark);
      this.isDarkMode = isDark;
    }
  },
})
