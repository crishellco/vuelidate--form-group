import Vue from "vue";
import vuelidate from "vuelidate";

Vue.use(vuelidate);

import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
