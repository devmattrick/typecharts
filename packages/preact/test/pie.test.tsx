import anyTest, { TestInterface } from 'ava';
import { mount, ReactWrapper } from 'enzyme';
import { h } from 'preact';

import { Chart, PieChart } from '../src';

const test = anyTest as TestInterface<{ wrapper: ReactWrapper }>;

test.before(t => {
  // We need to do "as any" because of an issue with how enzyme and the preact adapter for it work.
  // See: https://github.com/preactjs/enzyme-adapter-preact-pure/issues/46

  /* eslint-disable @typescript-eslint/no-explicit-any */
  t.context.wrapper = mount((
    <Chart
      data={[{ label: 'test', value: 1 }, { label: 'test', value: 2 }, { label: 'test', value: 5 }]}
      options={{ colors: ['#f00', '#0f0', '#00f'] }}
    >
      <PieChart />
    </Chart>
  ) as any);
  /* eslint-enable @typescript-eslint/no-explicit-any */
});

test('renders svg element', t => {
  console.log(t.context.wrapper.html());
  t.pass();
});
