import { useState } from 'react'
import "./FormInput.css";

const FormInputs = (props) => {
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;


    const handleFocus = (e)=>{
        setFocused(true);
    }


  return (
    <div className='formInputs'>
        <label>{label}</label>
        <input {...inputProps} onChange={onChange} onBlur={handleFocus} onFocus={()=>inputProps.name==="confirmPassword" && setFocused(true)} focused={focused.toString()} />
        <span>{errorMessage}</span>
    </div>
  )
}

export default FormInputs