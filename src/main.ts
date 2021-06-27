import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import router from './router'
import store from './store'
import firebase from 'firebase/app'

let app = '';

firebase.auth().onAuthStateChanged(user => {
    if (!app) {
        createApp(App).
            use(Quasar, quasarUserOptions).
            use(router).
            use(store).mount('#app')

    }
});
