// App.js
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
import Login from './Components/Login';
import Signup from './Components/Signup'; // <-- make sure this file exists

function App() {
  return (
    <div className="container mt-3">
      {/* Simple navbar so you can SEE buttons */}
      <div className="mb-3">
        <Link to="/">
          <button className="btn btn-secondary me-2">Read</button>
        </Link>
        <Link to="/Create">
          <button className="btn btn-primary me-2">Create</button>
        </Link>
        <Link to="/login">
          <button className="btn btn-outline-primary me-2">Login</button>
        </Link>
        <Link to="/signup">
          <button className="btn btn-outline-success">Signup</button>
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Read />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/Update" element={<Update />} />
        {/* use lowercase paths and match them in Link */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;