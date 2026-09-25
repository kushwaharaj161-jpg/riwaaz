
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Registration Data:", formData);

    // Check password
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await api.post("/auth/register",formData);
      const data=response.data;
      if (response.status===200 || response.status===201) {
        setMessage("Registration successful! Redirecting to login...");

        // Clear form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
        });

        // Go to Login page after successful registration
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        setMessage(data || "Registration failed.");
      }
    } catch (error) {
      console.error("Registration Error:", error);
      setMessage("Server is not running. Please try again.");
    }
  };

  return (
    <section className="register-page">
      <div className="register-container">

        {/* Left Side */}
        <div className="register-info">
          <p className="register-eyebrow">
            WELCOME TO RIWAAZ
          </p>

          <h1>
            Become a Part of
            <span> Riwaaz</span>
          </h1>

          <p className="register-description">
            Create your Riwaaz account and enjoy a seamless dining
            experience, easy reservations and more.
          </p>

          <div className="register-line"></div>

          <p className="register-tagline">
            THE TASTE OF TRADITION
          </p>
        </div>

        {/* Right Side */}
        <div className="register-form-box">
          <p className="register-form-eyebrow">
            CREATE ACCOUNT
          </p>

          <h2>Join Us</h2>

          <p className="register-subtitle">
            Create your Riwaaz account to continue.
          </p>

          <form onSubmit={handleSubmit}>

            {/* Full Name */}
            <div className="register-form-group">
              <label htmlFor="fullName">
                Full Name
              </label>

              <input
                id="fullName"
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="register-form-group">
              <label htmlFor="email">
                Email Address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone */}
            <div className="register-form-group">
              <label htmlFor="phone">
                Phone Number
              </label>

              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password Row */}
            <div className="register-form-row">

              <div className="register-form-group">
                <label htmlFor="password">
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Create password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="register-form-group">
                <label htmlFor="confirmPassword">
                  Confirm Password
                </label>

                <input
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="register-submit-btn"
            >
              <span>Create Account</span>
              <span className="register-arrow">↗</span>
            </button>

            {/* Message */}
            {message && (
              <p className="register-message">
                {message}
              </p>
            )}

          </form>

          {/* Login Link */}
          <div className="login-prompt">
            <span>
              Already have an account?
            </span>

            <Link to="/login">
              Login
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Register;

