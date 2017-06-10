import Vue from 'vue';
import template from './navigation.html';

import LoginForm from 'components/LoginForm/loginForm';

export default Vue.extend({
  template,
  components: {
    LoginForm,
  },
  computed: {
    token: function() {
      return Vue.ls.get('token');
    }
  },
  data: function() {
    return {
      showLoginForm: false,
      isRaised: false,
    };
  },
  methods: {
    // Function that enables drop shadow on navbar when scrolled
    scrollHandler() {
      if (window.scrollY === 0) {
        this.isRaised = false;
      } else {
        this.isRaised = true;
      }
    },
    logout() {
      Vue.ls.remove('token');
      this.$router.push('/');
    }
  },
  created() {
    window.addEventListener('scroll', this.scrollHandler);
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollHandler);
  }
});
