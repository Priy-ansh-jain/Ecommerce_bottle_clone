     
 import { FaEye , FaEyeSlash} from "react-icons/fa";
 import React, { useState } from "react";
 import { Client, Account, ID } from "appwrite";
 
 
 
 import "./form.css";
 
 const SignupForm = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
 
   const [emailError, setEmailError] = useState("");
   const [passwordError, setPasswordError] = useState("");
   const [confirmPasswordError, setConfirmPasswordError] = useState("");
   const [firstNameError, setFirstNameError] = useState("");
   const [lastNameError, setLastNameError] = useState("");
   const [showPassword, setShowPassword] = useState(false);
   const [showConfirmPassword , setShowConfirmPassword] = useState(false);
   const handleToggleConfirmPasswordVisibility = () =>{
    setConfirmPasswordError(!showConfirmPassword)
   }
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
   const client = new Client()
   .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
   .setProject("659e92e6eb1b45d3c54c"); // Your project ID
 
   const account = new Account(client);
 
   const validateEmail = () => {
     if (!email.includes("@")) {
       setEmailError("Email must contain '@'");
       return false;
     }
     setEmailError("");
     return true;
   };
 
   const validatePassword = () => {
     if (password.length < 8) {
       setPasswordError("Password must be at least 8 characters long");
       return false;
     }
     setPasswordError("");
     return true;
   };
 
   const validateConfirmPassword = () => {
     if (password !== confirmPassword) {
       setConfirmPasswordError("Passwords do not match");
       return false;
     }
     setConfirmPasswordError("");
     return true;
   };
 
   const validateFirstName = () => {
     if (firstName.trim() === "") {
       setFirstNameError("First Name is required");
       return false;
     }
     setFirstNameError("");
     return true;
   };
 
  //  const validateLastName = () => {
  //    if (lastName.trim() === "") {
  //      setLastNameError("Last Name is required");
  //      return false;
  //    }
  //    setLastNameError("");
  //    return true;
  //  };
 
   const handleSignup = () => {
     if (
       validateEmail() &&
       validatePassword() &&
       validateConfirmPassword() &&
       validateFirstName() 
    
     ) {
       account
         .create(ID.unique(), email, password, firstName,)
         .then((response) => {
           console.log("Signup success:", response);
           // Handle success, e.g., redirect user to dashboard
         })
         .catch((error) => {
           console.error("Signup failed:", error);
           // Handle error, e.g., display error message to user
         });
     }
   };
 
   return (
     <section className="signup">
       <div className="sign_up_page" id="Sign-up">
         <div className="create">
           <h1> Create Account</h1>
         </div>
 
         <form className="signup_form">
           <div className="first_form_part">
             <div className="lableee">
               <label htmlFor="Email">Email Address</label>
               <label htmlFor="Email"> Requierd</label>
             </div>
             <input
               type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
             />
             <div className="error">{emailError}</div>
             <br />
             <div className="lableee">
               <label htmlFor="pwd">Confirm Password</label>
               <label htmlFor="pwd">Requierd</label>
             </div>
 
             <input
               type="password"
               id="see_pwd"
               minLength={10}
               value={confirmPassword}
               onChange={(e) => setConfirmPassword(e.target.value)}
             />
           {showConfirmPassword ?(
              <FaEyeSlash className="eye" onClick={handleToggleConfirmPasswordVisibility} />
           ):(
            <FaEye className="eye" onClick={handleTogglePasswordVisibility} />
           )}
             <div className="error">{confirmPasswordError}</div>
             <br />
             <div className="lableee">
               <label htmlFor="name">First Name</label>
               <label htmlFor="name">Requierd</label>
             </div>
             <input
               type="text"
               value={firstName}
               onChange={(e) => setFirstName(e.target.value)}
             />
             <div className="error">{firstNameError}</div>
             <br />
             <label htmlFor="add">Address Lie 1</label>
             <input type="text" />
             <br />
             <label htmlFor="company">Company Name</label>
             <input type="text" />
             <br />
             <label htmlFor="state">State/Province</label>
             <input type="text" />
             <br />
             <label htmlFor="phone">Phone Number</label>
             <input type="tel" />
             <br />
           </div>
           <div className="second_form_part">
             <div>
               <label htmlFor="pwd">Password</label>
               <label htmlFor="pwd">Requierd</label>
             </div>
             <input
               type="password"
               id="pwd"
               minLength={10}
               value={password}
               onChange={(e) => setPassword(e.target.value)}
             />
            {showPassword ? (
                <FaEyeSlash className="eye" onClick={handleTogglePasswordVisibility} />
              ) : (
                <FaEye className="eye" onClick={handleTogglePasswordVisibility} />
              )}
             <div className="error">{passwordError}</div>
             <br />
             <div className="lableee">
               <label htmlFor="Country">Country</label>
               <label htmlFor="Country">Requierd</label>
             </div>
 
             <select
               id="country"
               name="country"
               className="form-control"
               placeholder="Select Country"
             >
               <option value="Select Country">Select Country</option>
               <option value="Afghanistan">Afghanistan</option>
               <option value="Åland Islands">Åland Islands</option>
               <option value="Albania">Albania</option>
               <option value="Algeria">Algeria</option>
               <option value="American Samoa">American Samoa</option>
               <option value="Andorra">Andorra</option>
               <option value="Angola">Angola</option>
               <option value="Anguilla">Anguilla</option>
               <option value="Antarctica">Antarctica</option>
               <option value="Antigua and Barbuda">Antigua and Barbuda</option>
               <option value="Argentina">Argentina</option>
               <option value="Armenia">Armenia</option>
               <option value="Aruba">Aruba</option>
               <option value="Australia">Australia</option>
               <option value="Austria">Austria</option>
               <option value="Azerbaijan">Azerbaijan</option>
               <option value="Bahamas">Bahamas</option>
               <option value="Bahrain">Bahrain</option>
               <option value="Bangladesh">Bangladesh</option>
               <option value="Barbados">Barbados</option>
               <option value="Belarus">Belarus</option>
               <option value="Belgium">Belgium</option>
               <option value="Belize">Belize</option>
               <option value="Benin">Benin</option>
               <option value="Bermuda">Bermuda</option>
               <option value="Bhutan">Bhutan</option>
               <option value="Bolivia">Bolivia</option>
               <option value="Bosnia and Herzegovina">
                 Bosnia and Herzegovina
               </option>
               <option value="Botswana">Botswana</option>
               <option value="Bouvet Island">Bouvet Island</option>
               <option value="Brazil">Brazil</option>
               <option value="British Indian Ocean Territory">
                 British Indian Ocean Territory
               </option>
               <option value="Brunei Darussalam">Brunei Darussalam</option>
               <option value="Bulgaria">Bulgaria</option>
               <option value="Burkina Faso">Burkina Faso</option>
               <option value="Burundi">Burundi</option>
               <option value="Cambodia">Cambodia</option>
               <option value="Cameroon">Cameroon</option>
               <option value="Canada">Canada</option>
               <option value="Cape Verde">Cape Verde</option>
               <option value="Cayman Islands">Cayman Islands</option>
               <option value="Central African Republic">
                 Central African Republic
               </option>
               <option value="Chad">Chad</option>
               <option value="Chile">Chile</option>
               <option value="China">China</option>
               <option value="Iceland">Iceland</option>
               <option value="India">India</option>
               <option value="Indonesia">Indonesia</option>
               <option value="Iran, Islamic Republic of">
                 Iran, Islamic Republic of
               </option>
               <option value="Iraq">Iraq</option>
               <option value="Ireland">Ireland</option>
               <option value="Isle of Man">Isle of Man</option>
               <option value="Israel">Israel</option>
               <option value="Italy">Italy</option>
               <option value="Jamaica">Jamaica</option>
               <option value="Japan">Japan</option>
               <option value="Jersey">Jersey</option>
               <option value="Jordan">Jordan</option>
               <option value="Kazakhstan">Kazakhstan</option>
               <option value="Kenya">Kenya</option>
               <option value="Kiribati">Kiribati</option>
               <option value="Korea, Democratic People's Republic of">
                 Korea, Democratic People's Republic of
               </option>
               <option value="Korea, Republic of">Korea, Republic of</option>
               <option value="Kuwait">Kuwait</option>
               <option value="Kyrgyzstan">Kyrgyzstan</option>
               <option value="Lao People's Democratic Republic">
                 Lao People's Democratic Republic
               </option>
               <option value="Latvia">Latvia</option>
               <option value="Lebanon">Lebanon</option>
             </select>
             <br />
             <label htmlFor="last_name">Last Name</label>
             <input
               type="text"
              //  value={lastName}
              //  onChange={(e) => setLastName(e.target.value)}
             />
             {/* <div className="error">{lastNameError}</div> */}
             <br />
             <label htmlFor="add">Address Line 2</label>
             <input type="text" />
             <br />
             <label htmlFor="city">Suburb/City</label>
             <input type="text" />
             <br />
             <label htmlFor="zip">Zip/Postcode</label>
             <input type="text" />
             <br />
           </div>
         </form>
         <div className="create_butt">
           <button onClick={handleSignup}>Create Account</button>
         </div>
       </div>
     </section>
   );
 };
 
 export default SignupForm;
 
 // const appwrite = new Appwrite();
 
 // appwrite
 //   .setEndpoint('https://cloud.appwrite.io/v1') // replace with your Appwrite server endpoint
 //   .setProject('659e92e6eb1b45d3c54c') // replace with your Appwrite project ID
 //   .setKey('la_app') // replace with your Appwrite API key
 

//  {signupSuccess ? (
//   <div className="success-message">
//     <p>Thank you for signing up!</p>
//     <button onClick={() => setSignupSuccess(false)}>Sign In</button>
//   </div>
// ) : (
  
//     <div className="create_butt">
//       <button onClick={handleSignup}>Create Account</button>
//     </div>
 
// )}

