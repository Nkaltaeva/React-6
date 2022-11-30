import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import { App } from './App';

describe('App', () => {
  it('wrong url', () => {
    render(
      <MemoryRouter initialEntries={['/wrong-url']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('404 page')).toBeInTheDocument();
  });
});