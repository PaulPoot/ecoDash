import Vue from 'vue';
import template from './locationSingle.html';
import axios from 'axios';
import { API_BASE } from 'src/config/constants';
import Navigation from '../../Navigation/navigation';
import LocationEdit from './LocationEdit/locationEdit';
import Nodes from '../../Nodes/nodes';
import NodesAdd from '../../Nodes/NodesAdd/nodesAdd';

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
      axios.get(API_BASE + '/locations/' + this.$route.params.locationid)
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
