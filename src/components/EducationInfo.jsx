import "../styles/EducationInfo.css";

function EducationInfo({ data }) {
  return (
    <>
      <div className="education-info">
        <div className="education-info-group">
          <p className="education-date">{data.startDate && data.endDate ? `${data.startDate} - ${data.endDate}` : data.startDate || data.endDate}</p>
          <p className="education-location">{data.location}</p>
        </div>
        <div className="education-info-group">
          <p className="education-schoolName">{data.schoolName}</p>
          <p className="education-degree">{data.degree}</p>
        </div>
      </div>
    </>
  );
}

export default EducationInfo;
