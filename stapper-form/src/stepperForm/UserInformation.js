import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

const UserInformation = ({ nextStep, handleChange, formData }) => {
  const {
    firstname,
    middlename,
    lastname,
    mobile,
    email,
    birthdate,
    age,
    bloodGroup,
    height,
    weight,
    gender,
    maritalStatus,
  } = formData;

  // State to track errors
  const [errors, setErrors] = useState({});

  // Validation function
  const validateField = (name, value) => {
    let error = "";
    if (!value) {
      error = `${name} is required`;
    } else if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = "Invalid email address";
    } else if (name === "mobile" && !/^\d{10}$/.test(value)) {
      error = "Only mobile number (10 digits required)";
    }
    return error;
  };

  // Validate the entire form
  const validateForm = () => {
    const newErrors = {};
    const fields = [
      "firstname",
      "lastname",
      "mobile",
      "email",
      "birthdate",
      "age",
      "bloodGroup",
      "height",
      "weight",
      "gender",
      "maritalStatus",
      "middlename",
    ];

    fields.forEach((field) => {
      const value = formData[field];
      const error = validateField(field, value);
      if (error) {
        newErrors[field] = error;
      }
    });

    // Check gender and marital status separately
    if (!gender) {
      newErrors.gender = "Gender is required";
    }
    if (!maritalStatus) {
      newErrors.maritalStatus = "Marital status is required";
    }

    setErrors(newErrors); // Update errors state
    return newErrors; // Return errors for further checks
  };

  const handleNext = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(); // Validate when next is clicked

    // Only proceed if there are no validation errors
    if (Object.keys(validationErrors).length === 0) {
      nextStep();
    }
  };

  const handleInputChange = (field) => (e) => {
    // Remove error when user inputs value
    handleChange(field)(e);
    if (e.target.value) {
      setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
    }
  };

  return (
    <Form className="container px-4 py-4">
      <Row>
        <Col xs={12} sm={6}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="First Name"
              value={firstname}
              onChange={handleInputChange("firstname")}
              className={`custome-input ${errors.firstname ? "custome-input-red" : ""}`}
            />
            {errors.firstname && <span className="text-danger">{errors.firstname}</span>}
          </Form.Group>
        </Col>

        <Col xs={12} sm={6}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Middle Name"
              value={middlename}
              onChange={handleInputChange("middlename")}
              className={`custome-input ${errors.middlename ? "custome-input-red" : ""}`}
            />
            {errors.middlename && <span className="text-danger">{errors.middlename}</span>}
          </Form.Group>
        </Col>

        <Col xs={12} sm={6}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Last Name"
              value={lastname}
              onChange={handleInputChange("lastname")}
              className={`custome-input ${errors.lastname ? "custome-input-red" : ""}`}
            />
            {errors.lastname && <span className="text-danger">{errors.lastname}</span>}
          </Form.Group>
        </Col>

        <Col xs={12} sm={6}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Mobile No"
              value={mobile}
              onChange={handleInputChange("mobile")}
              maxLength={10} 
              className={`custome-input ${errors.mobile ? "custome-input-red" : ""}`}
            />
            {errors.mobile && <span className="text-danger">{errors.mobile}</span>}
          </Form.Group>
        </Col>

        <Col xs={12} sm={6}>
          <Form.Group>
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleInputChange("email")}
              className={`custome-input ${errors.email ? "custome-input-red" : ""}`}
            />
            {errors.email && <span className="text-danger">{errors.email}</span>}
          </Form.Group>
        </Col>

        <Col xs={12} sm={6}>
          <Form.Group>
            <Form.Control
              type="date"
              placeholder="Birthdate"
              value={birthdate}
              onChange={handleInputChange("birthdate")}
              className={`custome-input ${errors.birthdate ? "custome-input-red" : ""}`}
            />
            {errors.birthdate && <span className="text-danger">{errors.birthdate}</span>}
          </Form.Group>
        </Col>

        <Col xs={12} sm={6}>
          <Form.Group>
            <Form.Control
              type="number"
              placeholder="Age"
              value={age}
              onChange={handleInputChange("age")}
              className={`custome-input ${errors.age ? "custome-input-red" : ""}`}
            />
            {errors.age && <span className="text-danger">{errors.age}</span>}
          </Form.Group>
        </Col>

        <Col xs={12} sm={6}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Blood Group"
              value={bloodGroup}
              onChange={handleInputChange("bloodGroup")}
              className={`custome-input ${errors.bloodGroup ? "custome-input-red" : ""}`}
            />
            {errors.bloodGroup && <span className="text-danger">{errors.bloodGroup}</span>}
          </Form.Group>
        </Col>

        <Col xs={12} sm={6}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Height"
              value={height}
              onChange={handleInputChange("height")}
              className={`custome-input ${errors.height ? "custome-input-red" : ""}`}
            />
            {errors.height && <span className="text-danger">{errors.height}</span>}
          </Form.Group>
        </Col>

        <Col xs={12} sm={6}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Weight"
              value={weight}
              onChange={handleInputChange("weight")}
              className={`custome-input ${errors.weight ? "custome-input-red" : ""}`}
            />
            {errors.weight && <span className="text-danger">{errors.weight}</span>}
          </Form.Group>
        </Col>

        <Col xs={12} sm={6}>
          <Form.Group>
            <Form.Label>Gender</Form.Label>
            <div>
              <Form.Check
                inline
                type="radio"
                label="Male"
                value="male"
                onChange={handleChange("gender")}
                checked={gender === "male"}
              />
              <Form.Check
                inline
                type="radio"
                label="Female"
                value="female"
                onChange={handleChange("gender")}
                checked={gender === "female"}
              />
            </div>
            {errors.gender && <span className="text-danger">{errors.gender}</span>}
          </Form.Group>
        </Col>

        <Col xs={12} sm={6}>
          <Form.Group>
            <Form.Label>Marital Status</Form.Label>
            <div>
              <Form.Check
                inline
                type="radio"
                label="Single"
                value="single"
                onChange={handleChange("maritalStatus")}
                checked={maritalStatus === "single"}
              />
              <Form.Check
                inline
                type="radio"
                label="Married"
                value="married"
                onChange={handleChange("maritalStatus")}
                checked={maritalStatus === "married"}
              />
              <Form.Check
                inline
                type="radio"
                label="Divorced"
                value="divorced"
                onChange={handleChange("maritalStatus")}
                checked={maritalStatus === "divorced"}
              />
              <Form.Check
                inline
                type="radio"
                label="Widowed"
                value="widowed"
                onChange={handleChange("maritalStatus")}
                checked={maritalStatus === "widowed"}
              />
            </div>
            {errors.maritalStatus && <span className="text-danger">{errors.maritalStatus}</span>}
          </Form.Group>
        </Col>
      </Row>

      <Row className="mt-4">
        <Button variant="secondary" className="back-btn" disabled>
          Back
        </Button>
        <Button variant="primary" onClick={handleNext} className="next-btn">
          Next
        </Button>
      </Row>
    </Form>
  );
};

export default UserInformation;
