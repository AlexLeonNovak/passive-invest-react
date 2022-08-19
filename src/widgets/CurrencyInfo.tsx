import { Card } from 'primereact/card';

export const CurrencyInfo = () => {
  return (
    <Card>
      <div className="left">
        <span className="ticker">VOO</span>
        <span className="name">Vangard</span>
      </div>
      <div className="right">
        <span className="current-price">$182.5</span>
        <span className="daily-gain">$182.5</span>
      </div>
    </Card>
  );
};
