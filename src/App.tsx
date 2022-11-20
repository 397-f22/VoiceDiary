import "./App.css";
import Recording from "./components/Recording";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Memories from "./components/Memories";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Recording />} />
        <Route
          path="/memories"
          element={
            <Memories
              memoryEntries={[
                { id: 0, title: "Math Notes", datetime: new Date() },
              ]}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
