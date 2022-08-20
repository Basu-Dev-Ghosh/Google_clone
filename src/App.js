import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import { searchContext } from "./Contexts/searchContext";
function App() {
  const [input, setInput] = useState("");
  return (
    <>
      <searchContext.Provider value={{ input, setInput }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </searchContext.Provider>
    </>
  );
}

export default App;
