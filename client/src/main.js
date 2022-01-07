import { createApp } from 'vue';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import {
    faAngleDown,
    faAngleDoubleDown,
    faAngleDoubleUp,
    faAngleUp,
    faEquals,
    faHistory
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueApexCharts from 'vue3-apexcharts';
import mitt from 'mitt';

import './index.css';

library.add(
    faAngleDown,
    faAngleDoubleDown,
    faAngleDoubleUp,
    faAngleUp,
    faHistory,
    faEquals
);
library.add(faQuestionCircle);

const emitter = mitt();

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.config.globalProperties.emitter = emitter;
app.use(VueApexCharts);
app.mount('#app');
