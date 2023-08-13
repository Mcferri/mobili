import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Card, Col, Container, Row } from "reactstrap";
import profile from "../assets/images/profile.png";
import { useNavigate, useParams } from "react-router-dom";
import icon from "../assets/images/path.png";
import { AiFillStar } from "react-icons/ai";
import { MdArrowForwardIos } from "react-icons/md";
import { useQuery } from "../helpers/helpers";
export default function WriteReport() {
  const navigate = useNavigate();
  const query = useQuery();

  const type = query.get("report_type");
  const [reportData, setReportData] = useState("");

  return (
    <div className="p-3 mt-5">
      <h4 className="text-center" style={{ fontWeight: 900, fontSize: 40 }}>
        Tell us more?
      </h4>
      <Row>
        <Col md={4}></Col>
        <Col md={4}>
          <div className="mt-4">
            <div style={{ display: "flex", flexDirection: "column" }}>
              {type !== "Other" ? (
                <p className="m-0" style={{ fontWeight: "" }}>
                  {type}
                </p>
              ) : (
                ""
              )}

              <textarea
                className="input_field textarea_"
                name=""
                onChange={(e) => setReportData(e.target.value)}
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <div className="mt-4 text-center">
                {reportData && (
                  <button className="app_button">Send Report</button>
                )}
              </div>
            </div>
          </div>
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  );
}
