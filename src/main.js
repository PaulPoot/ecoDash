import Vue from 'vue';
import Vuex from 'vuex';
import VueLocalStorage from 'vue-ls';
import { mapGetters, mapMutations } from 'vuex';
import VueRouter from 'vue-router';
import { LoadingState } from 'src/config/loading-state';
import Loader from 'components/Loader/Loader';
import { store } from './util/store';
import * as VueGoogleMaps from 'vue2-google-maps';
import { MAPS_KEY } from 'src/config/constants';

Vue.use(VueGoogleMaps, {
  load: {
    key: MAPS_KEY,
    v: '3.26',
    // libraries: 'places', //// If you need to use place input
  }
});

Vue.use(Vuex);
Vue.use(VueLocalStorage, {
  namespace: 'vuejs__'
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
  components: {
    Loader
  },

  data(){
    return {
      isLoading: false
    };
  },

  created(){
    LoadingState.$on('toggle', (isLoading) => {
      this.isLoading = isLoading;
    });
  }
}).$mount('#app');
