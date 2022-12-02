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
    transcript: "carton of eggs, milk, a kilo of flour, butter, carrots, lettuce, five onions",
  },
  {
    id: 2,
    title: "Things to remember for crypto",
    datetime: new Date("November 13, 2022 17:49:00"),
    transcript: "Public key cryptography, also known as asymmetric cryptography, uses two different but mathematically linked keys -- one public and one private. The public key can be shared with everyone, whereas the private key must be kept secret.",
  },
  {
    id: 3,
    title: "Christmas gifts",
    datetime: new Date("November 23, 2022 17:49:00"),
    transcript: "I need to get a gift for dad and mom. He probably would want something travel related so let me see if there are sales. I really have no idea what to get mom",
  },
  {
    id: 4,
    title: "Leetcode",
    datetime: new Date("November 27, 2022 17:49:00"),
    transcript: "Should probably review dynamic programming quesions and what I learned in Prof. Makarychev's class. I think the knapsack problem is good place to start",
  },
  {
    id: 5,
    title: "Embedded idea",
    datetime: new Date("November 27, 2022 17:49:00"),
    transcript: "What if we created a graduation hat that cools the user when they are outside in high heat. Grad attire is really hot in the sun so this would be cool to implement",
  },
  {
    id: 6,
    title: "Things to do over break",
    datetime: new Date("November 29, 2022 17:49:00"),
    transcript: "The new avatar movie is coming out. Maybe work on that embedded idea over break to fill up the time",
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
