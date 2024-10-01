import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const AddressDetails = ({ nextStep, prevStep, handleChange, formData }) => {
  const { addressLine1, addressLine2, city, state, country, pincode } = formData;

  // State for error messages
  const [errors, setErrors] = useState({});

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    if (!addressLine1) newErrors.addressLine1 = "Address Line 1 is required";
    if (!city) newErrors.city = "City is required";
    if (!state) newErrors.state = "State is required";
    if (!country) newErrors.country = "Country is required";
    if (!pincode) newErrors.pincode = "Pincode is required";
    else if (!/^\d{6}$/.test(pincode))
      newErrors.pincode = "Pincode must be 6 digits";

    setErrors(newErrors); // Update the errors state
    return Object.keys(newErrors).length === 0; // Return true if there are no errors
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validateForm()) {
      nextStep();
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    prevStep();
  };

  const handleInputChange = (field) => (e) => {
    // Clear error when user inputs a value
    handleChange(field)(e);
    if (e.target.value) {
      setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
    }
  };

  return (
    <Form className="container px-5">
      <Row>
        <Col xs={12} md={6}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Address Line 1"
              value={addressLine1}
              onChange={handleInputChange("addressLine1")}
              className={`custome-input ${errors.addressLine1 ? "custome-input-red" : ""}`}
              required
            />
            {errors.addressLine1 && (
              <span className="text-danger">{errors.addressLine1}</span>
            )}
          </Form.Group>
        </Col>

        <Col xs={12} md={6}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Address Line 2"
              value={addressLine2}
              onChange={handleInputChange("addressLine2")}
              className="custome-input"
            />
          </Form.Group>
        </Col>

        <Col xs={12} md={6}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="City"
              value={city}
              onChange={handleInputChange("city")}
              className={`custome-input ${errors.city ? "custome-input-red" : ""}`}
              required
            />
            {errors.city && <span className="text-danger">{errors.city}</span>}
          </Form.Group>
        </Col>

        <Col xs={12} md={6}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="State"
              value={state}
              onChange={handleInputChange("state")}
              className={`custome-input ${errors.state ? "custome-input-red" : ""}`}
              required
            />
            {errors.state && (
              <span className="text-danger">{errors.state}</span>
            )}
          </Form.Group>
        </Col>

        <Col xs={12} md={6}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Country"
              value={country}
              onChange={handleInputChange("country")}
              className={`custome-input ${errors.country ? "custome-input-red" : ""}`}
              required
            />
            {errors.country && (
              <span className="text-danger">{errors.country}</span>
            )}
          </Form.Group>
        </Col>

        <Col xs={12} md={6}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Pincode"
              maxLength={6} 
              value={pincode}
              onChange={handleInputChange("pincode")}
              className={`custome-input ${errors.pincode ? "custome-input-red" : ""}`}
              required
            />
            {errors.pincode && (
              <span className="text-danger">{errors.pincode}</span>
            )}
          </Form.Group>
        </Col>
      </Row>

      <div className="d-flex justify-content-between mt-4">
        <Button variant="secondary" onClick={handleBack} className="back-btn">
          Back
        </Button>
        <Button variant="primary" onClick={handleNext} className="next-btn">
          Next
        </Button>
      </div>
    </Form>
  );
};

export default AddressDetails;
