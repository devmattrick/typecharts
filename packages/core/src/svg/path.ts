/**
 * This class simplifies the creation of SVG Path instructions.
 */
export class Path {
  private instructions: string[] = [];

  /* eslint-disable-next-line @typescript-eslint/no-empty-function */
  private constructor() {}

  public static create(): Path {
    return new Path();
  }

  public move(x: number, y: number): Path {
    this.instructions.push(`M ${x},${y}`);
    return this;
  }

  public line(x: number, y: number): Path {
    this.instructions.push(`L ${x},${y}`);
    return this;
  }

  public curve(c1X: number, c1Y: number, c2X: number, c2Y: number, eX: number, eY: number): Path {
    this.instructions.push(`C ${c1X},${c1Y} ${c2X},${c2Y} ${eX},${eY}`);
    return this;
  }

  public quadradic(cX: number, cY: number, eX: number, eY: number): Path {
    this.instructions.push(`Q ${cX},${cY} ${eX},${eY}`);
    return this;
  }

  public arc(rX: number, rY: number, rotation: number, eX: number, eY: number, arc = false, sweep = false): Path {
    this.instructions.push(`A ${rX},${rY} ${rotation} ${arc ? 1 : 0} ${sweep ? 1 : 0} ${eX},${eY}`);
    return this;
  }

  public close(): Path {
    this.instructions.push('Z');
    return this;
  }

  public build(): string {
    return this.instructions.join(' ');
  }
}
