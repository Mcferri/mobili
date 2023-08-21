import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { Col, Row } from "reactstrap";
import icon from "../assets/images/path.png";
import profile from "../assets/images/profile.png";
import { AiFillCar, AiFillStar } from "react-icons/ai";
import { MdArrowForwardIos, MdAddCall } from "react-icons/md";
import { useNavigate } from "react-router-dom";
export default function RideDetails() {
  const navigate = useNavigate();
  return (
    <div className="p-3 mt-5">
      <h4 className="text-center" style={{ fontWeight: 900, fontSize: 40 }}>
        Sun, 9 July
      </h4>
      <Row className="mt-5">
        <Col md={3}></Col>
        <Col md={6} className="">
          <div className="d-flex" style={{ gap: 10 }}>
            <div>
              <p className="rides_avail">12:00 AM</p>
              <p className="rides_avail">12:30 AM</p>
            </div>
            <div>
              <img src={icon} style={{ width: 12 }} />
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
          <div className="divider"></div>
          <div>
            <Row className="mt-3">
              <Col md={12}>
                <div
                  className="d-flex align-items-center justify-content-between ride_details_user"
                  onClick={() => navigate("/rider-profile")}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <p className="m-0" style={{ fontWeight: "bold" }}>
                      Mike John{" "}
                    </p>
                    <span
                      className=""
                      style={{ color: "", fontWeight: "normal" }}
                    >
                      <AiFillStar
                        color="#0d6efd"
                        size="1.3rem"
                        className="m-0"
                      />{" "}
                      5/5 - 2 ratings
                    </span>
                  </div>
                  <div>
                    <img
                      src={profile}
                      className="result profile"
                      alt="profile_pic"
                      style={{ marginRight: 20 }}
                    />{" "}
                    <MdArrowForwardIos size="1.2rem" className="arrow" />
                  </div>
                </div>
                <div className="mt-3">
                  <span className="text-secondary">
                    <BsShieldFillCheck
                      color="#0d6efd"
                      size="1.3rem"
                      className="m-0"
                    />{" "}
                    Verified User
                  </span>
                </div>
                <hr className="hr" />
                <div className="mt-3">
                  <span className="text-secondary">
                    <MdAddCall color="#0d6efd" size="1.3rem" className="m-0" />{" "}
                    Contact Mike John
                  </span>
                </div>
                <hr className="hr" />
                <div className="mt-3">
                  <span className="">
                    <AiFillCar color="#0d6efd" size="1.3rem" className="m-0" />{" "}
                    MERCEDES E CLASS 2010 <br />{" "}
                    <span className="small text-secondary">Grey</span>
                  </span>
                </div>
                <div className="divider mt-3"></div>
                <p
                  className="report_text mt-3"
                  onClick={() => navigate("/report-ride")}
                >
                  Report Ride
                </p>
                <div className="mt-5 text-center">
                  <button
                    className="app_button"
                    onClick={() => navigate("/book-ride")}
                  >
                    Continue
                  </button>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={3}></Col>
      </Row>
    </div>
  );
}
