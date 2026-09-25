import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

const MOCK_ADMIN_STORAGE_KEY = "riwaaz_mock_admin";
const MOCK_ADMIN_EMAIL = "admin@riwaaz.test";
const MOCK_ADMIN_PASSWORD = "RiwaazAdmin@123";

const getMockAdmin = () => {
  try {
    const storedAdmin = sessionStorage.getItem(MOCK_ADMIN_STORAGE_KEY);
    return storedAdmin ? JSON.parse(storedAdmin) : null;
  } catch {
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check whether user is already logged in
  const checkAuth = async () => {
    const mockAdmin = getMockAdmin();

    if (mockAdmin) {
      setUser(mockAdmin);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:8080/api/auth/profile",
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (response.ok) {
        const data = await response.json();

        console.log("Logged In User:", data);

        setUser(data);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Auth Check Error:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Check authentication when application starts
  useEffect(() => {
    const timer = setTimeout(() => {
      checkAuth();
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  // Login
  const login = async (email, password) => {
    const response = await fetch(
      "http://localhost:8080/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data = await response.text();

    if (!response.ok) {
      throw new Error(data || "Invalid email or password.");
    }

    // Login successful
    // Get logged-in user's profile
    const profileResponse = await fetch(
      "http://localhost:8080/api/auth/profile",
      {
        method: "GET",
        credentials: "include",
      }
    );

    if (!profileResponse.ok) {
      throw new Error("Unable to load user profile.");
    }

    const profileData = await profileResponse.json();

    console.log("Login User:", profileData);

    setUser(profileData);

    return profileData;
  };

  // Demo-only credentials for building and reviewing the admin UI without an API.
  const loginMockAdmin = (email, password) => {
    if (email !== MOCK_ADMIN_EMAIL || password !== MOCK_ADMIN_PASSWORD) {
      throw new Error("Invalid email or password.");
    }

    const mockAdmin = {
      id: "mock-admin",
      name: "Riwaaz Admin",
      email: MOCK_ADMIN_EMAIL,
      role: "admin",
    };

    sessionStorage.setItem(MOCK_ADMIN_STORAGE_KEY, JSON.stringify(mockAdmin));
    setUser(mockAdmin);

    return mockAdmin;
  };

  // Logout
  const logout = async () => {
    sessionStorage.removeItem(MOCK_ADMIN_STORAGE_KEY);
    setUser(null);

    try {
      const response = await fetch(
        "http://localhost:8080/api/auth/logout",
        {
          method: "POST",
          credentials: "include",
        }
      );

      if (response.ok) {
        console.log("User logged out successfully.");
      } else {
        console.error("Logout failed.");
      }
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        loginMockAdmin,
        logout,
        checkAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
