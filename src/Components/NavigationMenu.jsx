import React, { useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap'
import { BsBell, BsBellFill, BsPlus } from 'react-icons/bs'
import {
  AiFillBell,
  AiFillNotification,
  AiOutlineBell,
  AiOutlineUser,
} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
export default function NavigationMenu() {
  // const userId = useParams()
  const navigate = useNavigate()
  return (
    <div>
      <Row className="m-0 navbar_ shadow-sm">
        <Col lg={6} md={6} sm={6} xs={6} className="d-flex align-items-center">
          <p className="logo m-0" onClick={() => navigate('/home')}>
            Mobeelii
          </p>
        </Col>
        <Col
          lg={6}
          md={6}
          sm={6}
          xs={6}
          className="d-flex align-items-center justify-content-end"
          style={{ gap: 10 }}
        >
          {/* <BsPlus
            style={{ margin: 0 }}
            size="1rem"
            onClick={() => navigate(`/publish-ride`)}
          /> */}
          <button
            className="app_button"
            onClick={() => navigate(`/publish-ride`)}
          >
            Publish ride
          </button>
          <button
            className="app_button second_app_button"
            onClick={() => navigate(`/ride-requests`)}
          >
            Requests
          </button>
          <AiOutlineBell
            style={{ margin: 0, cursor:'pointer' }}
            size="1.6rem"

            // onClick={() => navigate(`/profile`)}
          />
          <AiOutlineUser
            style={{ margin: 0, cursor:'pointer' }}
            size="1.6rem"
            onClick={() => navigate(`/profile`)}
          />
        </Col>
      </Row>
    </div>
  )
}
