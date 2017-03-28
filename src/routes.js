import Home from 'components/Home/home';
import Dashboard from 'components/Dashboard/dashboard';
import Posts from 'components/Posts/posts';
import Post from 'components/Posts/post';
import CreatePost from 'components/Posts/createPost';
import EditPost from 'components/Posts/editPost';
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
