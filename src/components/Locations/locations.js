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

      var options = { headers: {
        'Authorization': Vue.ls.get('token')
      } };

      axios.get(API_BASE + '/locations', options)
        .then(response => {
          for (let location of response.data) {
            location.NodeCount = 0;
            this.locations.push(location);
          }

          axios.get(API_BASE + '/nodes', options)
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
          console.log(this.locations[0]);
        })
        .catch(error => {
          console.log(error);
        });
    },
    
    viewLocation: function(location) {
      this.$router.push('/dashboard/locations/' + location.Id);
    },

    deleteLocation: function(location) {
      axios.delete(API_BASE + '/locations/' + location.Id, { headers: {
        'Authorization': Vue.ls.get('token')
      } })
        .then(response => {
          console.log(response);
          this.getLocations();
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created: function() {
    if (!Vue.ls.get('token')) {
      this.$router.push('/no-access');
    }
    this.getLocations();
  }
});
