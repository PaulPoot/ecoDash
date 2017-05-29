import Vue from 'vue';
import template from './locationsAdd.html';
import { locationsResource } from 'src/util/resources';

export default Vue.extend({
  template,
  data: function() {
    return {
      valid: false,
      Name: null,
      Description: null,
      Latitude: null,
      Longitude: null,
    };
  },
  watch: {
    Name: function() {
      this.checkValidity();
    },
    Description: function() {
      this.checkValidity();
    },
  },
  methods: {
    addLocation: function() {
      var location = {
        Name: this.Name,
        Description: this.Description,
        GeoCoordinates: {
          Latitude: this.Latitude,
          Longitude: this.Longitude,
        },
      };

      locationsResource.post('/', location)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    checkValidity: function() {
      if (this.Name
      && this.Description) {
        this.valid = true;
      } else {
        this.valid = false;
      }
    },
  },
});
