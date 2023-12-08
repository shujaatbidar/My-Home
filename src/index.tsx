import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BlogPage from './pages/BlogPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'blog',
    element: <BlogPage />,
  },
]);

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
