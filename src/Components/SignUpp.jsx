import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { login, signup } from "../redux/actions";

export default function SignUpp() {
  const loggedInUser = useSelector((state) => state?.auth?.user);
  const [loading, setLoading] = useState(false);

  const [tab, setTab] = useState(true);
  const navigate = useNavigate();
  const switchTab = () => {
    setTab(!tab);
  };
  const dispatch = useDispatch();
  const [_email, _setEmail] = useState("");
  const [_password, _setPassword] = useState("");

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);
    try {
      await dispatch(login(_email, _password));
      if (loggedInUser || localStorage.getItem("access_token")) {
        setLoading(false);
        navigate("/"); // Navigate to home page on successful login
      } else {
        setLoading(false);
        setErrorMessage("Incorrect username or password"); // Set error message for incorrect login
      }
    } catch (error) {
      setLoading(false);
      if (error.response && error.response.data && error.response.data.detail) {
        setErrorMessage(error.response.data.detail); // Set error message from API response
      } else {
        console.error("Login failed:", error);
      }
    }
  };

  const handleSignup = async (e) => {
    setLoading(true);
    e.preventDefault();
    await dispatch(signup(email, name, phone, password));
    if (loggedInUser || localStorage.getItem("access_token" && "user_data")) {
      setLoading(false);
      navigate("/");
    }
  };

  return (
    <div>
      <Row className="m-0 mt-5">
        <Col xl={4} lg={4} md={4} sm={12} xs={12}></Col>
        <Col xl={4} lg={4} md={4} sm={12} xs={12}>
          <h4 className="" style={{ fontWeight: 900, fontSize: 40 }}>
            Mobeelii
          </h4>
          <div className="d-flex justify-content-between" style={{ gap: 30 }}>
            <button
              className={tab ? "app_button" : "app_button_second"}
              onClick={switchTab}
            >
              Login
            </button>
            <button
              className={!tab ? "app_button" : "app_button_second"}
              onClick={switchTab}
            >
              Register
            </button>
          </div>
          {tab ? (
            <form onSubmit={handleLogin}>
              {/* {JSON.stringify(email + password)} */}
              <div className="mt-3">
                <label className="label" htmlFor="email">
                  Email
                </label>
                <input
                  className="input_field"
                  id="email"
                  required
                  type="email"
                  value={_email}
                  onChange={(e) => _setEmail(e.target.value)}
                />
              </div>
              <div className="mt-3">
                <label className="label" htmlFor="password">
                  Password
                </label>
                <input
                  className="input_field"
                  id="password"
                  required
                  type="password"
                  value={_password}
                  onChange={(e) => _setPassword(e.target.value)}
                />
              </div>
              {errorMessage && (
                <p style={{ color: "red", fontSize: 13 }}>{errorMessage}</p>
              )}

              <div
                className="d-flex justify-content-between mt-3"
                style={{ fontSize: 13 }}
              >
                <p className="m-0">
                  <input type="checkbox" /> Remember me
                </p>
                <p className="forgot_p m-0">Forgot Password</p>
              </div>
              {!loading ? (
                <button className="app_button auth mt-3">Sign In</button>
              ) : (
                <button className="app_button auth mt-3">Loading...</button>
              )}
            </form>
          ) : (
            <form onSubmit={handleSignup}>
              {/* {JSON.stringify(email + name + phone + password)} */}
              <div className="mt-3">
                <label className="label" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  className="input_field"
                  id="fullName"
                  required
                  type="text"
                  minLength={3}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mt-3">
                <label className="label" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="input_field"
                  id="phone"
                  required
                  type="tel"
                  minLength={9}
                  // pattern="[0-9]{10}"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="mt-3">
                <label className="label" htmlFor="email">
                  Email
                </label>
                <input
                  className="input_field"
                  id="email"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>{" "}
              <div className="mt-3">
                <label className="label" htmlFor="password">
                  Password
                </label>
                <input
                  className="input_field"
                  id="password"
                  required
                  minLength={5}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mt-3">
                <p className="forgot_p m-0">
                  <input type="checkbox" /> I have read and agree to the terms
                </p>
              </div>
              {!loading ? (
                <button className="app_button auth mt-3">Sign Up</button>
              ) : (
                <button className="app_button auth mt-3">Loading...</button>
              )}
            </form>
          )}
        </Col>
        <Col xl={3} lg={3} md={3} sm={12} xs={12}></Col>
      </Row>
    </div>
  );
}
