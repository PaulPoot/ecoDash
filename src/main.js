import Vue from 'vue';
import Vuex from 'vuex';
import VueLocalStorage from 'vue-ls';
import { mapGetters, mapMutations } from 'vuex';
import VueRouter from 'vue-router';
import { store } from './util/store';
import axios from 'axios';
import * as VueGoogleMaps from 'vue2-google-maps';
import { LS_NAMESPACE, MAPS_KEY } from 'src/config/constants';

Vue.use(VueGoogleMaps, {
  load: {
    key: MAPS_KEY,
    v: '3.26',
    // libraries: 'places', //// If you need to use place input
  }
});

Vue.use(Vuex);
Vue.use(VueLocalStorage, {
  namespace: LS_NAMESPACE
});
Vue.use(VueRouter);

import routes from 'src/routes';
import 'src/style.scss';

export const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active',
  computed: {
    ...mapGetters([
      'token'
    ])
  },
  methods: {
    ...mapMutations([
      'updateToken'
    ])
  }
});

new Vue({
  store,
  router,
  created(){
    axios.defaults.headers.common.Authorization = Vue.ls.get('token');
  }
}).$mount('#app');
