import Vue from 'vue';
import template from './nodeSingle.html';
import { nodesResource } from 'src/util/resources';
import Navigation from '../../Navigation/navigation';
import Sensors from '../../Sensors/sensors';
import SensorsAdd from '../../Sensors/SensorsAdd/sensorsAdd';
import NodeEdit from './NodeEdit/nodeEdit';

export default Vue.extend({
  template,
  components: {
    Navigation,
    Sensors,
    SensorsAdd,
    NodeEdit,
  },
  data: function() {
    return {
      node: [],
    };
  },
  methods: {
    getNode: function() {
      nodesResource.get('/' + this.$route.params.nodeid)
        .then(response => {
          this.node = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
  created: function() {
    if (!Vue.ls.get('token')) {
      this.$router.push('/no-access');
    }
    this.getNode();
  }
});
