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
  let counterRenderCount = 0;
  let controlRenderCount = 0;

  function Counter() {
    counterRenderCount++;
    return <div>count: {counterRenderCount}</div>;
  }

  function Control() {
    const [_, setCount] = useState(0);
    controlRenderCount++;
    return <button onClick={() => setCount((s) => s + 1)}>button</button>;
  }

  const { getByText, findByText } = render(
    <>
      <Counter />
      <Control />
    </>,
  );

  fireEvent.click(getByText('button'));

  await findByText('count: 1');

  expect(counterRenderCount).toBe(1);
  expect(controlRenderCount).toBe(2);
});
