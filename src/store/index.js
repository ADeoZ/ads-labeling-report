import { createStore, createLogger } from "vuex";
import clients from "@/store/modules/clients";
import agency from "@/store/modules/agency";
import auth from "@/store/modules/auth";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    auth,
    clients,
    agency,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
