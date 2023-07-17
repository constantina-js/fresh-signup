import { useState } from "preact/hooks";


/*
* Rather than rewrtie the regex over and over again,
* store them as constants and use them throughout code
*/
const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[-+_!@#$%^&*., ?]){8,}/;
const USERNAME_REGEX = /^[a-zA-Z0-9]{1,20}$/;
const CAP_ALPHA_REGEX = /^(?=.*[A-Z])/;
const LOW_ALPHA_REGEX = /^(?=.*[a-z])/;
const NUM_REGEX = /^(?=.*[0-9])/;
const SPECIAL_REGEX = /^(?=.*[-+_!@#$%^&*., ?])/;


export default function Form() {
    
    // state to show or hide password
    const [showPassword, setShowPass] = useState(false);

    // state to show username requirements
    const [showUsersReq, setShowUserReq] = useState(false);

    // state to show password requirements
    const [showPassReq, setShowPassReq] = useState(false);

    // state to show what is currently the password input value
    const [currPassInput, updateCurrPassInput] = useState('');

    // state to show what is currently the username input value
    const [currUserInput, updateCurrUserInput] = useState('');

    // state for current password strength
    const [passwordStrength, updatePassStrength ] = useState('');


    /**
    * Toggles the show password feature
    * @param {Event} e - event
    *
    */
    const togglePass = (e) => {
      e.preventDefault();
      setShowPass(!showPassword);
    }

    /**
    * Checks if a string matches the password regex
    * @param {String} passInput - password input
    *
    */
    const checkPasswordRegex = (passInput: String) => {
        return passInput.match(PASSWORD_REGEX);
    }

    /**
    * Displays username requirements when the user
    * is typing their username in the respective
    * input field
    * @param {Event} e - event
    *
    */
    const handleUserChange = (e) => {
        updateCurrUserInput(e.target.value);
        return e.target.value.length > 0 ? setShowUserReq(true) : setShowUserReq(false);
    }

    /**
    * Displays password requirements when the user
    * is typing their password in the respective input field,
    * as well as calculates the strength of current 
    * password input.
    * @param {Event} e - event
    *
    */
    const handlePasswordChange = (e) => {
        updateCurrPassInput(e.target.value);
        calculatePass(currPassInput);
        return e.target.value.length > 0 ? setShowPassReq(true) : setShowPassReq(false);
    }

    /**
    * Calculates the strength of a password.
    * A weak password is defined here as a password
    * that satisfies the password regex but is 8 characters
    * or less; okay is between 8 and 16 characters; strong
    * is  greater than 16.
    * @param {Event} e - event
    *
    */
    const calculatePass = (passInput: String) => {
        if(passInput.length <= 8 && checkPasswordRegex(passInput)){
            updatePassStrength('Weak');
            return "red";
        } else if ((passInput.length > 8 && passInput.length <= 16) && checkPasswordRegex(passInput) ){
            updatePassStrength('Okay');
            return "orange";
        } else if(passInput.length > 16 && checkPasswordRegex(passInput)) {
            updatePassStrength('Strong');
            return "green";
        }
    }
 
    /*
    * Will admit that the client-side validation here is a little bit of an overkill,
    * having both the form attributes set and the state management/javascript things.
    * I wasn't a fan of the way visually the form's validation was doing things.
    * I made it so that the user should not be able to submit anything until all the
    * input criteria has been met, and the user would know what criteria needs to be
    * met before the submit button is enabled.
    * 
    * As to why I kept the form attributes--extra precaution for my own sanity.
    * 
    */
    return (
      <div>
        <section id="sign-up-form">
            <form method="post">
            <label for="username">Username:</label>
            <input type="text" onkeyUp={handleUserChange} id="username" name="username" placeholder="Username" required pattern="^[a-zA-Z0-9]*$" maxlength="20" />
            <div id="username-criteria" className={showUsersReq ? `show` : `no-show`}>
                <ul>
                    <li className={currUserInput.length <= 20 ? "green" : "red"}>Must be no longer than 20 characters.</li>
                    <li className={currUserInput.match(USERNAME_REGEX) ? "green" : "red"}>Must have only alphanumeric characters.</li>
                </ul>
            </div>
            <label for="password">Password:</label>
            <input type={showPassword ? "text" : "password"} onkeyUp={handlePasswordChange} id="password" name="password" placeholder="Password" required minlength="8" />
            <button type="button" onClick={togglePass} className={`bi bi-eye${showPassword ? `` : `-slash`}`} id="togglePassword" aria-label="toggle show password"></button>
            <div id="password-criteria" className={showPassReq ? `show` : `no-show`}>
                <ul>
                    <li className={currPassInput.length >= 8 ? "green" : "red"}>Must be at least 8 characters long.</li>
                    <li className={currPassInput.match(CAP_ALPHA_REGEX) ? "green" : "red"}>Must contain at least one uppercase letter.</li>
                    <li className={currPassInput.match(LOW_ALPHA_REGEX) ? "green" : "red"}>Must contain at least one lowercase letter.</li>
                    <li className={currPassInput.match(NUM_REGEX) ? "green" : "red"}>Must contain at least one digit.</li>
                    <li className={currPassInput.match(SPECIAL_REGEX) ? "green" : "red"}>Must contain at least special charatcer.</li>
                </ul>
            </div>
            <div id="password-strength" className={`${(checkPasswordRegex(currPassInput)) ? `` : `no-`}show`}>
                <div className={`strength-box ${calculatePass(currPassInput)}-box`}></div>
                <div className={`strength-box ${calculatePass(currPassInput)!== "red" ? calculatePass(currPassInput) : `gray`}-box`}></div>
                <div className={`strength-box ${calculatePass(currPassInput) === "green" ? calculatePass(currPassInput) : `gray`}-box`}></div>
                <span className={calculatePass(currPassInput)}>{passwordStrength}</span>
            </div>
                <button type="submit" disabled={(currUserInput.match(USERNAME_REGEX) && currPassInput.match(PASSWORD_REGEX)) ? false : true}>Sign Up</button>
            </form> 
        </section>
      </div>
    );
  }