import Vue from 'vue';
import App from './modules/App';

new Vue({ render: createElement => createElement(App) }).$mount('#app');
