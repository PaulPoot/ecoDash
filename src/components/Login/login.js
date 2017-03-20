import Vue from 'vue';
import template from './login.html';
import './login.scss';

export default Vue.extend({
  template,
  data: function() {
    var user = {
      username: null,
      password: null,
    };
    return { user: user };
  },
});
