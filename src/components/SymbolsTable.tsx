import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { SymbolPropsType } from '../core/types/symbol-props.type';

export const SymbolsTable = ({ symbols }: SymbolPropsType) => {
  return (
    <DataTable value={symbols}>
      <Column field="briefcase" header="Briefcase" />
      <Column field="ticker" header="Ticker" />
      <Column field="entryPrice" header="Entry price" />
      <Column field="quantity" header="Quantity" />
      <Column field="balance" header="Balance sheet" />
      <Column field="price" header="Price" />
      <Column field="part" header="Part" />
    </DataTable>
  );
};
