import Vue from 'vue';
import template from './sensorsAdd.html';
import { sensorsResource } from 'src/util/resources';

export default Vue.extend({
  template,
  props: ['NodeId'],
  data: function() {
    return {
      valid: false,
      SensorType: null,
      ProductName: null,
      Status: null,
      Interval: null,
    };
  },
  watch: {
    SensorType: function() {
      this.checkValidity();
    },
    ProductName: function() {
      this.checkValidity();
    },
    Status: function() {
      this.checkValidity();
    },
    Interval: function() {
      this.checkValidity();
    }
  },
  methods: {
    addSensor: function() {
      var sensor = {
        NodeId: this.NodeId,
        SensorType: this.SensorType,
        ProductName: this.ProductName,
        Status: this.Status,
        Interval: this.Interval,
      };

      sensorsResource.post('/', sensor)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    checkValidity: function() {
      if (this.NodeId
      && this.SensorType
      && this.ProductName
      && this.Status
      && this.Interval) {
        this.valid = true;
      } else {
        this.valid = false;
      }
    },
  },
});
