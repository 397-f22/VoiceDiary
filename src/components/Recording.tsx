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
  const [initiated, setInitiated] = useState(false);

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
    setInitiated(true);
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

  console.log(initiated);
  return (
    <div className="flex flex-col w-screen h-screen  bg-gradient-to-tr from-primary to-analog-purple">
      <NavBar />
      <div className="grid grid-rows-4 place-content-center w-screen  h-full">
        <div className="row-span-3 w-screen px-8 py-10">
          {initiated ? (
            <div className=" max-h-full border w-full rounded-lg px-5 py-10 text-white bg-black bg-opacity-30  backdrop-blur-sm">
              <p className=" text-2xl">{title}</p>
              <p className=" text-lg font-serif py-4 ">{transcript}</p>
            </div>
          ) : (
            <div className="flex flex-col justify-center item-center w-full h-full">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.currentTarget.value)}
                className="py-4 border-black rounded-md text-center font-serif"
                placeholder="Title"
              />
            </div>
          )}
        </div>
        <div className="flex justify-center items-center w-full">
          <button
            className={clsx(
              "w-12 h-12 bg-red-500 border border-black",
              !listening && "rounded-full"
            )}
            onClick={() => (listening ? stopListening() : startListening())}
          />
        </div>
      </div>
    </div>
  );
};
export default Recording;
