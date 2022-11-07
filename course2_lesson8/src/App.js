import { useState } from "react";

import Nav from "./component/nav/nav";
import Content from "./component/content/conten";
import Footer from "./component/footer/footer";
import "./App.css";

function App() {
  const [inforUser, setInforUser] = useState("");
  const [login, setLogin] = useState(true);
  const [content, setContent] = useState(true);

  const handleInforUser = (user) => {
    setInforUser(user);
    setLogin(!login);
    setContent(!content);
  };
  return (
    <div className="App">
      <Nav inforUser={inforUser} login={login} />
      <Content content={content} handleInforUser={handleInforUser} />
      <Footer />
    </div>
  );
}

export default App;
