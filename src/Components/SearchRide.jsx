import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
    navigate('/search-results')
  }
  const navigate = useNavigate()

  return (
    <div className="p-3 mt-5">
      {/* {JSON.stringify(searchData)} */}
      <h4 className="text-center" style={{ fontWeight: 900, fontSize: 40 }}>
        Search for ride
      </h4>
      <div
        className="mt-3 d-flex justify-content-center search_ride_inputs_div"
        style={{ gap: 10 }}
      >
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
      <div className="m-0 text-center mt-3">
        <button
          className="app_button"
          onClick={handleSubmit}
          style={{ padding: '20px 40px' }}
        >
          GO
        </button>
      </div>
    </div>
  )
}
