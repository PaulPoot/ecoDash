import Vue from 'vue';
import template from './sensors.html';
import axios from 'axios';
import { API_BASE } from 'src/config/constants';

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
      axios.get(API_BASE + '/sensors', {
        headers: {
          'Authorization': Vue.ls.get('token')
        } })
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
    }
  },
  created: function() {
    this.getSensors();
  }
});
