import React, { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Card, Col, Row } from "reactstrap";
import profile from "../assets/images/profile.png";
import { useNavigate } from "react-router-dom";
import icon from "../assets/images/path.png";
import { AiFillStar } from "react-icons/ai";
export default function SearchResults() {
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
        Available rides
      </h4>
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <div className="mt-3">
            <p className="results_date">Fri, 21 Jul</p>
            <p className="from_to">
              Kano, Nigeria <BsArrowRight size="1.5rem" /> Jigawa, Nigeria
            </p>
            <div className="rides-avail-div mb-3">
              <p className="rides_avail m-0">5 rides available</p>
            </div>
          </div>{" "}
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
            <Row className="mt-3">
              <Col md={6}>
                <div className="d-flex align-items-center" style={{ gap: 10 }}>
                  <img
                    src={profile}
                    className="result profile"
                    alt="profile_pic"
                  />{" "}
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <p
                      className="m-0"
                      style={{ fontWeight: "bold" }}
                    >
                      Mike John{" "}
                    </p>
                    <span
                      style={{
                        color: "",
                        fontWeight: "normal",
                      }}
                    >
                      <AiFillStar color="grey" size="1rem" className="m-0" />{" "}
                      5.0
                    </span>
                  </div>
                </div>
              </Col>
              <Col md={6}></Col>
            </Row>
          </Card>{" "}
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
            <Row className="mt-3">
              <Col md={6}>
                <div className="d-flex align-items-center" style={{ gap: 10 }}>
                  <img
                    src={profile}
                    className="result profile"
                    alt="profile_pic"
                  />{" "}
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <p
                      className="m-0"
                      style={{ fontWeight: "bold" }}
                    >
                      Mike John{" "}
                    </p>
                    <span
                      style={{
                        color: "",
                        fontWeight: "normal",
                      }}
                    >
                      <AiFillStar color="grey" size="1rem" className="m-0" />{" "}
                      5.0
                    </span>
                  </div>
                </div>
              </Col>
              <Col md={6}></Col>
            </Row>
          </Card>{" "}<Card
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
            <Row className="mt-3">
              <Col md={6}>
                <div className="d-flex align-items-center" style={{ gap: 10 }}>
                  <img
                    src={profile}
                    className="result profile"
                    alt="profile_pic"
                  />{" "}
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <p
                      className="m-0"
                      style={{ fontWeight: "bold" }}
                    >
                      Mike John{" "}
                    </p>
                    <span
                      style={{
                        color: "",
                        fontWeight: "normal",
                      }}
                    >
                      <AiFillStar color="grey" size="1rem" className="m-0" />{" "}
                      5.0
                    </span>
                  </div>
                </div>
              </Col>
              <Col md={6}></Col>
            </Row>
          </Card>{" "}<Card
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
            <Row className="mt-3">
              <Col md={6}>
                <div className="d-flex align-items-center" style={{ gap: 10 }}>
                  <img
                    src={profile}
                    className="result profile"
                    alt="profile_pic"
                  />{" "}
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <p
                      className="m-0"
                      style={{ fontWeight: "bold" }}
                    >
                      Mike John{" "}
                    </p>
                    <span
                      style={{
                        color: "",
                        fontWeight: "normal",
                      }}
                    >
                      <AiFillStar color="grey" size="1rem" className="m-0" />{" "}
                      5.0
                    </span>
                  </div>
                </div>
              </Col>
              <Col md={6}></Col>
            </Row>
          </Card>{" "}<Card
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
            <Row className="mt-3">
              <Col md={6}>
                <div className="d-flex align-items-center" style={{ gap: 10 }}>
                  <img
                    src={profile}
                    className="result profile"
                    alt="profile_pic"
                  />{" "}
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <p
                      className="m-0"
                      style={{ fontWeight: "bold" }}
                    >
                      Mike John{" "}
                    </p>
                    <span
                      style={{
                        color: "",
                        fontWeight: "normal",
                      }}
                    >
                      <AiFillStar color="grey" size="1rem" className="m-0" />{" "}
                      5.0
                    </span>
                  </div>
                </div>
              </Col>
              <Col md={6}></Col>
            </Row>
          </Card>{" "}<Card
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
            <Row className="mt-3">
              <Col md={6}>
                <div className="d-flex align-items-center" style={{ gap: 10 }}>
                  <img
                    src={profile}
                    className="result profile"
                    alt="profile_pic"
                  />{" "}
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <p
                      className="m-0"
                      style={{ fontWeight: "bold" }}
                    >
                      Mike John{" "}
                    </p>
                    <span
                      style={{
                        color: "",
                        fontWeight: "normal",
                      }}
                    >
                      <AiFillStar color="grey" size="1rem" className="m-0" />{" "}
                      5.0
                    </span>
                  </div>
                </div>
              </Col>
              <Col md={6}></Col>
            </Row>
          </Card>{" "}<Card
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
            <Row className="mt-3">
              <Col md={6}>
                <div className="d-flex align-items-center" style={{ gap: 10 }}>
                  <img
                    src={profile}
                    className="result profile"
                    alt="profile_pic"
                  />{" "}
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <p
                      className="m-0"
                      style={{ fontWeight: "bold" }}
                    >
                      Mike John{" "}
                    </p>
                    <span
                      style={{
                        color: "",
                        fontWeight: "normal",
                      }}
                    >
                      <AiFillStar color="grey" size="1rem" className="m-0" />{" "}
                      5.0
                    </span>
                  </div>
                </div>
              </Col>
              <Col md={6}></Col>
            </Row>
          </Card>{" "}
        </Col>
        <Col md={3}></Col>
      </Row>
    </div>
  );
}
