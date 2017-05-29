import Vue from 'vue';
import template from './nodeEdit.html';
import { nodesResource } from 'src/util/resources';

export default Vue.extend({
  template,
  props: ['node', 'location'],
  data: function() {
    return {
      valid: false,
      success: null,
    };
  },
  watch: {
    'node.Name': function() {
      this.checkValidity();
    },
    'node.Description': function() {
      this.checkValidity();
    },
    'node.Type': function() {
      this.checkValidity();
    },
  },
  methods: {
    updateNode: function() {
      if (window.confirm('Are you sure you want to make these changes?')) {
        this.success = null;

        nodesResource.put('/', this.node)
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

    deleteNode: function() {
      if (window.confirm('Are you sure you want to delete this node?')) {
        nodesResource.delete('/' + this.node.Id)
          .then(response => {
            console.log(response);
            this.$router.push('/dashboard/locations/' + this.$route.params.locationid);
          })
          .catch(error => {
            console.log(error);
          });
      }
    },

    checkValidity: function() {
      if (this.node.Name
      && this.node.Description
      && this.node.Type) {
        this.valid = true;
      } else {
        this.valid = false;
      }
    },
  },
});
