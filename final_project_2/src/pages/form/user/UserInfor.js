import React from "react";
import { useSelector, useDispatch } from "react-redux";

import formSlice from "../formSlice";
import { formSelector } from "../../.././redux/selector";
import "./userInfor.scss";
function UserInfor() {
  const userCurrent = useSelector(formSelector).userCurrent;
  const dispatch = useDispatch();
  const handleChangeProfile = (e) => {
    // đang mặc định chỉ thay đổi ảnh thôi(k làm kịp mấy cái kia)

    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    dispatch(formSlice.actions.editProfile(file.preview));
  };
  return (
    <div className="container emp-profile">
      <form method="post">
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img">
              <img src={userCurrent.thumb.preview} alt="" />
              <div className="file btn btn-lg btn-primary edit__user-img">
                Change Photo
                <input
                  type="file"
                  name="file"
                  onChange={(e) => {
                    handleChangeProfile(e);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="profile-head">
              <h5>Vinsmoke Sanji</h5>
              <h6>Web Developer and Designer</h6>
              <p className="proile-rating">
                RANKINGS : <span>8/10</span>
              </p>
              {/* <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Timeline
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
          <div className="col-md-2">
            <input
              type="submit"
              className="profile-edit-btn"
              name="btnAddMore"
              value="Edit Profile"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="profile-work">
              <p>WORK LINK</p>
              <a href="">Website Link</a>
              <br />
              <a href="">Bootsnipp Profile</a>
              <br />
              <a href="">Bootply Profile</a>
              <p>SKILLS</p>
              <a href="">Web Designer</a>
              <br />
              <a href="">Web Developer</a>
              <br />
              <a href="">WordPress</a>
              <br />
              <a href="">WooCommerce</a>
              <br />
              <a href="">PHP, .Net</a>
              <br />
            </div>
          </div>
          <div className="col-md-8 tab-infor">
            <div className="tab-content profile-tab" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row">
                  <div className="col-md-6">
                    <label>User Id :</label>
                  </div>
                  <div className="col-md-6">
                    <p>{userCurrent.id}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Name :</label>
                  </div>
                  <div className="col-md-6">
                    <p>{userCurrent.username}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Email :</label>
                  </div>
                  <div className="col-md-6">
                    <p>{userCurrent.email}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Phone :</label>
                  </div>
                  <div className="col-md-6">
                    <p>0968763453</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Profession :</label>
                  </div>
                  <div className="col-md-6">
                    <p>Pirate</p>
                  </div>
                </div>
              </div>
              {/* <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="row">
                  <div className="col-md-6">
                    <label>Experience</label>
                  </div>
                  <div className="col-md-6">
                    <p>Expert</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Hourly Rate</label>
                  </div>
                  <div className="col-md-6">
                    <p>10$/hr</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Total Projects</label>
                  </div>
                  <div className="col-md-6">
                    <p>230</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>English Level</label>
                  </div>
                  <div className="col-md-6">
                    <p>Expert</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Availability</label>
                  </div>
                  <div className="col-md-6">
                    <p>6 months</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <label>Your Bio</label>
                    <br />
                    <p>Your detail description</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserInfor;
