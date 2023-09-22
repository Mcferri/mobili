import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Col, Row, Modal } from "reactstrap";
import { api } from "../helper/apis";
import { useNavigate } from "react-router-dom";

export default function PublishRide() {
  const [modal, setModal] = useState(false);
  const formData = {
    date: "",
    from: "",
    to: "",
    time: "",
    price: "",
    gender: "",
    seatsAvailable: "",
  };
  const [publishRide, setPublishRide] = useState(formData);
  const [loading, setLoading] = useState(false);
  const loggedInUser = useSelector((state) => state?.auth?.user);
  const userData = JSON.parse(localStorage.getItem("access_token"));
  const xtoken = userData?.access_token;
  const navigate = useNavigate();
  const handleModal = () => {
    setModal(!modal);
  };
  const handleChange = (e) => {
    setPublishRide({ ...publishRide, [e.target.name]: e.target.value });
  };

  //handle submit
  const handleSubmit = () => {
    console.log(publishRide);
  };

  useEffect(() => {
    if (xtoken) {
      setLoading(true);
      axios
        .get(`${api}/cars/check/user/cars`, {
          headers: {
            "x-token": xtoken,
          },
        })
        .then((response) => {
          console.log(response.data.status);
          if (response.data.status === false) {
            // navigate("/signup-message");
            handleModal();
          }
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.log("error fetching data", err);
        });
    }
  }, []);

  return (
    <div className="p-3 mt-5">
      <h4
        className="text-center page_title"
        style={{ fontWeight: 900, fontSize: 40 }}
      >
        Publish ride
      </h4>
      <Row>
        <Col xl={4} lg={4} md={4} sm={12} xs={12}></Col>
        <Col xl={4} lg={4} md={4} sm={12} xs={12}>
          {loading ? (
            <div className="text-center">
              <span className="">Loading data...</span>
            </div>
          ) : (
            <Row>
              <Col md={6} className="mt-3">
                {/* {JSON.stringify(xtoken)}
                {JSON.stringify(loggedInUser)} */}
                <label className="label">When are you leaving?</label>
                <input
                  className="input_field"
                  type="date"
                  name="date"
                  value={publishRide.date}
                  onChange={handleChange}
                />
              </Col>
              <Col md={6} className="mt-3">
                <label className="label">
                  When's the passenger pickup time?
                </label>
                <input
                  className="input_field"
                  type="time"
                  name="timeFrom"
                  value={publishRide.timeFrom}
                  onChange={handleChange}
                />
              </Col>
              <Col md={6} className="mt-3">
                <label className="label">Leaving from</label>
                <input
                  className="input_field"
                  type="text"
                  name="from"
                  value={publishRide.from}
                  onChange={handleChange}
                />
              </Col>
              <Col md={6} className="mt-3">
                <label className="label">Going to</label>
                <input
                  className="input_field"
                  type="text"
                  name="to"
                  value={publishRide.to}
                  onChange={handleChange}
                />
              </Col>
              <Col md={6} className="mt-3">
                <label className="label">Exact meeting point</label>
                <input
                  className="input_field"
                  type="text"
                  name="to"
                  value={publishRide.to}
                  onChange={handleChange}
                />
              </Col>
              <Col md={6} className="mt-3">
                <label className="label">Exact drop-off point</label>
                <input
                  className="input_field"
                  type="text"
                  name="to"
                  value={publishRide.to}
                  onChange={handleChange}
                />
              </Col>
              <Col md={6} className="mt-3">
                <label className="label">Select your gender</label>
                <select
                  className="input_field"
                  name="gender"
                  value={publishRide.gender}
                  onChange={handleChange}
                >
                  <option>--gender--</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </Col>
              <Col md={6} className="mt-3">
                <label className="label">Price per seat</label>
                <input
                  className="input_field"
                  type="number"
                  name="price"
                  value={publishRide.price}
                  onChange={handleChange}
                />
              </Col>
              <Col md={6} className="mt-3">
                <label className="label">Number of Seats</label>
                <input
                  className="input_field"
                  type="number"
                  name="seatsAvailable"
                  value={publishRide.seatsAvailable}
                  onChange={handleChange}
                />
              </Col>
              <Col md={6} className="mt-3">
                <label className="label">Select a car</label>
                <select
                  className="input_field"
                  name="gender"
                  value={publishRide.gender}
                  onChange={handleChange}
                >
                  <option>--car--</option>
                  <option>Mercedes</option>
                  <option>Honda</option>
                </select>
              </Col>
              <div className="mt-3">
                <button className="app_button auth p-3" onClick={handleSubmit}>
                  Publish
                </button>
              </div>
            </Row>
          )}
        </Col>
        <Col xl={4} lg={4} md={4} sm={12} xs={12}></Col>
      </Row>
      <Modal isOpen={modal}>
        <div className="p-3 text-center">
          <p>You don't have registered car(s) yet</p>
          <button
            className="app_button"
            onClick={() => navigate("/create-new-car")}
          >
            Create one here
          </button>
        </div>
      </Modal>
    </div>
  );
}
