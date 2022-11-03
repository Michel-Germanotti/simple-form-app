const Form = ({ 
    stateName, setStateName, 
    stateEmail, setStateEmail, 
    statePassword, setStatePassword, 
    stateConfirmPassword, setStateConfirmPassword,
    stateValid, setStateValid,
    stateSubmit, setStateSubmit
}) => {

    return (
        <div className="register">
            <h1>Create account</h1>
            <form onSubmit={(event) => {
            event.preventDefault();
            statePassword === stateConfirmPassword && setStateValid(true);
            setStateSubmit(true);
          }}>
            <p>Name</p>
            <input onChange={(event) => {
              setStateName(event.target.value);
            }} type="text" placeholder="Jean Dupont" />
    
            <p>Email</p>
            <input onChange={(event) => {
              setStateEmail(event.target.value);
            }} type="email" placeholder="jeandupont@lereacteur.io" />
    
            <p>Password</p>
            <input 
            onChange={(event) => {
              setStatePassword(event.target.value)
            }} 
            className={stateSubmit ? "error" : ""}
            type="password" placeholder="lErEaCtEuR2022"/>
    
            <p>Confirm your Password</p>
            <input onChange={(event) => {
              setStateConfirmPassword(event.target.value)
            }} 
            className={stateSubmit ? "error" : ""}
            type="password" placeholder="lErEaCtEuR2022"/>
            <input className="submit-button" type="submit" value="Register" />
    
          </form> 
        </div>
        
    )
}

export default Form;




// <form onSubmit={(event) => {
        //     event.preventDefault();
        //     statePassword === stateConfirmPassword && setStateValid(true)
        //   }}>
        //     <p>Name</p>
        //     <input onChange={(event) => {
        //       setStateFirstName(event.target.value);
        //     }} type="text" placeholder="Jean Dupont" />
    
        //     <p>Email</p>
        //     <input onChange={(event) => {
        //       setStateEmail(event.target.value);
        //     }} type="email" placeholder="jeandupont@lereacteur.io" />
    
        //     <p>Password</p>
        //     <input onChange={(event) => {
        //       setStatePassword(event.target.value)
        //     }} type="password" placeholder="lErEaCtEuR2022"/>
    
        //     <p>Confirm your Password</p>
        //     <input onChange={(event) => {
        //       setStateConfirmPassword(event.target.value)
        //     }} type="password" placeholder="lErEaCtEuR2022"/>

           

        //     <input className="submit-button" type="submit" value="Register" />
        //   </form> 