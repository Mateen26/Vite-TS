import  { useState } from 'react';
import './App.css';
import Widget from './components/Widget';
import 'bootstrap/dist/css/bootstrap.min.css';
import CnicInput from './components/CnicInput';
import './assets/scss/Widget.scss';


function App() {

  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [cnic, setCnic] = useState('');

  return (
    <>
      <h1>Form</h1>

 
        <Widget
          type={'input'}
          inputType={'name'}
            label='Full Name'
            id='full_name'
          onlyLetters={true}
            require={true}
            icon='icon-operator'
          defaultValue={fullName || ''}
            
           setValue={(value) => {
            console.log('fullName', value);
             setFullName(String(value));
          }}
        />
 
      
    
        <Widget
          id='passowrd'
          type={'password'}
          name={'password'}
          inputType={'password'}
          label={'Password'}
            require={true}
          icon='icon-operator'
          defaultValue={password || ''}
            
           setValue={(value) => {
            console.log('password', value);
             setPassword(String(value));
          }}
        />
     

    
      <CnicInput
        type={'cnic'}
        inputType={'number'}
        label={'CNIC'}
        id={'cnic'}
        icon={'icon-visitor-card'}
        onlyNumbers={true}
        maxlength={15}
        defaultValue={
          cnic
        }
        setValue={(value, event) => {
          console.log('cnic', value);
          setCnic(String(value));
        }}
      />
     

    </>
  );
}

export default App;
