import "./App.css";
import Recording from "./components/Recording";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Memories from "./components/Memories";
import { MemoryEntryType } from "./types/memory";
import MemoryRecord from "./components/MemoryRecord";

const fakeData: MemoryEntryType[] = [
  {
    id: 0,
    title: "Math Notes",
    datetime: new Date("November 10, 2022 10:01:00"),
    transcript:
      "We'll start the chapter off with a fairly short discussion introducing the 3-D coordinate system and the conventions that we'll be using. We will also take a brief look at how the different coordinate systems can change the graph of an equation.",
  },
  {
    id: 1,
    title: "Shopping List",
    datetime: new Date("November 19, 2022, 14:32:00"),
    transcript: "",
  },
  {
    id: 2,
    title: "Vacation Diary",
    datetime: new Date("November 13, 2022 17:49:00"),
    transcript: "",
  },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Recording data={fakeData} />} />
        <Route
          path="/memories/:id"
          element={<MemoryRecord data={fakeData} />}
        />
        <Route
          path="/memories"
          element={<Memories memoryEntries={fakeData} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
