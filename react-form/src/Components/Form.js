import './Form.css';
import { fields } from '../data/fields';
import { useState } from 'react';

const Form = () => {
  const [values, setValues] = useState(
    Object.fromEntries(fields.map(f => [f.name, ""]))
  )

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted!")
    // setValues(Object.fromEntries(fields.map(f => [f.name, ""])))
    alert("Form submitted!")
    window.location.reload();
  }

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
          {fields.map((field) => {
            const {label, requiredErrorMessage, options, ...inputProps} = field;
            
            return (
              <div key={field.name}>
                <label 
                  className="label" 
                  htmlFor={field.name}
                >{label}: </label>

                {options == undefined ? (
                  <input 
                    className='input'
                    id={field.name}
                    {...inputProps}
                    value={values[field.name]}
                    onChange={handleChange}
                    autoComplete='off'
                  ></input>
                ) : (
                  <select 
                    id={field.name}
                    name={field.name}
                    value={values[field.name]}
                    onChange={handleChange}
                  >
                    <option value="">Select an option</option>
                    {options.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                )}
               
                {/* <p>{requiredErrorMessage}</p> */}
              </div>
            )
          })}
          <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form