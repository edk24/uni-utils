import { createSSRApp } from "vue";
import App from "./App.vue";

if (import.meta.env.DEV) {
  import('./mock')
}

import 'virtual:uno.css'
import './main.scss'

export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
