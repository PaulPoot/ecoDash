import Vue from 'vue';
import template from './locationSingle.html';
import axios from 'axios';
import { API_BASE } from 'src/config/constants';
import Navigation from '../../navigation/navigation';
import LocationEdit from './locationEdit/locationEdit';
import Nodes from '../../nodes/nodes';
import NodesAdd from '../../nodes/nodesAdd/nodesAdd';

export default Vue.extend({
  template,
  components: {
    Navigation,
    LocationEdit,
    Nodes,
    NodesAdd,
  },
  data: function() {
    return {
      location: null,
      mapOptions: {
        disableDefaultUI: true,
      }
    };
  },
  methods: {
    getLocation: function() {
      axios.get(API_BASE + '/locations/' + this.$route.params.id, {
        headers: {
          'Authorization': Vue.ls.get('token')
        } })
        .then(response => {
          var location = response.data;
          if (!location.GeoCoordinates) {
            location.GeoCoordinates = {
              latitude: null,
              longitude: null,
            };
          }
          this.location = location;
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
  created: function() {
    if (!Vue.ls.get('token')) {
      this.$router.push('/no-access');
    }
    this.getLocation();
  }
});
