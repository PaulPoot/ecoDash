import Vue from 'vue';
import template from './dashboardNodes.html';
import axios from 'axios';
import { API_BASE } from 'src/config/constants';

export default Vue.extend({
  template,
  data: function() {
    var nodes = null;

    return {
      nodes: nodes,
    };
  },
  methods: {
    getNodes: function() {
      axios.get(API_BASE + '/nodes', {
        headers: {
          'Authorization': Vue.ls.get('token')
        } })
        .then(response => {
          this.nodes = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created: function() {
    if (!Vue.ls.get('token')) {
      this.$router.push('/no-access');
    }
    this.getNodes();
  }
});
