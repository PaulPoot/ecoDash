import Vue from 'vue';
import template from './sensors.html';
import { sensorsResource } from 'src/util/resources';

export default Vue.extend({
  template,
  props: ['nodeId'],
  data: function() {
    return {
      sensors: [],
    };
  },
  methods: {
    getSensors: function() {
      sensorsResource.get('/')
        .then(response => {
          for (var i = 0; i < response.data.length; i++) {
            var sensor = response.data[i];
            if (sensor.NodeId === this.nodeId) {
              this.sensors.push(sensor);
            }
          }
        })
        .catch(error => {
          console.log(error);
        });
    },

    openSensor: function(sensor) {
      this.$router.push('/dashboard/locations/' + this.$route.params.locationid + '/' + this.$route.params.nodeid + '/' + sensor.Id);
    }
  },
  created: function() {
    this.getSensors();
  }
});
