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
      var self = this;

      axios.all([
        axios.get(API_BASE + '/nodes'),
        axios.get(API_BASE + '/sensors'),
      ])
        .then(axios.spread(function(nodes, sensors) {
          // Filter nodes on current location ID
          for (var nodeObj in nodes.data) {
            var node = nodes.data[nodeObj];
            node.sensorsFailingCount = 0;
            node.sensorsOfflineCount = 0;
            node.sensorCount = 0;

            if (node.LocationId === self.locationId) {
              self.nodes.push(node);
            }
          }

          // Count sensors for every node
          for (var sensorObj in sensors.data) {
            for (nodeObj in self.nodes) {
              var sensor = sensors.data[sensorObj];
              node = self.nodes[nodeObj];

              if (sensor.NodeId === node.Id) {
                node.sensorCount++;

                if (sensor.Status === 2) {
                  node.sensorsFailingCount++;
                } else if (sensor.Status === 3) {
                  node.sensorsOfflineCount++;
                }
              }
            }
          }
        }))
        .catch(error => {
          console.log(error);
        });
    },
  },
  created: function() {
    this.getNodes();
  }
});
