import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const trimmedEmail = email.trim().toLowerCase();
    if (!trimmedEmail || !password) {
      setError("Email and password are required.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = users.find((u) => u.email === trimmedEmail);

    if (!foundUser) {
      setError("Account not found. Please sign up.");
      return;
    }
    if (foundUser.password !== password) {
      setError("Invalid password.");
      return;
    }

    localStorage.setItem(
      "authUser",
      JSON.stringify({
        id: foundUser.id,
        name: foundUser.name,
        email: foundUser.email,
      })
    );

    navigate("/");
  };

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white text-center">
              <h3 className="mb-0">Login</h3>
            </div>

            <div className="card-body">
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
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
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
            </div>

            <div className="card-footer text-center">
              <small>
                Don’t have an account?{" "}
                <Link to="/signup" className="link-primary">
                  Sign up
                </Link>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;