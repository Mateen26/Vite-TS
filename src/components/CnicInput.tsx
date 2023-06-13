import React, { FC, ChangeEvent, useState } from 'react';

interface InputProps {
  type: string;
  forceActive?: boolean;
  readOnly?: boolean;
  icon?: string;
  autoFocus?: (element: HTMLInputElement) => void;
  require?: boolean;
  inputType?: string;
  id: string;
  defaultValue?: string;
  maxlength?: number;
  name?: string;
  label: string;
  onlyLetters?: boolean;
  onlyNumbers?: boolean;
  setValue?: (value: string | number, event: ChangeEvent<HTMLInputElement>) => void;
  setCapitalise?: boolean;
  class?: string
}

const CnicInput: FC<InputProps> = (props) => {
  const [cnic, setCnic] = useState('');

  const handleBlurValue = (e: React.FocusEvent<HTMLInputElement>) => {
  };

  const allLetter = (e: ChangeEvent<HTMLInputElement>) => {
    return /^[A-Za-z]+$/.test(e.target.value);
  };

  const validateNumber = (e: ChangeEvent<HTMLInputElement>) => {
    return /^\d+$/.test(e.target.value);
  };

  const capitaliseText = (input: string) => {
    return input.charAt(0).toUpperCase() + input.slice(1);
  };

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>,
    value: string) => {
    let inputVal = '';
    if (props.onlyLetters) {
      inputVal = e.target.value.replace(/[^A-Za-z\s]/g, '');
    } else if (props.onlyNumbers) {
      if (validateNumber(e)) {
        inputVal = e.target.value;
      }
    } else {
      inputVal = e.target.value;
    }

    if (props.setValue) {
      if (props.setCapitalise) {
        inputVal = capitaliseText(inputVal);
      }
      let val: string | number = props.inputType === 'number' ? parseInt(inputVal) : inputVal;
      props.setValue(val, e);
    }
  };

  

  const handleCnic = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    let v = null;
    if (validateNumber(event)) {
      v = event.target.value;
    } else {
      return false;
    }
    let last_char;
    let full_string;
    let new_char: string = '';

    if (v.length === 6 && v.slice(-1) !== '-') {
      last_char = v.slice(-1);
      full_string = v.slice(0, -1);
      new_char = full_string + '-' + last_char;
    } else if (v.length === 14 && v.slice(-1) !== '-') {
      last_char = v.slice(-1);
      full_string = v.slice(0, -1);
      new_char = full_string + '-' + last_char;
    }
    setCnic(new_char|| '');
    handleChangeValue(event, new_char);
  };

  return (
    <>

        <div className={`inputs ${props.readOnly ? 'read-only' : ''}`}>
          {props.icon && <i className={props.icon}></i>}

          <input
            required={props.require}
            type={'text'}
          className={`form-control ${props.id}`}
            id={props.id}
            value={props.defaultValue || cnic}
            spellCheck='false'
            maxLength={props?.maxlength}
            onChange={handleCnic}
            readOnly={props.readOnly}
            name={props.name}
          />
          <label htmlFor='name'>
            {props.label}{' '}
            {props.require && <em className='text-red-400'>*</em>}
          </label>
        </div>
    </>



  );
};

export default CnicInput;
