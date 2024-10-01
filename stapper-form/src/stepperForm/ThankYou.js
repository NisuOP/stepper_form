import React from "react";

const ThankYou = ({ prevStep, formData }) => {
  const {
    firstname,
    middlename,
    lastname,
    email,
    mobile,
    birthdate,
    age,
    bloodGroup,
    height,
    weight,
    gender,
    maritalStatus,
    addressLine1,
    addressLine2,
    city,
    state,
    country,
    pincode,
  } = formData;

  return (
    <div className="container thank-you-container">
      <div className="details-shoe">
        <p>Your information has been submitted successfully.</p>
      </div>
      <h5>Summary of your information:</h5>
      <div className="summary-table">
        <div className="summary-row">
          <span className="summary-key">First Name :</span>
          <span className="summary-value">{firstname}</span>
        </div>
        <div className="summary-row">
          <span className="summary-key">Middle Name :</span>
          <span className="summary-value">{middlename}</span>
        </div>
        <div className="summary-row">
          <span className="summary-key">Last Name :</span>
          <span className="summary-value">{lastname}</span>
        </div>
        <div className="summary-row">
          <span className="summary-key">Email :</span>
          <span className="summary-value">{email}</span>
        </div>
        <div className="summary-row">
          <span className="summary-key">Mobile :</span>
          <span className="summary-value">{mobile}</span>
        </div>
        <div className="summary-row">
          <span className="summary-key">Birthdate :</span>
          <span className="summary-value">{birthdate}</span>
        </div>
        <div className="summary-row">
          <span className="summary-key">Age :</span>
          <span className="summary-value">{age}</span>
        </div>
        <div className="summary-row">
          <span className="summary-key">Blood Group :</span>
          <span className="summary-value">{bloodGroup}</span>
        </div>
        <div className="summary-row">
          <span className="summary-key">Height:</span>
          <span className="summary-value">{height}</span>
        </div>
        <div className="summary-row">
          <span className="summary-key">Weight :</span>
          <span className="summary-value">{weight}</span>
        </div>
        <div className="summary-row">
          <span className="summary-key">Gender :</span>
          <span className="summary-value">{gender}</span>
        </div>
        <div className="summary-row">
          <span className="summary-key">Marital Status :</span>
          <span className="summary-value">{maritalStatus}</span>
        </div>
        <div className="summary-row">
          <span className="summary-key">Address Line 1 :</span>
          <span className="summary-value">{addressLine1}</span>
        </div>
        <div className="summary-row">
          <span className="summary-key">Address Line 2 :</span>
          <span className="summary-value">{addressLine2}</span>
        </div>
        <div className="summary-row">
          <span className="summary-key">City :</span>
          <span className="summary-value">{city}</span>
        </div>
        <div className="summary-row">
          <span className="summary-key">State :</span>
          <span className="summary-value">{state}</span>
        </div>
        <div className="summary-row">
          <span className="summary-key">Country :</span>
          <span className="summary-value">{country}</span>
        </div>
        <div className="summary-row">
          <span className="summary-key">Pincode :</span>
          <span className="summary-value">{pincode}</span>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
