import "../styles/PersonalInfoSection.css";

function PersonalInfoSection({ fullName, email, phoneNumber, location }) {
  return (
    <div id="personal-info">
      <h1 id="personal-info-name">{fullName}</h1>
      <div id="personal-contact-info">
        <div id="personal-info-email">
          <img src="mail.svg"></img>
          <p>{email}</p>
        </div>
        <div id="personal-info-number">
          <img src="phone.svg"></img>
          <p>{phoneNumber}</p>
        </div>
        <div id="personal-info-location">
          <img src="location.svg"></img>
          <p>{location}</p>
        </div>
      </div>
    </div>
)}

export default PersonalInfoSection;
