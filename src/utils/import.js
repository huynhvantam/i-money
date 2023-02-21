import { defineAsyncComponent } from "vue";
export function registerGlobalComponents(app) {
  app.component(
    "auth-layout",
    defineAsyncComponent(() => import("@/layouts/app-auth"))
  );
  app.component(
    "default-layout",
    defineAsyncComponent(() => import("@/layouts/app-default"))
  );
}
