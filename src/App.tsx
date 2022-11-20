import "./App.css";
import Recording from "./components/Recording";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Memories from "./components/Memories";
import { MemoryEntryType } from "./types/memory";

const fakeData: MemoryEntryType[] = [
  { id: 0, title: "Math Notes", datetime: new Date(), transcript: "" },
  { id: 1, title: "Shopping List", datetime: new Date(), transcript: "" },
  { id: 2, title: "Vacation Diary", datetime: new Date(), transcript: "" },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Recording data={fakeData} />} />
        <Route
          path="/memories"
          element={<Memories memoryEntries={fakeData} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
