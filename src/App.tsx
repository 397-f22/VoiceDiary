import "./App.css";
import Recording from "./components/Recording";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Recording />} />
        <Route path="/memories" element={<div>Memories [TODO]</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
