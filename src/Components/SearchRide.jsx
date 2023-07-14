import React, { useState } from 'react'

export default function SearchRide() {
  const formData = {
    from: '',
    to: '',
    date: '',
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
      {/* {JSON.stringify(searchData)} */}
      <h4>Search for ride</h4>
      <div className="d-flex" style={{ gap: 10 }}>
        <div>
          <label className="label">From</label>
          <input
            className="input_field"
            type="text"
            name="from"
            value={searchData.from}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="label">To</label>
          <input
            className="input_field"
            type="text"
            name="to"
            value={searchData.to}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="label">Date</label>
          <input
            className="input_field"
            type="date"
            name="date"
            value={searchData.date}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="label">Seats</label>
          <input
            className="input_field"
            type="number"
            name="numberOfSeats"
            value={searchData.numberOfSeats}
            onChange={handleChange}
          />
        </div>
      </div>

      <button className="app_button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  )
}
