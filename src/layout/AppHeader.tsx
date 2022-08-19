import { PrimeIcons } from 'primereact/api';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { ThemeSwitcher } from '../components/ThemeSwitcher';
import routes, { RouteList } from '../routes';

const AppHeader = () => {
  // const dispatch = useDispatch()
  // const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <div className="header flex flex-row mb-4">
      <div className="logo">
        <Link to="/">Passive invest</Link>
      </div>
      {/*<Button icon={PrimeIcons.BARS} className="m-2 p-button-rounded p-button-secondary p-button-outlined" />*/}
      <ul className="left-menu">
        <li className="left-menu-item">
          <Link to={routes[RouteList.BRIEFCASES].path}>Briefcases</Link>
        </li>
      </ul>
      <ul className="right-menu">
        <ThemeSwitcher />
        <Button icon={PrimeIcons.USER} className="m-2 p-button-rounded p-button-secondary p-button-outlined" />
      </ul>
    </div>
  );
};

export default AppHeader;
