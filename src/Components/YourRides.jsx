import React, { useEffect } from "react";
import { Card, Col, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";
import icon from "../assets/images/path.png";
export default function YourRides() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate("/auth");
    }
  }, []);
  return (
    <div className="p-3 mt-5">
      <h4
        className="text-center page_title"
        style={{ fontWeight: 900, fontSize: 40 }}
      >
        Your rides
      </h4>
      <Row className="">
        <Col md={3}></Col>
        <Col md={6}>
          <Card
            className="mb-3 results_card shadow-sm p-3"
            onClick={() => navigate("/ride-details")}
          >
            <Row>
              <Col md={6} sm={8} xs={8}>
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
              </Col>
              <Col md={6} sm={4} xs={4}>
                <p className="rides_avail" style={{ float: "right" }}>
                  NGN 5,000
                </p>
              </Col>
            </Row>
          </Card>{" "}
        </Col>
        <Col md={3}></Col>
      </Row>
    </div>
  );
}
