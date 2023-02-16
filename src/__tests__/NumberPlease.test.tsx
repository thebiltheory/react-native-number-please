import React from 'react';
import { render } from '@testing-library/react-native';
import NumberPlease from '../NumberPlease';

describe('Picker', () => {
  test('should render a clean snapshot', () => {
    const pizzas = { pizza: 0 };
    const pizzaNumbers = [{ id: 'pizza', label: '🍕', min: 0, max: 99 }];

    const { toJSON } = render(
      <NumberPlease
        pickers={pizzaNumbers}
        values={pizzas}
        onChange={(values: any) => console.log(values)}
      />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
