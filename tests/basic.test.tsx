import { expect, it } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import { useState } from 'react';
import { sum1 } from '../src/index';

it('test1', () => {
  expect(true).toBe(true);
});

it('test2', () => {
  expect(sum1(2, 2)).toBe(4);
});

it('test3', async () => {
  const countObj = {
    count: 0,
    render: 0,
  };

  function TestComponent() {
    const [count, setCount] = useState(countObj.count);
    countObj.count = count;

    countObj.render++;

    return <button onClick={() => setCount((s) => s + 1)}>button</button>;
  }

  const { getByText } = render(<TestComponent />);

  fireEvent.click(getByText('button'));

  expect(countObj.count).toBe(1);
  expect(countObj.render).toBe(2);
});
