import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ChildrenProps } from '../core/types/children-props.type';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const Providers = ({ children }: ChildrenProps) => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>{children}</BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
