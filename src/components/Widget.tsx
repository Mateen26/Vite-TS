import React, { FC } from 'react';
import CustomInput from './CustomInput';
import PasswordInput from './PasswordInput';
import CnicInput from './CnicInput';


interface WidgetProps {
  type: string;
  inputType: string;
  label: string;
  id: string;
  onlyLetters?: boolean;
  onlyNumbers?: boolean;
  require: boolean;
  icon: string;
  defaultValue?: string;
  value?: string;
  class?: string;
  name?: string;
  forceActive?: boolean;
  setValue: (value: string | number, event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Widget: FC<WidgetProps> = (props) => {
  return (
    <header>
      <>
        {props?.type === "input" && (
          <CustomInput
            type={props.type}
            forceActive={props?.forceActive || false}
            readOnly={false}
            icon={props.icon}
            autoFocus={(inputElement: HTMLInputElement) => {
              inputElement.focus();
            }}
            require={props.require}
            inputType={props.inputType}
            id={props.id}
            class={props?.class}
            defaultValue={props?.defaultValue || ''}
            maxlength={50}
            name={props?.name}
            label={props.label}
            onlyLetters={props.onlyLetters}
            onlyNumbers={props.onlyNumbers}
            setValue={props.setValue}
            setCapitalise={false}
          />
        )}

        {props?.type === "password" && (
          <PasswordInput
            type={props.type}
            forceActive={props?.forceActive || false}
            readOnly={false}
            icon={props.icon}
            autoFocus={(inputElement: HTMLInputElement) => {
              inputElement.focus();
            }}
            require={props.require}
            inputType={props.inputType}
            id={props.id}
            class={props?.class}
            defaultValue={props?.defaultValue || ''}
            maxlength={50}
            name={props?.name}
            label={props.label}
            onlyLetters={props.onlyLetters}
            onlyNumbers={props.onlyNumbers}
            setValue={props.setValue}
            setCapitalise={false}
          />
        )}

        {props?.type === "cnic" && (
          <CnicInput
            type={props.type}
            forceActive={props?.forceActive || false}
            readOnly={false}
            icon={props.icon}
            autoFocus={(inputElement: HTMLInputElement) => {
              inputElement.focus();
            }}
            require={props.require}
            inputType={props.inputType}
            id={props.id}
            class={props?.class}
            defaultValue={props?.defaultValue || ''}
            maxlength={50}
            name={props?.name}
            label={props.label}
            onlyLetters={props.onlyLetters}
            onlyNumbers={props.onlyNumbers}
            setValue={props.setValue}
            setCapitalise={false}
          />
        )}




      </>
    </header>
  );
};

export default Widget;
