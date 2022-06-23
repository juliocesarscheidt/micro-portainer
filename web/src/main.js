import Vue from 'vue';

import App from './App.vue';
import router from './router';
import store from './store/store';

// plugins
import './plugins/bootstrap';
import './plugins/notification';

// mixins
import './mixins/notification';

// filters
import { capitalize, trimLetters } from './filters/';

Vue.filter('capitalize', capitalize);
Vue.filter('trimLetters', trimLetters);

Vue.config.productionTip = process.env.PRODUCTION_TIP || false;
Vue.config.devtools = process.env.DEV_TOOLS || true;

new Vue({
  router,
  store,
	render: h => h(App),
}).$mount('#app');
