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
    toPage: function(route) {
      this.$router.push(route);
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

      axios.post(API_BASE + '/token', this.user)
       .then(response => {
         console.log(response);

         axios.get(API_BASE + '/users', {
           headers: { 'Authorization': response.data }
         })
          .then(response2 => {
            console.log(response2);
          });
       })
       .catch(response => {
         console.log(response);
       });
    }
  },
});
