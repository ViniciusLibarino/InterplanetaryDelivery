import {render} from '@testing-library/react-native';
import React from 'react';
import {Home} from '../../Home';

describe('Home Component', () => {
  it('should render correctly', () => {
    const {getByText} = render(<Home />);
    expect(getByText('Endereços')).toBeTruthy();
  });
});
