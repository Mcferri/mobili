import { MdArrowForwardIos } from "react-icons/md";
import CompHeader from "../CustomComponents/CompHeder";
import { useNavigate } from "react-router-dom";
import { Col, Modal, Row } from "reactstrap";
import { useState } from "react";
export default function Settings() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [confirmText, setConfirmText] = useState("");
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <CompHeader header={"Settings"}>
        <Row>
          <Col md={4}></Col>
          <Col md={4}>
            <div className="mt-3">
              <div
                className="mt-4 d-flex align-items-center justify-content-between ride_details_user"
                onClick={() => navigate("/delete-account")}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p className="m-0" style={{ fontWeight: "" }}>
                    Delete account
                  </p>
                </div>
                <div>
                  <MdArrowForwardIos size="1.2rem" className="arrow" />
                </div>
              </div>
            </div>
          </Col>
          <Col md={4}></Col>
        </Row>

        <Modal size="sm" isOpen={modal} toggle={toggleModal}>
          <div className="p-3">
            <p style={{ fontSize: 14 }}>
              Are you sure want to delete your account?
            </p>
            <b style={{ fontSize: 14 }}>Please consider the following</b>
            <ul style={{ fontSize: 14 }}>
              <li>You'll lose access to your account and all data.</li>
              <li>Account recovery won't be possible.</li>
            </ul>
            <div>
              <label htmlFor="confirmText" className="label"></label>
              <input
                id="confirmText"
                type="text"
                className="input_field mb-3"
                onChange={(e) => setConfirmText(e.target.value)}
                value={confirmText}
              />
            </div>
            <div className="d-flex justify-content-between">
              <button className="app_button">Cancel</button>
              <button className="danger_button">Delete</button>
            </div>
          </div>
        </Modal>
      </CompHeader>
    </>
  );
}
