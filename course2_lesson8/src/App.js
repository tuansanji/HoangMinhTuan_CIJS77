import { useState } from "react";

import Nav from "./component/nav/nav";
import Content from "./component/content/conten";
import Footer from "./component/footer/footer";
import "./App.css";

function App() {
  const [inforUser, setInforUser] = useState("");
  const [login, setLogin] = useState(true);
  const [content, setContent] = useState(true);
  const [languageContent, setLanguageContent] = useState("vie");
  const handleInforUser = (user) => {
    setInforUser(user);
    setLogin(!login);
    setContent(!content);
  };
  const handleLanguege = (e) => {
    setLanguageContent(e);
  };
  return (
    <div className="App">
      <Nav
        languageContent={languageContent}
        inforUser={inforUser}
        login={login}
      />
      <Content
        languageContent={languageContent}
        content={content}
        handleInforUser={handleInforUser}
      />
      <Footer onLanguege={handleLanguege} />
    </div>
  );
}

export default App;
