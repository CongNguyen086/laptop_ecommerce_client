import { Redirect } from 'react-router-dom';
import Login from '../../screens/Login';
import Home from '../../screens/Home';
import CategoryProductList from '../../screens/CategoryProductList';

const RouterConfig = [
  {
    path: '/',
    component: () => <Redirect to="/homepage" />,
    exact: true,
    auth: false,
    pageTitle: 'Aware Laptop',
  },
  {
    path: '/login',
    component: Login,
    exact: true,
    auth: false,
    pageTitle: 'Aware Laptop - Login',
  },
  {
    path: '/homepage',
    component: Home,
    exact: true,
    auth: false,
    pageTitle: 'Aware Laptop - Homepage',
  },
  {
    path: '/product/:category',
    component: CategoryProductList,
    exact: true,
    auth: false,
    pageTitle: 'Aware Laptop - Product',
  },
];

export default RouterConfig;
