import { createApp } from "vue"
import router from "./router"
import App from "./App.vue"

import "bulma/css/bulma.css"
// import "bulma/bulma.sass"

import "../mystyles.scss"

createApp(App).use(router).mount("#app")
