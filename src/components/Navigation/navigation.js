import Vue from 'vue';
import template from './navigation.html';
import './navigation.scss';

import LoginForm from 'components/LoginForm/loginForm';

export default Vue.extend({
  template,
  components: {
    LoginForm,
  },
  data: function() {
    var showLoginForm = false;

    return {
      showLoginForm: showLoginForm,
    };
  }
});
