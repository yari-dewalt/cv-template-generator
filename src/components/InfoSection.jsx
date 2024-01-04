function InfoSection( { array, InfoComponent, title }) {
  return (
    <div className="info-section">
      {array.length > 0 && <h3 className="section-title">{title}</h3>}
      {array.map((data) => 
        <InfoComponent data={data} key={data.id}/>
      )}
    </div>
  );
}

export default InfoSection;
