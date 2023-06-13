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

const PasswordInput: FC<InputProps> = (props) => {
  const [passwordType, setPasswordType] = useState('password');



  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
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

  return (
    <>

        <div
          className={`inputs ${props.forceActive ? 'force-active' : ''} ${props.readOnly ? 'read-only' : ''}`}
        >
          {props.icon && <i className={props.icon}></i>}
          <input
            // ref={(inputElement) => {
            //   if (inputElement && props.autoFocus) {
            //     props.autoFocus(inputElement);
            //   }
            // }}
            required={props.require}
            type={passwordType}
            className={`form-control ${props.id}`}
            id={props.id}
            value={props.defaultValue}
            spellCheck="false"
            onChange={handleChangeValue}
            readOnly={props.readOnly}
            onBlur={handleBlurValue}
            name={props.name}
          />
          <label htmlFor="name">
            {props.label} {props.require && <em className="text-red-400">*</em>}
          </label>
          <i
            className="show-password align-center gap-10"
            onClick={() => {
              setPasswordType(passwordType === 'password' ? 'text' : 'password');
            }}
          >
            <label className="switch s-0" style={{ display: 'block' }}>
              <input
                id="tools"
                type="checkbox"
                name="fulfil_documents"
                onClick={(e) => e.stopPropagation()}
                value="1"
              />
              <span
                className={
                  passwordType === 'password'
                    ? 'icon-show-password'
                    : 'icon-hide-password'
                }
              ></span>
            </label>
          </i>
        </div>
    </>



  );
};

export default PasswordInput;
