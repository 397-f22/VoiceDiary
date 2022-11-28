import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('record page tests', () => {
  it('should render the landing page', () => {
    render(<App />);
    // expect(screen.getByText('Voice Diary')).toBeDefined();
  });
});
