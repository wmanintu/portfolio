import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";

import "../mystyles.scss";

// fontawesome.js
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithub, faSpotify } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faEarthAmericas,
  faMinus,
  faPlus,
  faSun,
  faMoon,
  faCopy,
  faCheck,
  faCheckCircle,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faGithub,
  faArrowRight,
  faEarthAmericas,
  faSpotify,
  faMinus,
  faPlus,
  faSun,
  faMoon,
  faCopy,
  faCheck,
  faCheckCircle,
  faCode
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
