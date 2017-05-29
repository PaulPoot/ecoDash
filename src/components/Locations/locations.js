import Vue from 'vue';
import template from './locations.html';
import { locationsResource, nodesResource } from '../../util/resources';
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

      locationsResource.get('/')
        .then(response => {
          for (let location of response.data) {
            location.NodeCount = 0;
            this.locations.push(location);
          }

          // Get nodes and count how many nodes every location has.
          nodesResource.get('/')
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
