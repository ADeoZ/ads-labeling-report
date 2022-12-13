import { createStore, createLogger } from "vuex";
import clients from "@/store/modules/clients";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    clients,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
