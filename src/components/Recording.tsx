import { createSpeechlySpeechRecognition } from "@speechly/speech-recognition-polyfill";
import clsx from "clsx";
import { useEffect, useState } from "react";
import "regenerator-runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { MemoryEntryType } from "../types/memory";
import { toTwelveHourTime } from "../utilities/time";
import NavBar from "./NavBar";
import { useNavigate } from "react-router";

const appId = "aa184f20-21ba-415b-acd1-956e43e43beb";
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

interface RecordingProps {
  data: MemoryEntryType[];
}

const Recording = ({ data }: RecordingProps) => {
  const navigate = useNavigate();
  const [initiated, setInitiated] = useState(false);

  const [entry, setEntry] = useState({
    id: data[data.length - 1].id + 1 || 0,
    title: "",
    datetime: new Date(),
    transcript: "",
  });

  const [title, setTitle] = useState("");
  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const startListening = () => {
    setInitiated(true);
    SpeechRecognition.startListening({ continuous: true });
  };

  useEffect(() => {
    setEntry({ ...entry, title, transcript });
  }, [title, transcript]);

  const stopListening = () => {
    SpeechRecognition.stopListening();
    if (entry.title == "") entry.title = "Untitled";
    data.push({
      ...entry,
      title: title || "Untitled",
      transcript,
    });
    navigate(`/memories/${entry.id}`);
  };

  return (
    <div className="flex flex-col w-full h-screen">
      <NavBar />
      <div className="grid grid-rows-4 place-content-center w-screen h-full">
        <div className="row-span-3 w-screen h-full px-8 py-10">
          {initiated ? (
            <div className="h-full">
              <div className="grid grid-cols-2 items-center mx-1">
                <p className="text-xl font-graduate m-1 overflow-hidden text-ellipsis">
                  {title || "Untitled"}
                </p>
                <p className="text-xs justify-self-end">
                  {toTwelveHourTime(entry.datetime)}
                </p>
              </div>
              <div className="h-full border w-full rounded-md px-5 py-5 bg-black bg-opacity-5 backdrop-blur-sm shadow-md">
                <p className="text-lg text-black font-serif py-4">
                  {transcript}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center item-center w-full h-full gap-2">
              <input
                id="memory-title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.currentTarget.value)}
                className="transform-all duration-500 focus:scale-105 mx-2 py-3 rounded-full text-center font-serif border-2 border-t-0 border-b-0 border-x-secondary"
                placeholder="Title"
              />
              <label
                htmlFor="memory-title"
                className="text-sm text-center text-black/60 font-mono"
              >
                Give your memory a title...
              </label>
            </div>
          )}
        </div>
        <div className="flex justify-center items-center w-full">
          <button
            className={clsx(
              "transition-all duration-1000 w-12 h-12 bg-red-500",
              !listening && "rounded-3xl",
              listening && "rounded-md "
            )}
            onClick={() => (listening ? stopListening() : startListening())}
          />
        </div>
      </div>
    </div>
  );
};
export default Recording;
