import Books from './components/Books';
import Categories from './components/Categories';

const routes = [
  {
    routeName: 'Books',
    routePath: '/',
    routeComponent: <Books />,
  },
  {
    routeName: 'Categories',
    routePath: '/categories',
    routeComponent: <Categories />,
  },
];

export default routes;
