import { describe, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { useSpeechRecognition } from 'react-speech-recognition';

vi.mock('react-speech-recognition');

const mockUseSpeechRecognitionBrowserSupport = {
  transcript: '',
  listening: false,
  browserSupportsSpeechRecognition: true,
};

describe('landing page tests', () => {
  it('should show the record page as the landing page', () => {
    useSpeechRecognition
      .mockReturnValueOnce(mockUseSpeechRecognitionBrowserSupport)
      .mockReturnValueOnce(mockUseSpeechRecognitionBrowserSupport);

    render(<App />);

    expect(screen.getByText('Voice Diary')).toBeDefined();
    expect(screen.getByText('Record')).toBeDefined();
    expect(screen.getByText('Memories')).toBeDefined();
  });
});
