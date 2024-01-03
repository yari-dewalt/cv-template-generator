import "../styles/InputGroup.css"

function InputGroup({
  id,
  placeholder,
  labelText,
  onChange,
  value,
  "data-key": dataKey,
}) {
  return (
    <>
      <div className="input-group">
        <label htmlFor={id}>{labelText}</label>
        <input id={id} placeholder={placeholder} onChange={onChange} value={value} data-key={dataKey}></input>
      </div> 
    </>
  )
}

export default InputGroup;
