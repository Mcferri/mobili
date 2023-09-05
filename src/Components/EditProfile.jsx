import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess, restoreUserFromLocalStorage } from "../redux/actions";
import moment from "moment";
import { api } from "../helper/apis";
import { Col, Row } from "reactstrap";
import axios from "axios";
import { useQuery } from "../helpers/helpers";
export default function EditProfile() {
  const query = useQuery();
  const name = query.get(`name`);
  const email = query.get(`email`);
  const phone = query.get(`phone`);
  const formData = {
    name: name,
    email: email,
    // about: "",
    phone: phone,
  };
  const [userData, setUserData] = useState(formData);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const loggedInUser = useSelector((state) => state?.auth?.user);
  const dispatch = useDispatch();

  useEffect(() => {
    // Check localStorage for user data
    const userData = JSON.parse(localStorage.getItem("access_token"));
    if (userData) {
      // Dispatch loginSuccess action to restore user data
      const { email, access_token, token_type, name, user_id } = userData;
      dispatch(loginSuccess(email, access_token, token_type, name, user_id));
    }
  }, [dispatch]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(userData);
    setLoading(true);
    try {
      axios
        .put(`${api}/auth/users/${loggedInUser?.user_id}/update`, userData)
        .then((response) => {
          setLoading(false);
          if (response.error) {
            alert(error);
          } else {
            navigate("/profile");
            console.log(response);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-3 mt-5">
      {/* {JSON.stringify(loggedInUser)} */}
      <h4
        className="text-center page_title"
        style={{ fontWeight: 900, fontSize: 40 }}
      >
        Edit profile
      </h4>
      <Row>
        {/* {JSON.stringify(userData)} */}
        <Col xl={4} lg={4} md={4} sm={12} xs={12}></Col>
        <Col xl={4} lg={4} md={4} sm={12} xs={12}>
          <Row>
            <Col md={12} className="mt-3">
              <label className="label">Name</label>
              <input
                className="input_field"
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChange}
                required
              />
            </Col>
            <Col md={12} className="mt-3">
              <label className="label">Email</label>
              <input
                className="input_field"
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                required
              />
            </Col>
            <Col md={12} className="mt-3">
              <label className="label">Phone</label>
              <input
                className="input_field"
                type="tel"
                name="phone"
                value={userData.phone}
                onChange={handleChange}
                required
              />
            </Col>
            <Col md={12} className="mt-3">
              <label className="label">About</label>
              <textarea
                name="about"
                className="input_field"
                id=""
                // value={userData.about}
                // onChange={handleChange}
                cols="20"
                rows="5"
              ></textarea>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="m-0 text-center mt-3">
        {loading ? (
          <button className="app_button" disabled>
            Saving...
          </button>
        ) : (
          <button
            className="app_button"
            onClick={handleSubmit}
            //   style={{ padding: "20px 40px" }}
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
}
