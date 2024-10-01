import React, { useState } from "react";
import UserInformation from "./UserInformation";
import AddressDetails from "./AddressDetails";
import ThankYou from "./ThankYou";
import "../App.css";

const StepperForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    mobile: "",
    email: "",
    birthdate: "",
    age: "",
    bloodGroup: "",
    height: "",
    weight: "",
    gender: "",
    maritalStatus: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });

  // Function to handle next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Function to handle previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  // Function to handle form field changes
  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">Step Form</h1>
      <div className="stepwizard ">
        <div className="stepwizard-row setup-panel">
          <div className="stepwizard-step">
            <button
              type="button"
              className={`btn ${step === 1 ? "btn-primary" : "btn-default"}`}
              disabled={step === 1}
              onClick={() => setStep(1)}
            >
              1
            </button>
            <p>User Information</p>
          </div>
          <div className="stepwizard-step">
            <button
              type="button"
              className={`btn ${step === 2 ? "btn-primary" : "btn-default"}`}
              disabled={step < 2}
              onClick={() => setStep(2)}
            >
              2
            </button>
            <p>Address Details</p>
          </div>
          <div className="stepwizard-step">
            <button
              type="button"
              className={`btn ${step === 3 ? "btn-primary" : "btn-default"}`}
              disabled={step < 3}
              onClick={() => setStep(3)}
            >
              3
            </button>
            <p>Thank You</p>
          </div>
        </div>
      </div>
      {step === 1 && (
        <UserInformation
          nextStep={nextStep}
          handleChange={handleChange}
          formData={formData}
        />
      )}
      {step === 2 && (
        <AddressDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          formData={formData}
        />
      )}
      {step === 3 && <ThankYou prevStep={prevStep} formData={formData} />}
    </div>
  );
};

export default StepperForm;
