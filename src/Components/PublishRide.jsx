import React, { useState } from "react";
import { Col, Row } from "reactstrap";

export default function PublishRide() {
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

  //handle function
  const handleChange = (e) => {
    setPublishRide({ ...publishRide, [e.target.name]: e.target.value });
  };

  //handle submit
  const handleSubmit = () => {
    console.log(publishRide);
  };
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
          <Row>
            <Col md={6} className="mt-3">
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
              <label className="label">When's the passenger pickup time?</label>
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
              <button className="app_button auth" onClick={handleSubmit}>
                Publish
              </button>
            </div>
          </Row>
        </Col>
        <Col xl={4} lg={4} md={4} sm={12} xs={12}></Col>
      </Row>
    </div>
  );
}
