import React, { useState } from "react";
import { FaEye , FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Client, Account } from "appwrite";
import { useNavigate } from "react-router-dom";

import "./form.css";

const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("659e92e6eb1b45d3c54c");

  const account = new Account(client);

  const navigate = useNavigate();

  const handleSignin = async (event) => {
    event.preventDefault();
  
    try {
      setLoading(true);
      const promise = await account.createEmailSession(email, password);
      console.log("User signed in successfully!", promise);
      // Clear the error state if sign-in is successful
      setError("");
      // Navigate to the desired route
      navigate("/");
    } catch (error) {
      console.error("Error signing in:", error);
      setError("Invalid email or password. Please try again.");
      // Handle sign-in error
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="Signin">
      <div className="Sign_in_page" id="Sign-in">
        <div className="create">
          <h1>Sign In</h1>
      
        </div>

        <form className="signin_form" onSubmit={handleSignin}>
          <div className="first_form_part">
            <label htmlFor="Email">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label htmlFor="pwd">Password</label>
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
            <div className="error">{error}</div>
            <div className="create_butt2">
              <button type="submit" disabled={loading}>
                {loading ? "Signing In..." : "Sign In"}
              </button>
              <a href="">Forgot Your Password ?</a>
            </div>
          </div>
          <div className="second_form2_part">
            <h5>New Customer ?</h5>
            <p>Create an account with us and you will be able to:</p>
            <ul>
              <li>Check Out Faster</li>
              <li>Save Multiple Shipping Addresses</li>
              <li>Access Your Order History</li>
              <li>Track New Orders</li>
            </ul>
            <div className="create_butt2">
              <Link to="/signup">
                <button>Create Account</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SigninForm;
