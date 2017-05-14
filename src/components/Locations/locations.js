import Vue from 'vue';
import template from './locations.html';
import axios from 'axios';
import { API_BASE, MAPS_KEY } from 'src/config/constants';
import Navigation from '../Navigation/navigation';
import LocationsAdd from '../LocationsAdd/locationsAdd';

export default Vue.extend({
  template,
  components: {
    Navigation,
    LocationsAdd,
  },
  data: function() {
    return {
      dataRows: [],
    };
  },
  methods: {
    getLocations: function() {
      axios.get(API_BASE + '/locations', {
        headers: {
          'Authorization': Vue.ls.get('token')
        } })
        .then(response => {
          var counter = 1;
          var currentRow = 0;
          for (var i = 0; i < response.data.length; i++) {
            if (counter === 1) {
              this.dataRows.push([]);
            }
            this.dataRows[currentRow].push(response.data[i]);
            if (counter === 3) {
              currentRow++;
              counter = 1;
            } else {
              counter++;
            }
          }
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
