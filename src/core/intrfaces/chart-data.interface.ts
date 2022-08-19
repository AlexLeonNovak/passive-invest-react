export interface ChartDataInterface {
  labels: string[];
  datasets: DatasetInterface[];
}

export interface DatasetInterface {
  data: number[];
  backgroundColor: string[];
  hoverBackgroundColor: string[];
}

export interface ChartColorsInterface {
  backgroundColor: string;
  hoverBackgroundColor: string;
}
