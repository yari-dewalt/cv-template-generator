import "../styles/ExperienceInfo.css";

function ExperienceInfo({ data }) {
  return (
    <>
      <div className="experience-info">
        <div className="experience-info-group">
          <p className="experience-date">{data.startDate && data.endDate ? `${data.startDate} - ${data.endDate}` : data.startDate || data.endDate}</p>
          <p className="experience-location">{data.location}</p>
        </div>
        <div className="experience-info-group">
          <p className="experience-companyName">{data.companyName}</p>
          <p className="experience-positionTitle">{data.positionTitle}</p>
          <p className="experience-description">{data.description}</p>
        </div>
      </div>
    </>
  );
}

export default ExperienceInfo;
