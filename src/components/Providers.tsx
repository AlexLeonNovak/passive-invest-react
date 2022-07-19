import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ChildrenProps } from '../core/types/children-props.type';

export const Providers = ({ children }: ChildrenProps) => (
  <React.StrictMode>
    <BrowserRouter>{children}</BrowserRouter>
  </React.StrictMode>
);
