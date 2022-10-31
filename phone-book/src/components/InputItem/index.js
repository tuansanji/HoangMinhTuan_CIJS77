import React, { Children, useEffect } from "react";
import "./style.css";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

function InputItem(props) {
  const [user, setUser] = useState({
    name: "",
    phone: "",
  });
  const [addEdit, setAddEdit] = useState("ADD");

  const nameRef = useRef();
  const phoneRef = useRef();

  const handleNameValue = (e) => {
    setUser({
      ...user,
      name: e.target.value,
    });
  };

  const handlePhoneValue = (e) => {
    setUser({
      ...user,
      phone: e.target.value,
    });
  };
  const handleAddUser = () => {
    if (addEdit === "ADD") {
      if (user) {
        let newUser = {
          id: uuidv4(),
          name: user.name,
          numberPhone: user.phone,
          isDeleted: false,
        };
        props.handleAddList(newUser);
        setUser({
          name: "",
          phone: "",
        });
        nameRef.current.focus();
      }
    } else if (addEdit === "EDIT") {
      if (user) {
        let newUser = {
          id: uuidv4(),
          name: user.name,
          numberPhone: user.phone,
          isDeleted: false,
        };
        let index = props.editIndex;
        props.handleEditList(newUser, index);
        setUser({
          name: "",
          phone: "",
        });
        nameRef.current.focus();
        setAddEdit("ADD");
      }
    }
  };
  useEffect(() => {
    if (props.edit) {
      nameRef.current.focus();
      setUser({
        name: props.userEdit.name,
        phone: props.userEdit.numberPhone,
      });
      setAddEdit("EDIT");
    }
  }, [props.isEdit]);

  return (
    <div className="header">
      <input
        ref={nameRef}
        value={user.name}
        onChange={handleNameValue}
        className="mr-1 flex-1"
        type="text"
        placeholder="Tên"
      />
      <input
        ref={phoneRef}
        value={user.phone}
        onChange={handlePhoneValue}
        className="mr-1"
        type="text"
        placeholder="Điện thoại"
      />
      <button onClick={handleAddUser}>{addEdit}</button>
    </div>
  );
}

export default InputItem;
