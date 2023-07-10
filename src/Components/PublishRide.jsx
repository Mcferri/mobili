import React, { useState } from 'react'

export default function PublishRide() {
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
    <div className="p-3">
      {/* {JSON.stringify(publishRide)} */}
      <h4>Publish Ride</h4>
      <div>
        <label className="label">Date</label>
        <input
          className="input_field"
          type="date"
          name="date"
          value={publishRide.date}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="label">From</label>
        <input
          className="input_field"
          type="text"
          name="from"
          value={publishRide.from}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="label">To</label>
        <input
          className="input_field"
          type="text"
          name="to"
          value={publishRide.to}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="label">Time From</label>
        <input
          className="input_field"
          type="time"
          name="timeFrom"
          value={publishRide.timeFrom}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="label">Time To</label>
        <input
          className="input_field"
          type="time"
          name="timeTo"
          value={publishRide.timeTo}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="label">Price</label>
        <input
          className="input_field"
          type="number"
          name="price"
          value={publishRide.price}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="label">Car Type</label>
        <select
          className="input_field"
          name="carType"
          value={publishRide.carType}
          onChange={handleChange}
        >
          <option>select car type</option>
          <option>Sedan</option>
          <option>SUV</option>
          <option>Bus</option>
        </select>
      </div>
      <div>
        <label className="label">Car Name</label>
        <input
          className="input_field"
          type="text"
          name="carName"
          value={publishRide.carName}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="label">Car Model</label>
        <input
          className="input_field"
          type="text"
          name="carModel"
          value={publishRide.carModel}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="label">Car Color</label>
        <input
          className="input_field"
          type="text"
          name="carColor"
          value={publishRide.carColor}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="label">Available Seats</label>
        <input
          className="input_field"
          type="number"
          name="seatsAvailable"
          value={publishRide.seatsAvailable}
          onChange={handleChange}
        />
      </div>
      <button className="app_button" onClick={handleSubmit}>
        Publish
      </button>
    </div>
  )
}
