import App from './App.vue'
import router from './router'
import store from './store'

// types
import { createApp } from 'vue'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {

    interface State {
        count: number;
    }

    interface ComponentCustomProperties {
        $store: Store<State>;
    }
}

createApp(App).use(store).use(router).mount('#app')
