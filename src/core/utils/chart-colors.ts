import { ChartColorsInterface } from '../intrfaces/chart-data.interface';

export const cssVar = (name: string) => getComputedStyle(document.documentElement).getPropertyValue(name);

export const chartColors: ChartColorsInterface[] = [
  { backgroundColor: cssVar('--blue-600'), hoverBackgroundColor: cssVar('--blue-400') },
  { backgroundColor: cssVar('--green-600'), hoverBackgroundColor: cssVar('--green-400') },
  { backgroundColor: cssVar('--yellow-600'), hoverBackgroundColor: cssVar('--yellow-400') },
  { backgroundColor: cssVar('--cyan-600'), hoverBackgroundColor: cssVar('--cyan-400') },
  { backgroundColor: cssVar('--pink-600'), hoverBackgroundColor: cssVar('--pink-400') },
  { backgroundColor: cssVar('--indigo-600'), hoverBackgroundColor: cssVar('--indigo-400') },
  { backgroundColor: cssVar('--teal-600'), hoverBackgroundColor: cssVar('--teal-400') },
  { backgroundColor: cssVar('--orange-600'), hoverBackgroundColor: cssVar('--orange-400') },
  { backgroundColor: cssVar('--purple-600'), hoverBackgroundColor: cssVar('--purple-400') },
  { backgroundColor: cssVar('--primary-600'), hoverBackgroundColor: cssVar('--primary-400') },
  { backgroundColor: cssVar('--red-600'), hoverBackgroundColor: cssVar('--red-400') },
];
