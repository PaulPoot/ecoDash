import Vue from 'vue';
import template from './dashboardNodes.html';
import axios from 'axios';
import { API_BASE } from 'src/config/constants';
import Navigation from '../Navigation/navigation';

export default Vue.extend({
  template,
  components: {
    Navigation,
  },
  data: function() {
    return {
      nodes: [],
    };
  },
  methods: {
    getNodes: function() {
      axios.get(API_BASE + '/nodes', {
        headers: {
          'Authorization': Vue.ls.get('token')
        } })
        .then(response => {
          for (var i = 0; i < response.data.length; i++) {
            var location = response.data[i];
            if (location.LocationId === this.$route.params.id) {
              this.nodes.push(location);
            }
          }
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
