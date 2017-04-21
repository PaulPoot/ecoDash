import Home from 'components/Home/home';
import Dashboard from 'components/Dashboard/dashboard';
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
    path: '/no-access',
    component: NoAccess
  },
  {
    path: '*',
    component: NotFound
  }
];

export default routes;
