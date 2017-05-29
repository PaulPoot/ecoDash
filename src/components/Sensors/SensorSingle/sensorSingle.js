import Vue from 'vue';
import template from './sensorSingle.html';
import { sensorsResource } from 'src/util/resources';
import Navigation from '../../Navigation/navigation';

export default Vue.extend({
  template,
  components: {
    Navigation,
  },
  data: function() {
    return {
      sensor: [],
      valid: false,
      success: null,
    };
  },
  watch: {
    'sensor.SensorType': function() {
      this.checkValidity();
    },
    'sensor.ProductName': function() {
      this.checkValidity();
    },
    'sensor.Status': function() {
      this.checkValidity();
    },
    'sensor.Interval': function() {
      this.checkValidity();
    },
  },
  methods: {
    getSensor: function() {
      sensorsResource.get('/' + this.$route.params.sensorid)
        .then(response => {
          this.sensor = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },

    updateSensor: function() {
      if (window.confirm('Are you sure you want to make these changes?')) {
        this.success = null;

        sensorsResource.put('/', this.sensor)
          .then(response => {
            console.log(response);
            this.success = true;
          })
          .catch(error => {
            console.log(error);
            this.success = false;
          });
      }
    },

    deleteSensor: function() {
      if (window.confirm('Are you sure you want to delete this sensor?')) {
        sensorsResource.delete('/' + this.sensor.Id)
          .then(response => {
            console.log(response);
            this.$router.push('/dashboard/locations/' + this.$route.params.locationid + '/' + this.$route.params.nodeid);
          })
          .catch(error => {
            console.log(error);
          });
      }
    },

    checkValidity: function() {
      if (this.sensor.SensorType
      && this.sensor.ProductName
      && this.sensor.Status
      && this.sensor.Interval) {
        this.valid = true;
      } else {
        this.valid = false;
      }
    },
  },
  created: function() {
    if (!Vue.ls.get('token')) {
      this.$router.push('/no-access');
    }
    this.getSensor();
  }
});
