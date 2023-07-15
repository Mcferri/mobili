import React, { useState } from 'react'
import { Col, Row } from 'reactstrap'

export default function SignUpp() {
  const [tab, setTab] = useState(true)
  const switchTab = () => {
    setTab(!tab)
  }
  return (
    <div>
      <Row className="m-0 mt-5">
        <Col xl={4} lg={4} md={4} sm={12} xs={12}></Col>
        <Col xl={4} lg={4} md={4} sm={12} xs={12}>
          <div className="d-flex justify-content-between" style={{ gap: 30 }}>
            <button
              className={tab ? 'app_button' : 'app_button_second'}
              onClick={switchTab}
            >
              Login
            </button>
            <button
              className={!tab ? 'app_button' : 'app_button_second'}
              onClick={switchTab}
            >
              Register
            </button>
          </div>
          {tab ? (
            <div>
              <div className="mt-3">
                <label className="label">Username or Phone</label>
                <input
                  className="input_field"
                  type="text"
                  name="''"
                  //   value={payment.''}
                  //   onChange={handleChange}
                />
              </div>
              <div className="mt-3">
                <label className="label">Password</label>
                <input
                  className="input_field"
                  type="password"
                  name="''"
                  //   value={payment.''}
                  //   onChange={handleChange}
                />
              </div>
              <div
                className="d-flex justify-content-between mt-3"
                style={{ fontSize: 13 }}
              >
                <p className="m-0">
                  <input type="checkbox" /> Remember me
                </p>
                <p className="forgot_p m-0">Forgot Password</p>
              </div>
              <button className="app_button auth mt-3">Sign In</button>
            </div>
          ) : (
            <div>
              <div className="mt-3">
                <label className="label">FullName</label>
                <input
                  className="input_field"
                  type="text"
                  name="''"
                  //   value={payment.''}
                  //   onChange={handleChange}
                />
              </div>
              <div className="mt-3">
                <label className="label">NIN</label>
                <input
                  className="input_field"
                  type="text"
                  name="''"
                  //   value={payment.''}
                  //   onChange={handleChange}
                />
              </div>
              <div className="mt-3">
                <label className="label">Phone</label>
                <input
                  className="input_field"
                  type="text"
                  name="''"
                  //   value={payment.''}
                  //   onChange={handleChange}
                />
              </div>
              <div className="mt-3">
                <label className="label">Email</label>
                <input
                  className="input_field"
                  type="text"
                  name="''"
                  //   value={payment.''}
                  //   onChange={handleChange}
                />
              </div>{' '}
              <div className="mt-3">
                <label className="label">Password</label>
                <input
                  className="input_field"
                  type="text"
                  name="''"
                  //   value={payment.''}
                  //   onChange={handleChange}
                />
              </div>
              <div className="mt-3">
                <p className="forgot_p m-0">
                  <input type="checkbox" /> I have read and agree to the terms
                </p>
              </div>
              <button className="app_button auth mt-3">Sign Up</button>
            </div>
          )}
        </Col>
        <Col xl={3} lg={3} md={3} sm={12} xs={12}></Col>
      </Row>
    </div>
  )
}
