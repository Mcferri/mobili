import React from "react";
import profilePicture from "../assets/images/profile.PNG";
import { Col, Row } from "reactstrap";
function Profile() {
  return (
    <div className="p-3 mt-5">
      <h4 className="text-center" style={{ fontWeight: 900, fontSize: 40 }}>
        Profile
      </h4>
      <Row className="mt-5">
        <Col xl={3} lg={3} md={3} sm={12} xs={12}></Col>
        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
          <div
            className="d-flex align-items-center justify-content-center profile_div"
            style={{ gap: 30 }}
          >
            <div>
              <img
                src={profilePicture}
                className="profile_pic"
                alt="user_image"
              />
            </div>
            <div>
              <h3 className="m-0 fullname">Yasir Yakasai</h3>
              <p className="email">ysquareimperial@gmail.com</p>
              <p className="about">
                My name is Yasir, I am a Software Engineer with years of
                experience in Frontend Engineering
              </p>
              <div className="d-flex profile_div_button" style={{ gap: 10 }}>
                <p className="phone">+234 9018661696</p> .
                <p className="years">30 years</p> .
                <p className="date_joined">Joined July 2023</p>
              </div>
            </div>
          </div>
        </Col>
        <Col xl={3} lg={3} md={3} sm={12} xs={12}></Col>
      </Row>
    </div>
  );
}

export default Profile;
