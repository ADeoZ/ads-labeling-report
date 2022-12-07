import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import { ru } from "vuetify/locale";
import "vuetify/styles";

const mainTheme = {
  dark: false,
  colors: {
    background: "#e7ebf0", // фон main
    surface: "#FFFFFF", // фон контейнеров
    "app-bars": "#001e3c", // фон меню
    primary: "#f57c00",
    secondary: "#8bc34a",
    error: "#B00020",
    info: "#2196F3",
    success: "#235283",
    cancel: "#B00020",
  },
};

const vuetify = createVuetify({
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

export default vuetify;
