import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess, restoreUserFromLocalStorage } from "../redux/actions";

export default function SearchRide() {
  const formData = {
    from: "",
    to: "",
    date: "",
    numberOfSeats: "",
  };
  const [searchData, setSearchData] = useState(formData);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(searchData);
    navigate("/search-results");
  };
  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate("/auth");
    }
  }, []);

  const loggedInUser = useSelector((state) => state?.auth?.user);
  const dispatch = useDispatch();

  useEffect(() => {
    // Check localStorage for user data
    const userData = JSON.parse(localStorage.getItem("access_token"));

    if (userData) {
      // Dispatch loginSuccess action to restore user data
      const { email, access_token, token_type } = userData;
      dispatch(loginSuccess(email, access_token, token_type));
    }
  }, [dispatch]);

  return (
    <div className="p-3 mt-5">
      {JSON.stringify(loggedInUser)}
      <h4 className="text-center" style={{ fontWeight: 900, fontSize: 40 }}>
        Search for ride
      </h4>
      <div
        className="mt-5 d-flex justify-content-center search_ride_inputs_div"
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
          style={{ padding: "20px 40px" }}
        >
          GO
        </button>
      </div>
    </div>
  );
}
