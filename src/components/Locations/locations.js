import Vue from 'vue';
import template from './locations.html';
import axios from 'axios';
import { API_BASE } from 'src/config/constants';
import Navigation from '../Navigation/navigation';
import LocationsAdd from './LocationsAdd/locationsAdd';

export default Vue.extend({
  template,
  components: {
    Navigation,
    LocationsAdd,
  },
  data: function() {
    return {
      locations: [],
      mapOptions: {
        disableDefaultUI: true,
      }
    };
  },
  methods: {
    getLocations: function() {
      this.locations = [];

      axios.get(API_BASE + '/locations')
        .then(response => {
          for (let location of response.data) {
            location.NodeCount = 0;
            this.locations.push(location);
          }

          // Get nodes and count how many nodes every location has.
          axios.get(API_BASE + '/nodes')
            .then(response => {
              for (var node in response.data) {
                for (var location in this.locations) {
                  if (this.locations[location].Id === response.data[node].LocationId) {
                    this.locations[location].NodeCount++;
                    break;
                  }
                }
              }
            })
            .catch(error => {
              console.log(error);
            });
        })
        .catch(error => {
          console.log(error);
        });
    },
    
    viewLocation: function(location) {
      this.$router.push('/dashboard/locations/' + location.Id);
    },
  },
  created: function() {
    if (!Vue.ls.get('token')) {
      this.$router.push('/no-access');
    }
    this.getLocations();
  }
});
