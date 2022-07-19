import { PrimeIcons } from 'primereact/api';
import { Button } from 'primereact/button';

const AppHeader = () => {
  // const dispatch = useDispatch()
  // const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <div className="header flex flex-row mb-4">
      <div className="logo">Passive invest</div>
      <Button className="btn-header p-link">
        <i className={PrimeIcons.BARS} />
      </Button>
      <ul className="right-menu">
        <i className={PrimeIcons.USER} />
      </ul>
    </div>
  );
};

export default AppHeader;
