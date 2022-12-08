import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Recording from './Recording';
import MemoryRecord from './MemoryRecord';
import { useSpeechRecognition } from 'react-speech-recognition';
import Memories from "./Memories"
import App from '../App'

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

describe('memories page tests', () => {

  it('should show calendar when the page is rendered ', () => {
    useSpeechRecognition
      .mockReturnValueOnce(
        mockUseSpeechRecognitionBrowserListeningWithTranscript
      )
      .mockReturnValueOnce(
        mockUseSpeechRecognitionBrowserListeningWithTranscript
      );

    render(
      <App/>
    );

    expect(screen.getByText('Voice Diary')).toBeDefined();
    const memoriesBtn = screen.getByTestId('memories-btn')
    fireEvent.click(memoriesBtn)
    expect(screen.getByText(/December 2022/i)).toBeDefined();

  });


  it('should show nothing rendered on the current date', () => {
    useSpeechRecognition
      .mockReturnValueOnce(
        mockUseSpeechRecognitionBrowserListeningWithTranscript
      )
      .mockReturnValueOnce(
        mockUseSpeechRecognitionBrowserListeningWithTranscript
      );

    render(
      <App/>
    );

    expect(screen.getByText('Voice Diary')).toBeDefined();
    const memoriesBtn = screen.getByTestId('memories-btn')
    fireEvent.click(memoriesBtn)
    expect(screen.getByText(/You did not record any entries on this date!/i)).toBeDefined();

  });

  it('shows the transcript', () => {
    useSpeechRecognition
      .mockReturnValueOnce(
        mockUseSpeechRecognitionBrowserListeningWithTranscript
      )
      .mockReturnValueOnce(
        mockUseSpeechRecognitionBrowserListeningWithTranscript
      );

    render(
      <App/>
    );

    const transcript = screen.queryByText(/"some text"/i);
    expect(transcript).toBeDefined();

  }); 

  it('should show date rendered on the current date', () => {
    useSpeechRecognition
      .mockReturnValueOnce(
        mockUseSpeechRecognitionBrowserListeningWithTranscript
      )
      .mockReturnValueOnce(
        mockUseSpeechRecognitionBrowserListeningWithTranscript
      );

    render(
      <App/>
    );

    expect(screen.getByText('Voice Diary')).toBeDefined();
    const datetime = screen.queryByText(/"November 10, 2022 10:01:00"/i);
    expect(datetime).toBeDefined();

  });

});
