import { cloneElement, Component, ComponentChild, h } from 'preact';
import { ChartData, ChartOptions } from '@typecharts/core';

export interface ChartProps {
  data: ChartData[];
  options?: ChartOptions;
}

export class Chart extends Component<ChartProps> {
  public static defaultProps = {
    data: [],
    options: {},
  };

  public render({ children, data, options }): ComponentChild {
    // If there's only one child, convert to an array with on element
    if (!Array.isArray(children)) children = [children];

    return <div class="typechart">{children.map(child => cloneElement(child, { data, options }))}</div>;
  }
}
