import React, { useState } from 'react'

export default function SearchRide() {
  const formData = {
    from: '',
    to: '',
    date:'',
    numberOfSeats: '',
  }
  const [searchData, setSearchData] = useState(formData)

  const handleChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    console.log(searchData)
  }
  return (
    <div className="p-3">
      {JSON.stringify(payment)}
      <h4>Payment</h4>
      <div>
        <label className="label">Card Number</label>
        <input
          className="input_field"
          type="number"
          name="cardNumber"
          value={payment.cardNumber}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="label">CVV</label>
        <input
          className="input_field"
          type="number"
          name="cvv"
          value={payment.cvv}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="label">Expiry</label>
        <input
          className="input_field"
          type="month"
          name="month"
          value={payment.month}
          onChange={handleChange}
        />
      </div>
    
      <button className="app_button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  )
}
