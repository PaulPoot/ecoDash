import Vue from 'vue';
import template from './loginForm.html';
import './loginForm.scss';
import Velocity from 'velocity-animate';

export default Vue.extend({
  template,
  data: function() {
    var user = {
      username: null,
      password: null,
    };
    var loginText = 'Login';
    var loggingIn = false;

    return {
      user: user,
      loginText: loginText,
      loggingIn: loggingIn,
    };
  },
  methods: {
    updateButton: function(loginText, loggingIn) {
      this.loginText = loginText;
      this.loggingIn = loggingIn;
    },
    login: function(e) {
      this.updateButton('Logging in...', true);

      Velocity(e.target, {
        marginBottom: 0,
        marginLeft: 0,
        paddingTop: '24px',
        paddingBottom: '24px',
        width: '100%',
        boxShadowY: 0,
      }, {
        duration: 200,
        easing: 'easeInQuad',
      });
    }
  },
});
