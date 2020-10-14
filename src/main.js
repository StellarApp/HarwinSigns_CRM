import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueSimpleAlert from "vue-simple-alert";

import {library} from "@fortawesome/fontawesome-svg-core";

import {
  faTrash, faEdit, faListUl,faRandom, faUndo, faCheckSquare, faEnvelope, faUser, faPhone, faMapMarkerAlt, faBuilding, faDollarSign
} from "@fortawesome/free-solid-svg-icons";

library.add(faTrash, faEdit, faListUl,faRandom, faUndo, faCheckSquare, faEnvelope, faUser, faPhone, faMapMarkerAlt, faBuilding, faDollarSign);

Vue.use(VueSimpleAlert, { title: "Success Alert", width: "420px" });
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");