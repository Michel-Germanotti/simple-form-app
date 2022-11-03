const StepTwo = ({
    setStateValid,
    name,
    email,
    password
}) => {
    return (
        <div class="container">
            <h1>Results</h1>
            <div class="results">
                <div>
                    <p>Name : {name}</p>
                    <p>Email : {email}</p>
                    <p>Password : {password}</p>
                </div>
                    <button onClick={(event) => {
                        setStateValid(false)
                    }} class="back-button">Edit your information</button>
            </div>
        </div>
    )
}

export default StepTwo;