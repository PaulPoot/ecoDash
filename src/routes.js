import Home from 'components/Home/home';
import Dashboard from 'components/Dashboard/dashboard';
import Locations from 'components/Locations/locations';
import Nodes from 'components/Nodes/nodes';
import Sensors from 'components/sensors/sensors';
import NoAccess from 'components/NoAccess/noAccess';
import NotFound from 'components/NotFound/notFound';

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
    component: Nodes
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
