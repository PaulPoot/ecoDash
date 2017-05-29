import Vue from 'vue';
import template from './nodesAdd.html';
import { nodesResource } from 'src/util/resources';

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

      nodesResource.post('/', node)
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
