import React from "react";
//https://res.cloudinary.com/dx5ilizca/image/upload/v1692800347/profile_epnaqt.png
import { Col, Row } from "reactstrap";
import { MdArrowForwardIos } from "react-icons/md";
import { BsShieldFillCheck } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
function RiderProfile() {
  const navigate = useNavigate();

  return (
    <div className="p-3 mt-5">
      <Row className="mt-4">
        <Col md={3}></Col>
        <Col md={6} className="">
          <div className="d-flex align-item-center justify-content-between">
            <div>
              <h5 className="m-0">Yasir Yakasai</h5>
              <p>29 y/o</p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dx5ilizca/image/upload/v1692800347/profile_epnaqt.png"
                className="result profile"
                alt="profile_pic"
                style={{ width: 70 }}
              />
            </div>
          </div>
          <div className="d-flex mt-4 align-item-center justify-content-between">
            <div>
              <p>5/5 - 1 rating</p>
            </div>
            <div>
              <MdArrowForwardIos
                size="1.2rem"
                className="arrow text-secondary"
              />
            </div>
          </div>
          <hr className="hr" />
          <div className="mt-3">
            <span className="text-secondary">
              <BsShieldFillCheck
                color="#0d6efd"
                size="1.3rem"
                className="m-0"
              />{" "}
              Confirmed email
            </span>
          </div>
          <div className="mt-3">
            <span className="text-secondary">
              <BsShieldFillCheck
                color="#0d6efd"
                size="1.3rem"
                className="m-0"
              />{" "}
              Confirmed phone number
            </span>
          </div>
          <div className="mt-3 divider"></div>
          <div className="mt-3">
            <h6 className="m-0">About Yasir</h6>
            <p className="small"> I'm chatty when I feel comfortable</p>
          </div>
          <div className="mt-3 mb-3 divider"></div>
          <p>2 rides published</p>
          <p>Member since February 2010</p>
          <div className="mt-3 divider"></div>
          <p
            className="report_text mt-3"
            onClick={() => navigate("/report-ride")}
          >
            Report Ride
          </p>
        </Col>
        <Col md={3}></Col>
      </Row>
    </div>
  );
}

export default RiderProfile;
