import { useState, memo, useCallback, useEffect } from "react";
import "./footer.css";
function Footer({ onLanguege }) {
  const [language, setLanguage] = useState("vie");
  const handleChange = (e) => {
    setLanguage(e.target.value);
  };
  useEffect(() => {
    onLanguege(language);
  }, [language]);
  return (
    <div className="footer">
      <select onChange={handleChange}>
        <option value="vie">Việt Nam</option>
        <option value="en">English</option>
      </select>
    </div>
  );
}
export default memo(Footer);
