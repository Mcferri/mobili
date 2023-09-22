import CompHeader from "../CustomComponents/CompHeder";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../helper/apis";
import { MdArrowForwardIos } from "react-icons/md";
export default function MyCars() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const userData = JSON.parse(localStorage.getItem("access_token"));
  const xtoken = userData?.access_token;
  const [cars, setCars] = useState([]);
  useEffect(() => {
    if (xtoken) {
      setLoading(true);
      axios
        .get(`${api}/cars/user/all`, {
          headers: {
            "x-token": xtoken,
          },
        })
        .then((response) => {
          console.log(response.data);
          setCars(response?.data);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.log("error fetching data", err);
        });
    }
  }, []);
  return (
    <div className="mt-5">
      <CompHeader header={"My Cars"}>
        <Row className="">
          <Col md={4}></Col>
          <Col md={4}>
            {/* {JSON.stringify(cars)} */}
            {loading ? (
              <div className="text-center">
                <span className="">Loading your cars...</span>
              </div>
            ) : (
              <div className="mt-3">
                {cars?.map((item, index) => (
                  <div
                    key={index}
                    className="mt-4 d-flex align-items-center justify-content-between ride_details_user"
                    // onClick={() => navigate("/delete-account")}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <p
                        className="m-0"
                        style={{
                          fontWeight: "",
                          textTransform: "uppercase",
                          fontWeight: "bold",
                        }}
                      >
                        {item?.brand} {item.c_type}
                      </p>
                      <p>{item?.color}</p>
                    </div>
                    <div>
                      <MdArrowForwardIos size="1.2rem" className="arrow" />
                    </div>
                  </div>
                ))}

                {cars.length === 0 ? (
                  <div className="text-center mb-5">
                    <span className="">
                      You don't have registered car(s) yet
                    </span>
                  </div>
                ) : (
                  ""
                )}
                <div className="text-center">
                  <button
                    className="app_button"
                    onClick={() => navigate("/create-new-car")}
                  >
                    Add New Car
                  </button>
                </div>
              </div>
            )}
          </Col>
          <Col md={4}></Col>
        </Row>
      </CompHeader>
    </div>
  );
}
