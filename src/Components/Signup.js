import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();

    if (!trimmedName || !trimmedEmail || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const exists = users.some((u) => u.email === trimmedEmail);
    if (exists) {
      setError("Email already registered. Please login.");
      return;
    }

    const newUser = {
      id: Date.now(),
      name: trimmedName,
      email: trimmedEmail,
      password,
    };

    localStorage.setItem("users", JSON.stringify([...users, newUser]));
    navigate("/login");
  };

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-sm">
            <div className="card-header bg-success text-white text-center">
              <h3 className="mb-0">Sign Up</h3>
            </div>

            <div className="card-body">
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Min 6 characters"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Repeat password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-success">
                    Create account
                  </button>
                </div>
              </form>
            </div>

            <div className="card-footer text-center">
              <small>
                Already have an account?{" "}
                <Link to="/login" className="link-primary">
                  Login
                </Link>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;