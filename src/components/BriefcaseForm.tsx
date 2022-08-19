import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { BriefcaseStatus } from '../core/intrfaces/briefcase.interface';

export const BriefcaseForm = () => {
  return (
    <form className="p-fluid">
      <div className="formgrid grid">
        <div className="field md:col-10">
          <label htmlFor="inputName" className="col-12 mb-2 md:col-2 md:mb-0">
            Name
          </label>
          <div className="col-12 md:col-10">
            <InputText id="inputName" />
            {/*{apiErrors?.code === 422 && <small className="p-error">{apiErrors.details?.name}</small>}*/}
            {/*{errors.name && <small className="p-error">{errors.name.message}</small>}*/}
          </div>
        </div>

        <div className="field md:col-2">
          <label htmlFor="inputStatus" className="col-12 mb-2 md:col-2 md:mb-0">
            Status
          </label>
          <div className="col-12 md:col-10">
            <Dropdown
              id="inputStatus"
              options={[
                { label: 'Active', value: BriefcaseStatus.ACTIVE },
                { label: 'Inactive', value: BriefcaseStatus.INACTIVE },
                { label: 'Deleted', value: BriefcaseStatus.DELETED },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="field grid">
        <label htmlFor="inputDescription" className="col-12 mb-2 md:col-2 md:mb-0">
          Description
        </label>
        <div className="col-12 md:col-10">
          <InputTextarea id="inputDescription" />
        </div>
      </div>

      <div className="field grid">
        <div className="md:col-offset-2 md:col-2">
          <Button type="submit" color="primary" label="Save" />
        </div>
      </div>
    </form>
  );
};
