import { MdArrowForwardIos } from "react-icons/md";
import CompHeader from "../CustomComponents/CompHeder";
import { useNavigate } from "react-router-dom";
import { Col, Modal, Row } from "reactstrap";
import { useState } from "react";
import axios from "axios";
import { api } from "../helper/apis";
export default function CreateCar() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const userData = JSON.parse(localStorage.getItem("access_token"));
  const xtoken = userData?.access_token;
  const toggleModal = () => {
    setModal(!modal);
  };
  const formData = {
    brand: "",
    c_license: "",
    c_type: "",
    color: "",
  };
  const [createCar, setCreateCar] = useState(formData);

  const handleChange = (e) => {
    setCreateCar({ ...createCar, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(
        `${api}/cars/create`,
        {
          brand: createCar.brand,
          c_license: createCar.c_license,
          c_type: createCar.c_type,
          color: createCar.color,
        },
        {
          headers: {
            "x-token": xtoken,
          },
        }
      )
      .then((response) => {
        console.log(response);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
    console.log(createCar);
  };
  return (
    <div className="mt-5">
      <CompHeader header={"Create Car"}>
        <Row>
          <Col md={4}></Col>
          <Col md={4}>
            <div className="mt-3">
              {JSON.stringify(createCar)}
              {/* {JSON.stringify(xtoken)} */}
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mt-3">
                    <label className="label">Car Brand</label>
                    <input
                      required
                      minLength={2}
                      className="input_field"
                      type="text"
                      name="brand"
                      value={createCar.brand}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col md={6} className="mt-3">
                    <label className="label">Car Model</label>
                    <input
                      required
                      minLength={2}
                      className="input_field"
                      type="text"
                      name="carModel"
                      value={createCar.carModel}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col md={6} className="mt-3">
                    <label className="label">Car Type</label>
                    <input
                      required
                      minLength={2}
                      className="input_field"
                      type="text"
                      name="c_type"
                      value={createCar.c_type}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col md={6} className="mt-3">
                    <label className="label">Car Color</label>
                    <input
                      required
                      minLength={2}
                      className="input_field"
                      type="text"
                      name="color"
                      value={createCar.color}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col md={6} className="mt-3">
                    <label className="label">Driver License</label>
                    <input
                      required
                      minLength={2}
                      className="input_field"
                      type="text"
                      name="c_license"
                      value={createCar.c_license}
                      onChange={handleChange}
                    />
                  </Col>
                  <div className="text-center mt-3">
                    {loading ? (
                      <button
                        disabled={loading}
                        className="app_button p-3"
                        style={{ width: "100%", fontWeight: "bold" }}
                      >
                        Loading...
                      </button>
                    ) : (
                      <button
                        className="app_button p-3"
                        style={{ width: "100%", fontWeight: "bold" }}
                      >
                        Create
                      </button>
                    )}
                  </div>
                </Row>
              </form>
            </div>
          </Col>
          <Col md={4}></Col>
        </Row>
      </CompHeader>
    </div>
  );
}
