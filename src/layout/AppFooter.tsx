import { memo } from 'react';
import { PrimeIcons } from 'primereact/api';

const AppFooter = () => (
  <div className="footer">
    <i className={PrimeIcons.USER} /> Alex Novak
  </div>
);

export default memo(AppFooter);
