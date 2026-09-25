import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Login Data:", formData);

    setMessage("");
    setLoading(true);

    try {
      await login(
        formData.email,
        formData.password
      );

      setMessage("Login successful!");

      // Go to Home page
      setTimeout(() => {
        navigate("/");
      }, 500);

    } catch (error) {
      console.error("Login Error:", error);

      setMessage(
        error.message || "Invalid email or password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="login-page">
      <div className="login-container">

        {/* Left Side */}
        <div className="login-info">

          <p className="login-eyebrow">
            WELCOME BACK TO RIWAAZ
          </p>

          <h1>
            The Taste of
            <span> Tradition</span>
          </h1>

          <p className="login-description">
            Sign in to your Riwaaz account and continue your
            journey through authentic flavours and unforgettable
            dining experiences.
          </p>

          <div className="login-line"></div>

          <p className="login-tagline">
            THE TASTE OF TRADITION
          </p>

        </div>

        {/* Right Side */}
        <div className="login-form-box">

          <p className="form-eyebrow">
            WELCOME BACK
          </p>

          <h2>Sign In</h2>

          <p className="form-subtitle">
            Login to your Riwaaz account.
          </p>

          <form onSubmit={handleSubmit}>

            {/* Email */}
            <div className="login-form-group">

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

            {/* Password */}
            <div className="login-form-group">

              <div className="password-label">

                <label htmlFor="password">
                  Password
                </label>

                <Link to="/forgot-password">
                  Forgot Password?
                </Link>

              </div>

              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />

            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="login-submit-btn"
              disabled={loading}
            >
              <span>
                {loading ? "Logging in..." : "Login"}
              </span>

              {!loading && (
                <span className="login-arrow">
                  ↗
                </span>
              )}
            </button>

            {/* Message */}
            {message && (
              <p className="login-message">
                {message}
              </p>
            )}

          </form>

          {/* Register */}
          <div className="register-prompt">

            <span>
              Don't have an account?
            </span>

            <Link to="/register">
              Register
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Login;