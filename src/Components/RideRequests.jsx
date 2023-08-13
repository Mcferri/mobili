import React, { useState } from 'react'
import { Col, Row } from 'reactstrap'

export default function RideRequests() {
  const formData = {
    date: '',
    from: '',
    to: '',
    timeFrom: '',
    timeTo: '',
    price: '',
    carType: '',
    carName: '',
    carModel: '',
    carColor: '',
    carImage: '',
    seatsAvailable: '',
  }
  const [publishRide, setPublishRide] = useState(formData)

  const handleChange = (e) => {
    setPublishRide({ ...publishRide, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    console.log(publishRide)
  }
  return (
    <div className="p-3 mt-5">
      {/* {JSON.stringify(publishRide)} */}
      <h4 className="text-center" style={{ fontWeight: 900, fontSize: 40 }}>
       Ride requests
      </h4>
      <Row>
        <Col xl={4} lg={4} md={4} sm={12} xs={12}></Col>
        <Col xl={4} lg={4} md={4} sm={12} xs={12}></Col>
     
          
        <Col xl={4} lg={4} md={4} sm={12} xs={12}></Col>
      </Row>
    </div>
  )
}
