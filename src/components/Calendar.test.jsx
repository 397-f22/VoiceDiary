import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Routes, Route } from 'react-router-dom';
import VoiceCalendar from "./Calendar";
import Recording from './Recording';
import Calendar, { CalendarTileProperties } from 'react-calendar';
import App from '../App'
import { useSpeechRecognition } from 'react-speech-recognition';
import Memories from "./Memories";

const DummyCalendar = vi.fn(); 
//vi.mock("./Calendar");
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
      datetime: new Date('December 1, 2022 10:01:00'),
      transcript:
        "We'll start the chapter off with a fairly short discussion introducing the 3-D coordinate system and the conventions that we'll be using. We will also take a brief look at how the different coordinate systems can change the graph of an equation.",
    },
];

describe('calendar component tests', () => {
    it('should highlight days with a recorded memory', () => {
        useSpeechRecognition
            .mockReturnValueOnce(mockUseSpeechRecognitionBrowserListeningWithTranscript)     
            .mockReturnValueOnce(mockUseSpeechRecognitionBrowserListeningWithTranscript);
        
        const route = '/memories/';
        render(
            <MemoryRouter initialEntries={[route]}>
                <Routes>
                  <Route path = '/memories/'
                        element={<Memories memoryEntries={fakeData} />}
                  />
                </Routes>
            </MemoryRouter>
        );
        expect(screen.findByText('/bg-active/')).toBeDefined();
    }); 
}); 