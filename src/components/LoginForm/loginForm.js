import Vue from 'vue';
import template from './loginForm.html';
import './loginForm.scss';
import Velocity from 'velocity-animate';
import axios from 'axios';
import { API_BASE } from 'src/config/constants';

export default Vue.extend({
  template,
  data: function() {
    var user = {
      username: null,
      password: null,
    };
    var loginText = 'Login';
    var loggingIn = false;
    var error = false;

    return {
      user: user,
      loginText: loginText,
      loggingIn: loggingIn,
      error: error,
    };
  },
  methods: {
    updateButton: function(loginText, loggingIn) {
      this.loginText = loginText;
      this.loggingIn = loggingIn;
    },

    toPage: function(route) {
      this.$router.push(route);
    },

    loginStart: function(e) {
      this.updateButton('Logging in...', true);

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
      axios.post(API_BASE + '/token', this.user)
        .then(response => {
          this.$store.commit('updateToken', response.data);

          axios.get(API_BASE + '/users', {
            headers: { 'Authorization': response.data }
          })
            .then(response => {
              console.log(response);
            })
            .catch(error => {
              var self = this;
              this.handleError(self, e, error);
            });
        })
        .catch(error => {
          var self = this;
          this.handleError(self, e, error);
        });
    },
    handleError(self, e, error) {
      console.log(error);

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
