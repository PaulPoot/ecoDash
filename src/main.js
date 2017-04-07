import Vue from 'vue';
import Vuex from 'vuex';
import { mapGetters, mapMutations } from 'vuex';
import VueRouter from 'vue-router';
import { LoadingState } from 'src/config/loading-state';
import Navigation from 'components/Navigation/navigation';
import Loader from 'components/Loader/Loader';
import { store } from './util/store';

Vue.use(Vuex);
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
    Navigation,
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
