import Vue from 'vue';
import template from './userSettings.html';
import Navigation from '../../Navigation/navigation';

export default Vue.extend({
  template,
  components: {
    Navigation,
  },
  created: function() {
    if (!Vue.ls.get('token')) {
      this.$router.push('/no-access');
    }
  }
});
