import { MdArrowForwardIos } from "react-icons/md";
import CompHeader from "../CustomComponents/CompHeder";
import { useNavigate } from "react-router-dom";
import { Col, Modal, Row } from "reactstrap";
import { useState } from "react";
export default function MyCars() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [confirmText, setConfirmText] = useState("");
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <CompHeader header={"My Cars"}>
        <Row>
          <Col md={4}></Col>
          <Col md={4}>
            <div className="mt-3">
              <div className="text-center">
                <button className="app_button" onClick={()=>navigate('/create-new-car')}>Add New Car</button>
              </div>
            </div>
          </Col>
          <Col md={4}></Col>
        </Row>
      </CompHeader>
    </>
  );
}
