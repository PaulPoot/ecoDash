import Home from 'components/Home/home';
import Locations from 'components/Locations/locations';
import LocationSingle from 'components/Locations/locationSingle/locationSingle';
import NodeSingle from 'components/Nodes/NodeSingle/nodeSingle';
import SensorSingle from 'components/Sensors/SensorSingle/sensorSingle';
import NoAccess from 'components/NoAccess/noAccess';
import NotFound from 'components/NotFound/notFound';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/dashboard',
    component: Locations
  },
  {
    path: '/dashboard/locations',
    component: Locations
  },
  {
    path: '/dashboard/locations/:locationid',
    component: LocationSingle
  },
  {
    path: '/dashboard/locations/:locationid/:nodeid',
    component: NodeSingle
  },
  {
    path: '/dashboard/locations/:locationid/:nodeid/:sensorid',
    component: SensorSingle
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
