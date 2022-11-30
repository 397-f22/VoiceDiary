import { describe, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Recording from './Recording';
import MemoryRecord from './MemoryRecord';
import { useSpeechRecognition } from 'react-speech-recognition';

vi.mock('react-speech-recognition');

const mockUseSpeechRecognitionBrowserNotSupport = {
  transcript: '',
  listening: false,
  browserSupportsSpeechRecognition: false,
};

const mockUseSpeechRecognitionBrowserListeningWithTranscript = {
  transcript: 'some text',
  listening: true,
  browserSupportsSpeechRecognition: true,
};

const fakeData = [
  {
    id: 0,
    title: 'Math Notes',
    datetime: new Date('November 10, 2022 10:01:00'),
    transcript:
      "We'll start the chapter off with a fairly short discussion introducing the 3-D coordinate system and the conventions that we'll be using. We will also take a brief look at how the different coordinate systems can change the graph of an equation.",
  },
];

describe('record page tests', () => {
  it("should show the error message when the browser doesn't support speech recognition", () => {
    useSpeechRecognition.mockReturnValueOnce(
      mockUseSpeechRecognitionBrowserNotSupport
    );

    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Recording data={fakeData} />} />
        </Routes>
      </BrowserRouter>
    );

    expect(
      screen.getByText("Browser doesn't support speech recognition.")
    ).toBeDefined();
  });

  it('should save the transcript with the title and navigate to the memory record page when the stop button is clicked', () => {
    useSpeechRecognition
      .mockReturnValueOnce(
        mockUseSpeechRecognitionBrowserListeningWithTranscript
      )
      .mockReturnValueOnce(
        mockUseSpeechRecognitionBrowserListeningWithTranscript
      );

    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Recording data={fakeData} />} />
          <Route
            path="/memories/:id"
            element={<MemoryRecord data={fakeData} />}
          />
        </Routes>
      </BrowserRouter>
    );

    expect(screen.getByText('Voice Diary')).toBeDefined();
    const recordBtn = screen.getByTestId('record-btn');
    fireEvent.click(recordBtn);

    expect(screen.getByText('Untitled')).toBeDefined();
    expect(screen.getByText('Transcript')).toBeDefined();
    expect(
      screen.getByText(
        mockUseSpeechRecognitionBrowserListeningWithTranscript.transcript
      )
    ).toBeDefined();
  });
});
