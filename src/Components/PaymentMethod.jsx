import React from "react";
import { BsArrowRight, BsShieldFillCheck } from "react-icons/bs";
import { Card, Col, Row } from "reactstrap";
import icon from "../assets/images/path.png";
import profile from "../assets/images/profile.png";
import { AiFillCar, AiFillStar } from "react-icons/ai";
import { MdArrowForwardIos, MdAddCall } from "react-icons/md";
import { useNavigate } from "react-router-dom";
// import {IoMdCall} from 'react-icons/io'
export default function RideDetails() {
  const navigate = useNavigate();
  return (
    <div className="p-3 mt-5">
      {/* {JSON.stringify(publishRide)} */}
      <h4 className="text-center" style={{ fontWeight: 900, fontSize: 40 }}>
        Enter your credit card details
      </h4>
      <Row className="mt-4">
        <Col md={3}></Col>
        <Col md={6} className="">
          <div>
            <input
              type="text"
              className="input_field"
              placeholder="Cardholder name"
            />
          </div>
          <div className="mt-3">
            <input
              type="number"
              className="input_field"
              placeholder="Card number"
            />
          </div>
          <div className="mt-3 d-flex" style={{ gap: 20 }}>
            <input type="" className="input_field" placeholder="MM/YY" />

            <input type="number" className="input_field" placeholder="CVV" />
          </div>
          <hr className="hr" />
          <div>
            <p className="small">
              Information collected by Mobili to book carpooling ride. Learn
              more about your rights and how we handle your personal data in our
              private{" "}
              <span style={{ color: "#0d6efd", fontWeight: "bold" }}>
                policy
              </span>
              .
            </p>
          </div>
          <div className="mt-3 text-center">
            <button className="app_button">Pay NGN30,000</button>
          </div>
        </Col>
        <Col md={3}></Col>
      </Row>
    </div>
  );
}
