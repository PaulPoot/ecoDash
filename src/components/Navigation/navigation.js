import Vue from 'vue';
import template from './navigation.html';

import LoginForm from 'components/LoginForm/loginForm';

export default Vue.extend({
  template,
  components: {
    LoginForm,
  },
  data: function() {
    var showLoginForm = false;
    var isRaised = false;

    return {
      showLoginForm: showLoginForm,
      isRaised: isRaised,
    };
  },
  methods: {
    scrollHandler() {
      if (window.scrollY === 0) {
        this.isRaised = false;
      } else {
        this.isRaised = true;
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.scrollHandler);
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollHandler);
  }
});
