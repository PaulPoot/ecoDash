import Home from 'components/Home/home';
import Dashboard from 'components/Dashboard/dashboard';
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
    path: '*',
    component: NotFound
  }
];

export default routes;
