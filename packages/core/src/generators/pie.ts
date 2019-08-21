import { Path, PieChartData } from '..';

export class PieChartGenerator {
  private data: PieChartData[];
  private total = 0;

  constructor(data: PieChartData[]) {
    this.data = data;

    // Calculate the total value by adding up all data points
    this.total = this.data.reduce((total, curr) => total + curr.value, 0);
  }

  public getPathData(): string[] {
    let cumPercent = 0;

    return this.data.map(data => {
      const normalized = this.normalizeValue(data.value);

      const start = this.valueToCoordinates(cumPercent);
      cumPercent += normalized;
      const end = this.valueToCoordinates(cumPercent);

      return Path.create()
        .move(start.x, start.y)
        .arc(1, 1, 0, end.x, end.y, normalized > 0.5, true)
        .line(0, 0)
        .close()
        .build();
    });
  }

  private normalizeValue(value: number): number {
    return value / this.total;
  }

  private valueToCoordinates(value: number): { x: number; y: number } {
    // We subtract 0.25 to make it start at (0, 1) instead of (1, 0)
    const x = Math.cos(2 * Math.PI * (value - 0.25));
    const y = Math.sin(2 * Math.PI * (value - 0.25));

    return { x, y };
  }
}
