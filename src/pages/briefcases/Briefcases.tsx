import { Card } from 'primereact/card';
import { PageTitle } from '../../components/PageTitle';
import { Link } from 'react-router-dom';
import routes, { RouteList } from '../../routes';

const Briefcases = () => {
  return (
    <Card>
      <PageTitle title="Briefcase list" />
      <Link to={routes[RouteList.BRIEFCASE_CREATE].path}>Create new briefcase</Link>
    </Card>
  );
};

export default Briefcases;
