import React, { useState } from 'react';
import { Auth } from  'aws-amplify';

const passwordIsValid = (pw, cpw) => {
    console.log('checking passwords:', pw, cpw);
    if (typeof(pw) === 'string' && pw.length >= 8 && pw === cpw) return true;
    console.log('oops invalid pw');
    return false;
};

const signUp = async (username, email, password, confirmPassword) => {
    if (passwordIsValid(password, confirmPassword)) { 
        console.log('attempting sign up');
        try {
            await Auth.signUp({
                username, password, attributes: { email }
            })
            console.log(`signed up ${username} successfully!`)
            console.log('reset form');
            document.getElementById("registerForm").reset();
        } catch (err) {
            console.log('error signing up ...', err)
        }
    }
}

const Register = () => {
    const [ email, setEmail ] = useState("")
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ confirmPassword, setConfirmPassword ] = useState("")

    const handleUsernameChange = e => setUsername(e.target.value);
    const handleEmailChange = e => setEmail(e.target.value);
    const handlePasswordChange = e => setPassword(e.target.value);
    const handleConfirmPasswordChange = e => setConfirmPassword(e.target.value);

    const handleRegister = e => {
        e.preventDefault();
        console.log('calling sign up!');
        signUp(username, email, password, confirmPassword);
    };

    return (
        <React.Fragment>
            <h2>Register</h2>
            <form id="registerForm">
                <div>
                    <label>Username</label>
                    <input type="username" onKeyUp={handleUsernameChange}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" onKeyUp={handleEmailChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" onKeyUp={handlePasswordChange} />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" onKeyUp={handleConfirmPasswordChange} />
                </div>
                <div>
                    <button onClick={handleRegister}>Register</button>
                </div>
            </form>
        </React.Fragment>
    );
};

export default Register;