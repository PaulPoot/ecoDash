import Vue from 'vue';
import template from './loginForm.html';
import Velocity from 'velocity-animate';
import { API_BASE } from 'src/config/constants';
import axios from 'axios';

export default Vue.extend({
  template,
  data: function() {
    return {
      user: {
        username: null,
        password: null,
      },
      loginText: 'Login',
      loggingIn: false,
      error: false,
    };
  },
  methods: {
    updateButton: function(loginText, loggingIn) {
      this.loginText = loginText;
      this.loggingIn = loggingIn;
    },
    loginStart: function(e) {
      this.updateButton('Logging in...', true);

      // Animate in
      Velocity(e.target, {
        marginBottom: 0,
        paddingTop: '24px',
        paddingBottom: '24px',
        boxShadowY: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
      }, {
        duration: 200,
        easing: 'easeInQuad',
        complete: this.login(e),
      });
      Velocity(e.target.parentElement, {
        paddingLeft: 0,
        paddingRight: 0,
      }, {
        duration: 200,
        easing: 'easeInQuad',
      });
    },

    login: function(e) {
      var expireTime = 600000; // set expiration time to 10 minutes in miliseconds

      axios.post(API_BASE + '/token', this.user)
        .then(response => {
          Vue.ls.set('token', response.data, expireTime);

          // Set default authorization header to token
          axios.defaults.headers.common.Authorization = response.data;

          axios.get(API_BASE + '/users')
            .then(response => {
              for (var i = 0; i < response.data.length; i++) {
                if (response.data[i].UserName === this.user.username) {
                  Vue.ls.set('user', response.data[i], expireTime);
                  this.$router.push('/dashboard');
                  this.$emit('close');
                }
              }
            })
            .catch(error => {
              console.log(error);
            });
        })
        .catch(error => {
          var self = this;
          this.handleError(self, e, error);
        });
    },
    handleError(self, e, error) {
      console.log(error);

      // Animate out
      Velocity(e.target, 'reverse', {
        delay: 1000,
        duration: 200,
        easing: 'easeInQuad',
      });
      Velocity(e.target.parentElement, 'reverse', {
        delay: 1000,
        duration: 200,
        easing: 'easeInQuad',
        complete: function() {
          self.error = 'We could not log you in using these credentials.';
          self.loggingIn = false;
          self.loginText = 'Login';
        }
      });
    }
  },
});
