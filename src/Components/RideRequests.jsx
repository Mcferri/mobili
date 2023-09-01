import React, { useEffect } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { Col, Row } from "reactstrap";
import profile from "../assets/images/profile.png";
import { useNavigate } from "react-router-dom";

export default function RideRequests() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate("/auth");
    }
  }, []);
  return (
    <div className="p-3 mt-5">
      <h4 className="text-center" style={{ fontWeight: 900, fontSize: 40 }}>
        Ride requests
      </h4>
      <Row>
        <Col xl={4} lg={4} md={4} sm={12} xs={12}></Col>
        <Col xl={4} lg={4} md={4} sm={12} xs={12}>
          <div className="mt-5">
            <div
              className="mt-3 d-flex align-items-center justify-content-between ride_details_user"
              onClick={() => navigate("/profile")}
            >
              <p className="m-0" style={{ fontWeight: "bold" }}>
                Mike John{" "}
              </p>
              <div>
                <img
                  src={profile}
                  className="result profile"
                  alt="profile_pic"
                  style={{ marginRight: 20 }}
                />{" "}
                <MdArrowForwardIos
                  size="1.2rem"
                  className="text-secondary arrow"
                />
              </div>
            </div>
          </div>
        </Col>
        <Col xl={4} lg={4} md={4} sm={12} xs={12}></Col>
      </Row>
    </div>
  );
}
