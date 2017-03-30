import Vue from 'vue';
import template from './dashboard.html';
import './dashboard.scss';
import DemoBarChart from './demoBarChart';

export default Vue.extend({
  template,
  components: {
    DemoBarChart,
  }
});
