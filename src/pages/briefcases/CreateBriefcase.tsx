import { Card } from 'primereact/card';
import { PageTitle } from '../../components/PageTitle';
import { BriefcaseForm } from '../../components/BriefcaseForm';

const CreateBriefcase = () => {
  return (
    <Card>
      <PageTitle title="Create new briefcase" />
      <BriefcaseForm />
    </Card>
  );
};

export default CreateBriefcase;
