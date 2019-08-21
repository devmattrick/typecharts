import { Path } from '../';

export class PieChartGenerator {
  private data: PieChartData[];
  private total = 0;

  constructor(data: (PieChartData | number)[]) {
    // Sanitize provided data
    this.data = data.map((value: PieChartData | number, index: number) => {
      if (typeof value === 'number') {
        this.total += value;

        return {
          label: `${index}`,
          value,
        };
      }

      this.total += value.value;
      return value;
    });
  }

  public getPathData(): PieChartPathData[] {
    let cumPercent = 0;

    return this.data.map(data => {
      const normalized = this.normalizeValue(data.value);

      const start = this.valueToCoordinates(normalized);
      cumPercent += normalized;
      const end = this.valueToCoordinates(cumPercent);

      const d = Path.create()
        .move(start.x, start.y)
        .arc(1, 1, -90, end.x, end.y, normalized > 0.5, true)
        .line(0, 0)
        .build();

      return {
        d,
        fill: data.color ? data.color : '#000', // TODO: #000 is a placeholder for a generated color
      };
    });
  }

  private normalizeValue(value: number): number {
    return (value * this.total) / 100;
  }

  private valueToCoordinates(value: number): { x: number; y: number } {
    const x = Math.cos(2 * Math.PI * value);
    const y = Math.sin(2 * Math.PI * value);

    return { x, y };
  }
}

export interface PieChartPathData {
  d: string;
  fill: string;
}

export interface PieChartData {
  label: string;
  value: number;
  color?: string;
}
