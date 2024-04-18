import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '@/routes/layouts/root';
import { Component as HomePage } from '@/routes/home';

const routes = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'notes',
        lazy: () => import('@/routes/notes'),
      },
      {
        path: 'users',
        lazy: () => import('@/routes/users'),
      },
    ],
  },
];

export default createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL,
});
