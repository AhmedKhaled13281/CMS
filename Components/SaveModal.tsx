import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const SaveModal = ({
  handleSaveSection,
  modalDescription,
  modalTitle,
  inputType,
}: any) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const inputNameRef = useRef<any>();
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  const handleClose = () => {
    const inputNameValue = inputNameRef.current.value;
    const ff = handleSaveSection(inputNameValue);
    setIsLoading(false);
    setShow(false);
  };

  // if(isLoading){
  //   return <div className="d-flex justify-content-center align-items-center">
  //     <h3>Loading ...</h3>
  //   </div>
  // }

  return (
    <>
      <Button className="me-3" variant="primary" onClick={handleShow}>
        {modalTitle}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalDescription ?? "Modal Heading"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          {inputType === "field" ? (
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>{modalDescription ?? "Add New Section"}</Form.Label>
              <Form.Control
                type="text"
                placeholder={
                  modalDescription
                    ? "Enter The Page Name"
                    : "Enter your section name"
                }
                ref={inputNameRef}
              />
            </Form.Group>
          ) : (
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Add Your Meta Tags</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Write your Meta tags here"
                style={{ height: "100px" }}
                ref={inputNameRef}
              />
            </Form.Group>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SaveModal;
