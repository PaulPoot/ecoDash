import Vue from 'vue';
import template from './dashboard.html';
import Navigation from '../navigation/navigation';
import DemoBarChart from './demoBarChart';

export default Vue.extend({
  template,
  components: {
    Navigation,
    DemoBarChart,
  },
  created: function() {
    if (!Vue.ls.get('token')) {
      this.$router.push('/no-access');
    }
  }
});
