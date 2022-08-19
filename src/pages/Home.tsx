import { Card } from 'primereact/card';
import { SymbolsTable } from '../components/SymbolsTable';
import { SymbolsChart } from '../components/SymbolsChart';

const Home = () => {
  const symbols = [
    {
      briefcase: 'Main',
      ticker: 'VOO',
      name: 'Vanguard S&P 500 Index Fund ETF Share',
      entryPrice: 335.0,
      quantity: 1,
      balance: 335.0,
      price: 362,
      part: 20,
    },
    {
      briefcase: 'Main',
      ticker: 'VT',
      name: 'Vanguard Total World Stock Index Fund ETF Shares\n',
      entryPrice: 84.97,
      quantity: 2,
      balance: 169.94,
      price: 87.99,
      part: 35,
    },
  ];

  return (
    <Card>
      <h1>Home page</h1>
      <SymbolsTable symbols={symbols} />
      <SymbolsChart symbols={symbols} />
    </Card>
  );
};

export default Home;
