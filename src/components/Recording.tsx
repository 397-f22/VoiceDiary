import { useState } from 'react'
import 'regenerator-runtime'
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill'
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition'

import NavBar from './NavBar'

const appId = 'aa184f20-21ba-415b-acd1-956e43e43beb'
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId)
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition)

const Recording = () => {
  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition()
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true })

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>
  }

  return (
    <>
      <NavBar></NavBar>
      <div>
        <p>Microphone: {listening ? 'on' : 'off'}</p>
        <button
          onTouchStart={startListening}
          onMouseDown={startListening}
          onTouchEnd={SpeechRecognition.stopListening}
          onMouseUp={SpeechRecognition.stopListening}
        >
          Hold to talk
        </button>
        <p>{transcript}</p>
      </div>
    </>
  )
}
export default Recording
