import { SymbolPropsType } from '../core/types/symbol-props.type';
import { Chart } from 'primereact/chart';
import { ChartDataInterface, DatasetInterface } from '../core/intrfaces/chart-data.interface';
import { chartColors, cssVar } from '../core/utils/chart-colors';

export const SymbolsChart = ({ symbols }: SymbolPropsType) => {
  const labels: string[] = [];
  const dataset: DatasetInterface = {
    data: [],
    backgroundColor: [],
    hoverBackgroundColor: [],
  };
  symbols.map((symbol, index) => {
    labels.push(symbol.name);
    dataset.data.push(symbol.price);
    dataset.backgroundColor.push(chartColors[index].backgroundColor);
    dataset.hoverBackgroundColor.push(chartColors[index].hoverBackgroundColor);
  });
  const chartData: ChartDataInterface = {
    labels,
    datasets: [{ ...dataset }],
  };
  const lightOptions = {
    plugins: {
      legend: {
        labels: {
          color: cssVar('--text-color'),
        },
      },
    },
  };
  return <Chart type="pie" data={chartData} options={lightOptions} style={{ position: 'relative', width: '40%' }} />;
};
