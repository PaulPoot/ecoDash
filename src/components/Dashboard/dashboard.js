import Vue from 'vue';
import template from './dashboard.html';
import DemoBarChart from './demoBarChart';

export default Vue.extend({
  template,
  components: {
    DemoBarChart,
  },
  created: function() {
    console.log('dashboard: ' + this.$store.state.token);
    if (!Vue.ls.get('token')) {
      this.$router.push('/no-access');
    }
  }
});
