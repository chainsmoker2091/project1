import React from "react";
import "./Header.css";

function Header({ language, setLanguage }) {
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="header-container">
      <h1>Fukushima Animal Story</h1> {/* Fixed title */}
      <div className="language-buttons">
        <button onClick={() => handleLanguageChange("en")}>English</button>
        <button onClick={() => handleLanguageChange("ko")}>한국어</button>
        <button onClick={() => handleLanguageChange("jp")}>日本語</button>
      </div>
    </div>
  );
}

export default Header;
