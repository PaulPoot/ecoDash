import Home from 'components/home/home';
import Dashboard from 'components/dashboard/dashboard';
import Locations from 'components/locations/locations';
import LocationSingle from 'components/locations/locationSingle/locationSingle';
import Sensors from 'components/sensors/sensors';
import NoAccess from 'components/noAccess/noAccess';
import NotFound from 'components/notFound/notFound';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/dashboard/locations',
    component: Locations
  },
  {
    path: '/dashboard/locations/:id',
    component: LocationSingle
  },
  {
    path: '/dashboard/nodes/:nodeid',
    component: Sensors
  },
  {
    path: '/no-access',
    component: NoAccess
  },
  {
    path: '*',
    component: NotFound
  }
];

export default routes;
