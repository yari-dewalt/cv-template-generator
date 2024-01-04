import InputGroup from "./InputGroup.jsx";
import "../styles/PersonalDetails.css";

function PersonalDetails({ onChange, fullName, email, phoneNumber, location }) {
  return (
    <>
      <form className="personal-details">
        <h2>Personal Details</h2>
        <InputGroup id="full-name" placeholder="First and last name" labelText="Full name" onChange={onChange} value={fullName} data-key="fullName"></InputGroup>
        <InputGroup id="email" placeholder="Enter email" labelText="Email" onChange={onChange} value={email} data-key="email"></InputGroup>
        <InputGroup id="phone-number" placeholder="Enter phone number" labelText="Phone number" onChange={onChange} value={phoneNumber} data-key="phoneNumber"></InputGroup>
        <InputGroup id="location" placeholder="City, Country" labelText="Location" onChange={onChange} value={location} data-key="location"></InputGroup>
      </form>
    </>
  )
}

export default PersonalDetails;
