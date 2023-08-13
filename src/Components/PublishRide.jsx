import React, { useState } from "react";
import { Col, Row } from "reactstrap";

export default function PublishRide() {
  const formData = {
    date: "",
    from: "",
    to: "",
    timeFrom: "",
    timeTo: "",
    price: "",
    carType: "",
    carName: "",
    carModel: "",
    carColor: "",
    carImage: "",
    seatsAvailable: "",
  };
  const [publishRide, setPublishRide] = useState(formData);

  const handleChange = (e) => {
    setPublishRide({ ...publishRide, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(publishRide);
  };
  return (
    <div className="p-3 mt-5">
      {/* {JSON.stringify(publishRide)} */}
      <h4 className="text-center" style={{ fontWeight: 900, fontSize: 40 }}>
        Publish ride
      </h4>
      <Row>
        <Col xl={4} lg={4} md={4} sm={12} xs={12}></Col>
        <Col xl={4} lg={4} md={4} sm={12} xs={12}>
          <Row>
            <Col md={6} className="mt-3">
              <label className="label">Date</label>
              <input
                className="input_field"
                type="date"
                name="date"
                value={publishRide.date}
                onChange={handleChange}
              />
            </Col>
            <Col md={6} className="mt-3">
              <label className="label">From</label>
              <input
                className="input_field"
                type="text"
                name="from"
                value={publishRide.from}
                onChange={handleChange}
              />
            </Col>
            <Col md={6} className="mt-3">
              <label className="label">To</label>
              <input
                className="input_field"
                type="text"
                name="to"
                value={publishRide.to}
                onChange={handleChange}
              />
            </Col>
            <Col md={6} className="mt-3">
              <label className="label">Time From</label>
              <input
                className="input_field"
                type="time"
                name="timeFrom"
                value={publishRide.timeFrom}
                onChange={handleChange}
              />
            </Col>
            <Col md={6} className="mt-3">
              <label className="label">Time To</label>
              <input
                className="input_field"
                type="time"
                name="timeTo"
                value={publishRide.timeTo}
                onChange={handleChange}
              />
            </Col>
            <Col md={6} className="mt-3">
              <label className="label">Price</label>
              <input
                className="input_field"
                type="number"
                name="price"
                value={publishRide.price}
                onChange={handleChange}
              />
            </Col>
            <Col md={6} className="mt-3">
              <label className="label">Car Type</label>
              <select
                className="input_field"
                name="carType"
                value={publishRide.carType}
                onChange={handleChange}
              >
                <option>select car type</option>
                <option>Sedan</option>
                <option>SUV</option>
                <option>Bus</option>
              </select>
            </Col>
            <Col md={6} className="mt-3">
              <label className="label">Car Name</label>
              <input
                className="input_field"
                type="text"
                name="carName"
                value={publishRide.carName}
                onChange={handleChange}
              />
            </Col>

            <Col md={6} className="mt-3">
              <label className="label">Car Model</label>
              <input
                className="input_field"
                type="text"
                name="carModel"
                value={publishRide.carModel}
                onChange={handleChange}
              />
            </Col>
            <Col md={6} className="mt-3">
              <label className="label">Car Color</label>
              <input
                className="input_field"
                type="text"
                name="carColor"
                value={publishRide.carColor}
                onChange={handleChange}
              />
            </Col>
            <Col md={6} className="mt-3">
              <label className="label">Car Image</label>
              <input
                className="input_field"
                type="text"
                name="carImage"
                value={publishRide.carImage}
                onChange={handleChange}
              />
            </Col>
            <Col md={6} className="mt-3">
              <label className="label">Available Seats</label>
              <input
                className="input_field"
                type="number"
                name="seatsAvailable"
                value={publishRide.seatsAvailable}
                onChange={handleChange}
              />
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
