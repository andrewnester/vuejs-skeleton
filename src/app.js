import Vue from 'vue'
import Hello from './components/Hello'

const AppComponent = Vue.extend({
    name: 'app',
    components: {
        Hello
    }
})

export default AppComponent
