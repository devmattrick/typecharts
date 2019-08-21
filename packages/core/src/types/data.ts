export interface ChartData {
  label?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
}

export interface PieChartData extends ChartData {
  value: number;
}

export type BarChartData = BarChartDataPoint | BarChartDataPoint[];

export interface BarChartDataPoint extends ChartData {
  value: number | Date;
}

export type LineChartData = LineChartDataPoint | LineChartDataPoint[];

export interface LineChartDataPoint extends ChartData {
  value: Pair<number | Date | string, number | Date | string>;
}

export type ScatterChartData = ScatterChartDataPoint | ScatterChartDataPoint[];

export interface ScatterChartDataPoint extends ChartData {
  value: Pair<number | Date | string, number | Date | string>;
}

export interface Pair<X, Y> {
  x: X;
  y: Y;
}
