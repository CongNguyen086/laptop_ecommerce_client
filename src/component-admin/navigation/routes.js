import React from 'react';

const Users = React.lazy(() => import('../components/User'));
const Products = React.lazy(() => import('../components/Product'));
const CreateProductForm = React.lazy(() => import('../components/CreateProductForm'));
const ProductDetail = React.lazy(() => import('../components/ProductDetail'));
const UserDetail = React.lazy(() => import('../components/UserDetail'));

const routes = [
      {
        path: '/admin/users/:id',
        component: UserDetail,
        exact: false,
        auth: false,
        pageTitle: 'Aware Laptop',
      },
      {
        path: '/admin/users',
        component: Users,
        exact: false,
        auth: false,
        pageTitle: 'Aware Laptop',
      },
      {
        path: '/admin/products/create',
        component: CreateProductForm,
        exact: true,
        auth: false,
        pageTitle: 'Aware Laptop',
      },
      {
        path: '/admin/products/:id',
        component: ProductDetail,
        exact: true,
        auth: false,
        pageTitle: 'Aware Laptop',
      },
      {
        path: '/admin/products',
        component: Products,
        exact: false,
        auth: false,
        pageTitle: 'Aware Laptop',
      },
];

export default routes;
