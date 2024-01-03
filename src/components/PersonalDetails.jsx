import InputGroup from "./InputGroup.jsx";
import "../styles/PersonalDetails.css";

function PersonalDetails({ onChange, fullName, email, phoneNumber, location }) {
  return (
    <>
      <form className="personal-details">
        <h2>Personal Details</h2>
        <InputGroup id="full-name" placeholder="First and last name" labelText="Full name" onChange={onChange} value={fullName} data-key="Full name"></InputGroup>
        <InputGroup id="email" placeholder="Enter email" labelText="Email" onChange={onChange} value={email} data-key="Email"></InputGroup>
        <InputGroup id="phone-number" placeholder="Enter phone number" labelText="Phone number" onChange={onChange} value={phoneNumber} data-key="Phone number"></InputGroup>
        <InputGroup id="location" placeholder="City, Country" labelText="Location" onChange={onChange} value={location} data-key="Location"></InputGroup>
      </form>
    </>
  )
}

export default PersonalDetails;
