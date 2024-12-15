import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Header from "./components/Header";

function App() {
  const [language, setLanguage] = useState("en"); // Default language is English

  return (
    <Router>
      <Header language={language} setLanguage={setLanguage} />
      <Routes>
        <Route path="/" element={<Page1 language={language} />} />
        <Route path="/page2" element={<Page2 language={language} />} />
        <Route path="/page3" element={<Page3 language={language} />} />
      </Routes>
    </Router>
  );
}

export default App;
