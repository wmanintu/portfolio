import { createApp } from "vue"
import router from "./router"
import App from "./App.vue"

import "bulma/css/bulma.css"
import "../mystyles.scss"

// fontawesome.js

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

library.add(faGithub)

createApp(App)
	.component("font-awesome-icon", FontAwesomeIcon)
	.use(router)
	.mount("#app")
