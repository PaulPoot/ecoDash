import Vue from 'vue';
import template from './dashboardSensors.html';
import axios from 'axios';
import { API_BASE } from 'src/config/constants';

export default Vue.extend({
  template,
  data: function() {
    var sensors = null;

    return {
      sensors: sensors,
    };
  },
  methods: {
    getSensors: function() {
      axios.get(API_BASE + '/sensors', {
        headers: {
          'Authorization': Vue.ls.get('token')
        } })
        .then(response => {
          this.sensors = response.data;
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
    this.getSensors();
  }
});
