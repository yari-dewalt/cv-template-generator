import "../styles/InputGroup.css"

function InputGroup({
  id,
  placeholder,
  defaultValue,
  labelText,
  onChange,
}) {
  return (
    <>
      <div className="input-group">
        <label htmlFor={id}>{labelText}</label>
        <input id={id} placeholder={placeholder} defaultValue={defaultValue} onChange={onChange}></input>
      </div> 
    </>
  )
}

export default InputGroup;
