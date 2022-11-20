import "regenerator-runtime";
import { createSpeechlySpeechRecognition } from "@speechly/speech-recognition-polyfill";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import NavBar from "./NavBar";
import { MemoryEntryType } from "../types/memory";
import { useEffect, useState } from "react";
import clsx from "clsx";

const appId = "aa184f20-21ba-415b-acd1-956e43e43beb";
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

interface RecordingProps {
  data: MemoryEntryType[];
}

const Recording = ({ data }: RecordingProps) => {
  const [entry, setEntry] = useState({
    id: 3,
    title: "",
    datetime: new Date(),
    transcript: "",
  });
  const [title, setTitle] = useState("");
  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  useEffect(() => {
    setEntry({ ...entry, title, transcript });
  }, [title, transcript]);

  const stopListening = () => {
    SpeechRecognition.stopListening();
    data.push(entry);
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  console.log(entry);
  return (
    <>
      <NavBar />
      <div className="grid place-content-center">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
          className="border border-black rounded-md text-center py-2 px-6 font-serif"
          placeholder="Title"
        />
        <p className="font-serif">{transcript}</p>
        <button
          className={clsx(
            "w-8 h-8 bg-red-500 border border-black",
            !listening && "rounded-full"
          )}
          onClick={() => (listening ? stopListening() : startListening())}
        />
      </div>
    </>
  );
};
export default Recording;
