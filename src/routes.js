import Home from 'components/Home/home';
import Dashboard from 'components/Dashboard/dashboard';
import Locations from 'components/Locations/locations';
import DashboardNodes from 'components/DashboardNodes/dashboardNodes';
import DashboardSensors from 'components/DashboardSensors/dashboardSensors';
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
    component: DashboardNodes
  },
  {
    path: '/dashboard/locations/:id/:nodeid',
    component: DashboardSensors
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
