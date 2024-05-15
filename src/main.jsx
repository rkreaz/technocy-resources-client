import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Componants/Routers/Routers.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthProviders from './Componants/providers/AuthProviders.jsx';
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query';

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProviders>
          <RouterProvider router={router} />
        </AuthProviders>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
