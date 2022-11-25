import { createApp } from "vue";
import App from "./App.vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { ru } from "vuetify/locale";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
const mainTheme = {
  dark: false,
  colors: {
    background: "#e7ebf0", // фон main
    surface: "#001e3c", // фон контейнеров
    "surface-secondary": "#FFFFFF", // фон карточек
    primary: "#f57c00",
    secondary: "#8bc34a",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};
const vuetify = createVuetify({
  components,
  directives,
  locale: {
    locale: "ru",
    messages: { ru },
  },
  theme: {
    defaultTheme: "mainTheme",
    themes: {
      mainTheme,
    },
  },
});

createApp(App).use(vuetify).mount("#helenlabeling");
