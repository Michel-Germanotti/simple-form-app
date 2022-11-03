import './App.css';
import Form from './components/Form';
import StepTwo from './components/StepTwo';
import Footer from './components/Footer';
import { useState } from "react";

function App() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [valid, setValid] = useState(false); // Password ok ?
const [submit, setSubmit] = useState(false);

  return (
    <div className="container">    
      {!valid ? (
      <Form 
        stateName={name} setStateName={setName}
        stateEmail={email} setStateEmail={setEmail}
        statePassword={password} setStatePassword={setPassword}
        stateConfirmPassword={confirmPassword} setStateConfirmPassword={setConfirmPassword}
        stateValid={valid} setStateValid={setValid}
        stateSubmit={submit} setStateSubmit={setSubmit}
      />
      ) : (
      <StepTwo 
        setStateValid={setValid}
        name={name}
        email={email}
        password={password}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
