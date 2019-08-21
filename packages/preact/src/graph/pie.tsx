import { Component, ComponentChild, h } from 'preact';

import { PieChartGenerator, PieChartData } from '@typecharts/core';

interface PieChartProps {
  data: PieChartData;
}

export default class PieChart extends Component<PieChartProps> {
  public render({ data }): ComponentChild {
    const generator = new PieChartGenerator(data);

    return (
      <svg>
        {generator.getPathData().map((data, index) => (
          <path key={index} {...data} />
        ))}
      </svg>
    );
  }
}
