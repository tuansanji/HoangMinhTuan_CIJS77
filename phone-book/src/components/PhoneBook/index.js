import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import InputItem from "../InputItem";
import PhoneItem from "../PhoneItem";
import "./style.css";

function PhoneBook(props) {
  const [dl, setdl] = useState(false);
  const [edit, setEdit] = useState(false);
  const [userEdit, setUserEdit] = useState("");
  const [editIndex, setEditIndex] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const [phoneList, setPhoneList] = useState([
    {
      id: uuidv4(),
      name: "Alice",
      numberPhone: "(816)-403-5456",
      isDeleted: false,
    },
    {
      id: uuidv4(),
      name: "Bob",
      numberPhone: "(572)-566-5456",
      isDeleted: false,
    },
    {
      id: uuidv4(),
      name: "Kaylin",
      numberPhone: "(572)-566-5456",
      isDeleted: false,
    },
  ]);
  const [searchAndDelete, setSearch] = useState("");
  //xử lí khi thêm người dùng
  const handleAddList = (item) => {
    setPhoneList([...phoneList, item]);
  };
  const handleEditList = (user, index) => {
    phoneList[index] = user;
    let newList = phoneList;
    setPhoneList(newList);
    setEdit(false);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  // xử lí khi xóa người dùng
  const handleDeleteUser = (index) => {
    let newlist = [...phoneList];
    let itemDelete = newlist.splice(index, 1);
    if (itemDelete) {
      itemDelete[0].isDeleted = true;
    }
    let newListPhone = newlist.filter((item) => !item.isDeleted);
    setdl(!dl);
    setTimeout(() => {
      setPhoneList(newListPhone);
    }, 1700);
  };
  // xử lí khi nháy vào nút edit
  const handleEditUser = (user, index) => {
    setEdit(true);
    setIsEdit(!isEdit);
    setUserEdit(user);
    setEditIndex(index);
    return user;
  };
  // xử lí thêm dữ liệu vào ô input

  // xử lí xóa trùng lặp
  const handleDeleteDuplicates = () => {
    let newlist = phoneList.filter((item1, index1) => {
      return (
        index1 ===
        phoneList.findIndex((item2) => {
          return item1.numberPhone === item2.numberPhone;
        })
      );
    });
    setPhoneList(newlist);
  };
  return (
    <div className="phone-book-container">
      <InputItem
        isEdit={isEdit}
        edit={edit}
        userEdit={userEdit}
        editIndex={editIndex}
        handleAddList={handleAddList}
        handleEditUser={handleEditUser}
        handleEditList={handleEditList}
      />
      <div className="search-bar mt-1">
        <input
          value={searchAndDelete}
          className="mr-1 flex-1"
          type="text"
          placeholder="Tìm kiếm"
          onChange={handleSearch}
        />
        <button className="mr-1">TÌM KIẾM</button>
        <button onClick={handleDeleteDuplicates}>XÓA TRÙNG</button>
      </div>
      <div className="phone-list mt-1">
        {phoneList
          .filter(
            (item) =>
              item.name.toUpperCase().includes(searchAndDelete.toUpperCase()) ||
              item.numberPhone
                .toUpperCase()
                .includes(searchAndDelete.toUpperCase())
          )
          .map((item, index) => {
            return (
              <PhoneItem
                editIndex={editIndex}
                handleEditUser={handleEditUser}
                index={index}
                handleDeleteUser={handleDeleteUser}
                isDeleted={item.isDeleted}
                key={item.id}
                name={item.name}
                numberPhone={item.numberPhone}
              />
            );
          })}
      </div>
    </div>
  );
}

export default PhoneBook;
