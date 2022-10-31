import React, { Children, useState } from "react";
import "./style.css";
import { v4 as uuidv4 } from "uuid";

function PhoneItem(props) {
  const [colorEdit, setColorEdit] = useState();

  const deleteUser = () => {
    props.handleDeleteUser(props.index);
  };

  const editUser = () => {
    let user = {
      id: uuidv4(),
      name: props.name,
      numberPhone: props.numberPhone,
      isDeleted: false,
    };
    const index = props.index;
    setColorEdit(index);
    props.handleEditUser(user, index);
  };
  return (
    <div
      index={props.index}
      className={`phone-item ${
        props.editIndex === colorEdit ? "bg-yellow" : ""
      } ${props.isDeleted ? "bg-red" : ""}`}
    >
      <span className="username flex-1">{props.name}</span>
      <span className="phone-number">{props.numberPhone}</span>
      <button className="btn btn-delete" onClick={deleteUser}>
        Delete
      </button>
      <button className="btn btn-edit" onClick={editUser}>
        Edit
      </button>
    </div>
  );
}

export default PhoneItem;
