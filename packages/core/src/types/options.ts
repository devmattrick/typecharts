export interface ChartOptions {
  colors?: string[];
}

export interface PieChartOptions extends ChartOptions {
  donut?: boolean | number;
}
