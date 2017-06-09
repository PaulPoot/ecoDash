import Vue from 'vue';
import template from './locationEdit.html';
import axios from 'axios';
import { API_BASE } from 'src/config/constants';

export default Vue.extend({
  template,
  props: ['location'],
  data: function() {
    return {
      valid: false,
      success: null,
    };
  },
  watch: {
    'location.Name': function() {
      this.checkValidity();
    },
    'location.Description': function() {
      this.checkValidity();
    },
  },
  methods: {
    updateLocation: function() {
      if (window.confirm('Are you sure you want to make these changes?')) {
        this.success = null;

        axios.put(API_BASE + '/locations', this.location)
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

    deleteLocation: function() {
      if (window.confirm('Are you sure you want to delete this location?')) {
        axios.delete(API_BASE + '/locations/' + this.location.Id, { headers: {
          'Authorization': Vue.ls.get('token')
        } })
          .then(response => {
            console.log(response);
            this.$router.push('/dashboard/locations');
          })
          .catch(error => {
            console.log(error);
          });
      }
    },

    checkValidity: function() {
      if (this.location.Name
      && this.location.Description) {
        this.valid = true;
      } else {
        this.valid = false;
      }
    },
  },
});
