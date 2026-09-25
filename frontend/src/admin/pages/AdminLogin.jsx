import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { LockKeyhole } from "lucide-react";
import { useAuth } from "../../context/useAuth";
import "../admin.css";

const ADMIN_DASHBOARD_PATH = "/manage-riwaaz-7f3a";

const isAdmin = (user) => {
  const role = String(user?.role ?? user?.userRole ?? "").toLowerCase();
  return role === "admin" || role === "administrator";
};

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { user, loading, login, loginMockAdmin, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  if (!loading && isAdmin(user)) {
    return <Navigate to={location.state?.from?.pathname || ADMIN_DASHBOARD_PATH} replace />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const signedInUser =
        email === "admin@riwaaz.test"
          ? loginMockAdmin(email, password)
          : await login(email, password);

      if (!isAdmin(signedInUser)) {
        await logout();
        setError("This account is not authorised to access the admin area.");
        return;
      }

      navigate(location.state?.from?.pathname || ADMIN_DASHBOARD_PATH, { replace: true });
    } catch (loginError) {
      setError(loginError.message || "Unable to sign in. Please check your details.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="admin-login-page">
      <section className="admin-login-card" aria-labelledby="admin-login-title">
        <div className="admin-login-icon" aria-hidden="true"><LockKeyhole size={24} /></div>
        <p className="admin-login-eyebrow">RIWAAZ · RESTRICTED AREA</p>
        <h1 id="admin-login-title">Admin sign in</h1>
        <p className="admin-login-copy">Use an authorised administrator account to continue.</p>

        <form onSubmit={handleSubmit} className="admin-login-form">
          <label htmlFor="admin-email">Email address</label>
          <input id="admin-email" type="email" autoComplete="email" value={email}
            onChange={(event) => setEmail(event.target.value)} required />

          <label htmlFor="admin-password">Password</label>
          <input id="admin-password" type="password" autoComplete="current-password" value={password}
            onChange={(event) => setPassword(event.target.value)} required />

          {error && <p className="admin-login-error" role="alert">{error}</p>}

          <button type="submit" disabled={submitting}>
            {submitting ? "Signing in…" : "Sign in securely"}
          </button>
        </form>
      </section>
    </main>
  );
};

export default AdminLogin;
