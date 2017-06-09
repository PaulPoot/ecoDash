import Vue from 'vue';
import template from './nodes.html';
import axios from 'axios';
import { API_BASE } from 'src/config/constants';
import NodesAdd from './NodesAdd/nodesAdd';

export default Vue.extend({
  template,
  components: {
    NodesAdd,
  },
  props: ['locationId'],
  data: function() {
    return {
      nodes: [],
    };
  },
  methods: {
    getNodes: function() {
      axios.get(API_BASE + '/nodes')
        .then(response => {
          for (var i = 0; i < response.data.length; i++) {
            var node = response.data[i];
            if (node.LocationId === this.locationId) {
              this.nodes.push(node);
            }
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
  created: function() {
    this.getNodes();
  }
});
