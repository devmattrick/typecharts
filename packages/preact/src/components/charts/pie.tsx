import { Component, ComponentChild, h } from 'preact';

import { PieChartGenerator, PieChartData, PieChartOptions } from '@typecharts/core';

export interface PieChartProps {
  data?: PieChartData;
  options?: PieChartOptions;
}

export class PieChart extends Component<PieChartProps> {
  public render({ data, options }): ComponentChild {
    const generator = new PieChartGenerator(data);

    return (
      <svg viewBox="-1 -1 2 2">
        {generator.getPathData().map((path, index) => (
          <path
            key={index}
            d={path}
            style={{ fill: options.colors ? options.colors[index % options.colors.length] : '#333' }}
          />
        ))}
      </svg>
    );
  }
}
