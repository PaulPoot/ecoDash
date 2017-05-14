import Vue from 'vue';
import template from './dashboardNodesAdd.html';
import axios from 'axios';
import { API_BASE } from 'src/config/constants';

export default Vue.extend({
  template,
  props: ['LocationId'],
  data: function() {
    return {
      valid: false,
      Name: null,
      Description: null,
      Type: null,
    };
  },
  watch: {
    Name: function() {
      this.checkValidity();
    },
    Description: function() {
      this.checkValidity();
    },
    Type: function() {
      this.checkValidity();
    },
  },
  methods: {
    addNode: function() {
      var node = {
        LocationId: this.LocationId,
        Name: this.Name,
        Description: this.Description,
        Type: this.Type,
      };

      axios.post(API_BASE + '/nodes', node, {
        headers: {
          'Authorization': Vue.ls.get('token')
        } })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    checkValidity: function() {
      if (this.LocationId
      && this.Name
      && this.Description
      && this.Type) {
        this.valid = true;
      } else {
        this.valid = false;
      }
    },
  },
});
