import React from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';

export const Loader = () => (
  <div className="bg-gray-100 min-h-screen flex flex-row align-items-center justify-content-center">
    <div className="container">
      <div className="row justify-content-center">
        <ProgressSpinner strokeWidth="8" />
      </div>
    </div>
  </div>
);
