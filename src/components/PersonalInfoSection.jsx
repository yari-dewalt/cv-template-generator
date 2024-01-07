import "../styles/PersonalInfoSection.css";

function PersonalInfoSection({ fullName, email, phoneNumber, location }) {
  return (
    <div id="personal-info">
      {fullName &&
      <h1 id="personal-info-name">{fullName}</h1>}
      <div id="personal-contact-info">
        {email && 
        <div id="personal-info-email">
          <img src="mail.svg"></img>
          <p>{email}</p>
        </div>}
        {phoneNumber && 
        <div id="personal-info-number">
          {phoneNumber ? <img src="phone.svg"></img> : <img></img>}
          <p>{phoneNumber}</p>
        </div>}
        {location &&
        <div id="personal-info-location">
          <img src="location.svg"></img>
          <p>{location}</p>
        </div>}
      </div>
    </div>
)}

export default PersonalInfoSection;
