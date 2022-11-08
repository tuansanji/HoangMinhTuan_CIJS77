import { useState, useEffect } from "react";
import "./content.css";
function Content({ content, handleInforUser, languageContent }) {
  const [user, setUser] = useState("");
  const [avatar, setAvatar] = useState();
  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);
  const handleOnChange = (e) => {
    setUser(e.target.value);
  };
  const handleLogin = () => {
    user && handleInforUser(user);
  };
  const handleLogout = () => {
    setUser("");
    handleInforUser();
  };
  const handleAvatarUser = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
    // e.target.value = null;
  };
  return (
    <div className="content">
      {content ? (
        <div className="content__form-login">
          <div className="form-login__title">
            <p>ĐĂNG NHẬP</p>
          </div>
          <div className="form-login__infor">
            <input
              type="text"
              onChange={handleOnChange}
              value={user}
              placeholder="Username ..."
              maxLength={20}
            />
            <label htmlFor="avatar">Avatar</label>
            <input id="avatar" type="file" onChange={handleAvatarUser} />
            <button onClick={handleLogin}>ĐĂNG NHẬP</button>
          </div>
        </div>
      ) : (
        <div className="content__welcome-user">
          <img src={avatar.preview} alt="" />
          <p>
            <span style={{ color: "red" }}>{user}</span> đã đăng nhập thành công
          </p>
          <button onClick={handleLogout}>ĐĂNG XUẤT</button>
        </div>
      )}
    </div>
  );
}
export default Content;
