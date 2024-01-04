import "../styles/EducationInfo.css";

function EducationInfo({ data }) {
  const { schoolName, degree, location, startDate, endDate } = data;
  return (
    <>
      <div className="education-info">
        <div className="education-info-group">
          <p className="education-date">{startDate && endDate ? `${startDate} - ${endDate}` : startDate || endDate}</p>
          <p className="education-location">{location}</p>
        </div>
        <div className="education-info-group">
          <p className="education-schoolName">{schoolName}</p>
          <p className="education-degree">{degree}</p>
        </div>
      </div>
    </>
  );
}

export default EducationInfo;
