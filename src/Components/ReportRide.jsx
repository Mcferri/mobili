import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Card, Col, Container, Row } from "reactstrap";
import profile from "../assets/images/profile.png";
import { useNavigate } from "react-router-dom";
import icon from "../assets/images/path.png";
import { AiFillStar } from "react-icons/ai";
import { MdArrowForwardIos } from "react-icons/md";
export default function ReportRide() {
  const navigate = useNavigate();
  const reportTypes = [
    {
      name: "A scam activity",
    },
    { name: " Suspicious Activity" },
    { name: "Inappropriate content" },
    { name: "Other" },
  ];
  return (
    <div className="p-3 mt-5">
      {/* {JSON.stringify(publishRide)} */}
      <h4
        className="text-center web_rep"
        style={{ fontWeight: 900, fontSize: 40 }}
      >
        What would you like to report?
      </h4>
      <h4
        className="text-center mob_rep"
        style={{ fontWeight: 900, fontSize: 40 }}
      >
        Report
      </h4>
      <Row>
        <Col md={4}></Col>
        <Col md={4}>
          {reportTypes.map((item, index) => (
            <div
              key={index}
              className="mt-4 d-flex align-items-center justify-content-between ride_details_user"
              onClick={() => navigate(`/write-report?report_type=${item.name}`)}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p className="m-0" style={{ fontWeight: "" }}>
                  {item.name}
                </p>
              </div>
              <div>
                <MdArrowForwardIos size="1.2rem" className="arrow" />
              </div>
            </div>
          ))}
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  );
}
