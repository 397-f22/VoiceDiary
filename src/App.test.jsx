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
const mockUseSpeechRecognitionBrowserNotSupport = {
  transcript: '',
  listening: false,
  browserSupportsSpeechRecognition: false,
};

describe('record page tests', () => {
  it("should show the error message if the browser doesn't support speech recognition", () => {
    useSpeechRecognition.mockReturnValueOnce(
      mockUseSpeechRecognitionBrowserNotSupport
    );

    render(<App />);

    expect(
      screen.getByText("Browser doesn't support speech recognition.")
    ).toBeDefined();
  });

  it('should show the landing page', () => {
    useSpeechRecognition
      .mockReturnValueOnce(mockUseSpeechRecognitionBrowserSupport)
      .mockReturnValueOnce(mockUseSpeechRecognitionBrowserSupport);

    render(<App />);

    expect(screen.getByText('Voice Diary')).toBeDefined();
    expect(screen.getByText('Record')).toBeDefined();
    expect(screen.getByText('Memories')).toBeDefined();
  });
});

describe('memories page tests', () => {
  it('should redirect to the memories page', () => {
    useSpeechRecognition
      .mockReturnValueOnce(mockUseSpeechRecognitionBrowserSupport)
      .mockReturnValueOnce(mockUseSpeechRecognitionBrowserSupport);

    render(<App />);
    const memoriesButton = screen.getByText('Memories');
    fireEvent.click(memoriesButton);

    expect(screen.getByText('Voice Diary')).toBeDefined();
    expect(screen.getByText('Mon')).toBeDefined();
    expect(screen.getByText('Tue')).toBeDefined();
    expect(screen.getByText('Wed')).toBeDefined();
    expect(screen.getByText('Thu')).toBeDefined();
    expect(screen.getByText('Fri')).toBeDefined();
    expect(screen.getByText('Sat')).toBeDefined();
    expect(screen.getByText('Sun')).toBeDefined();
  });
});
