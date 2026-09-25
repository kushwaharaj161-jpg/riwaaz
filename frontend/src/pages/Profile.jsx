import { useNavigate } from "react-router-dom";
import { UserRound, Mail, Phone, LogOut } from "lucide-react";

import { useAuth } from "../context/useAuth";

const Profile = () => {

  const { user, loading, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {

    await logout();

    navigate("/login");
  };

  if (loading) {
    return (
      <section className="profile-page">
        <h2>Loading Profile...</h2>
      </section>
    );
  }

  if (!user) {
    return (
      <section className="profile-page">
        <div className="profile-container">

          <h2>
            Please login to view your profile.
          </h2>

          <button
            onClick={() => navigate("/login")}
            className="profile-logout-btn"
          >
            Go to Login
          </button>

        </div>
      </section>
    );
  }

  return (
    <section className="profile-page">

      <div className="profile-container">

        <p className="profile-eyebrow">
          MY ACCOUNT
        </p>

        <h1>
          Welcome,
          <span> {user.fullName}</span>
        </h1>

        <div className="profile-card">

          <div className="profile-item">

            <span>
              <UserRound size={16} /> User ID
            </span>

            <strong>
              {user.id}
            </strong>

          </div>

          <div className="profile-item">

            <span>
              <UserRound size={16} /> Full Name
            </span>

            <strong>
              {user.fullName}
            </strong>

          </div>

          <div className="profile-item">

            <span>
              <Mail size={16} /> Email
            </span>

            <strong>
              {user.email}
            </strong>

          </div>

          <div className="profile-item">

            <span>
              <Phone size={16} /> Phone
            </span>

            <strong>
              {user.phone}
            </strong>

          </div>

          <button
            onClick={handleLogout}
            className="profile-logout-btn"
          >

            <LogOut size={18} />

            Logout

          </button>

        </div>

      </div>

    </section>
  );
};

export default Profile;