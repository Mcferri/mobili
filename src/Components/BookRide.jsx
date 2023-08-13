import React from "react";
import { BsArrowRight, BsShieldFillCheck } from "react-icons/bs";
import { Card, Col, Row } from "reactstrap";
import icon from "../assets/images/path.png";
import profile from "../assets/images/profile.png";
import { AiFillCar, AiFillStar } from "react-icons/ai";
import { MdArrowForwardIos, MdAddCall } from "react-icons/md";
import { useNavigate } from "react-router-dom";
// import {IoMdCall} from 'react-icons/io'
export default function BookRide() {
  const navigate = useNavigate();
  return (
    <div className="p-3 mt-5">
      {/* {JSON.stringify(publishRide)} */}
      <h4 className="text-center" style={{ fontWeight: 900, fontSize: 40 }}>
        Review and book
      </h4>
      <Row>
        <Col md={3}></Col>
        <Col md={6} className="mt-4">
          <p className="rides_avail">Tue, 15 August at 12:00</p>
          <div className="d-flex" style={{ gap: 10 }}>
            {/* <div>
              <p className="rides_avail">12:00 AM</p>
              <p className="rides_avail">12:30 AM</p>
            </div> */}
            <div>
              <img src={icon} style={{ width: 13 }} />
            </div>
            <div>
              <p className="rides_avail">Kano</p>
              <p className="rides_avail">Jigawa</p>
            </div>
          </div>
          <div className="divider"></div>
          <div className="d-flex justify-content-between align-items-center mt-3 mb-3">
            <p className="m-0" style={{ fontSize: 13 }}>
              Total price for 2 passengers
            </p>
            <p className="m-0 rides_avail">NGN 30,000</p>
          </div>

          <div className="mt-5 text-center">
            <button
              className="app_button"
              onClick={() => navigate("/payment-method")}
            >
              Pay NGN30,000
            </button>
          </div>
        </Col>
        <Col md={3}></Col>
      </Row>
    </div>
  );
}
