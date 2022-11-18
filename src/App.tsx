import "./App.css";
import Recording from "./components/Recording";

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Recording/>} />
    <Route path="/diaryList" element={<div></div>} />
  </Routes>
  </BrowserRouter>)
}
  



export default App;
