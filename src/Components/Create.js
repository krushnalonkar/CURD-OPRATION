import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://67efbf102a80b06b88959c93.mockapi.io/curd", {
        e_name: name,
        e_age: age,
        e_email: email,
      })
      .then(() => {
        window.alert("Data added successfully!");
        navigate("/");
      });
  };

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white text-center">
              <h3 className="mb-0">Create Data</h3>
            </div>

            <div className="card-body">
              <form onSubmit={handlesubmit}>
                <div className="mb-3">
                  <label className="form-label">Enter Name</label>
                  <input
                    type="text"
                    placeholder="name"
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Enter Age</label>
                  <input
                    type="number"
                    placeholder="age"
                    className="form-control"
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Enter Email</label>
                  <input
                    type="email"
                    placeholder="email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>

            <div className="card-footer text-center">
              <Link to="/" className="btn btn-outline-secondary btn-sm">
                Read Data
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;