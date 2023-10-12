import "./App.css";
import "./component/style.css";
import { CssBaseline } from "@mui/material";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useState } from "react";
import Home from "./pages/Home";
function App() {
  const [auth, setAuth] = useState(false);
  const location = useLocation();

  return (
    <div className="App">
      <CssBaseline />
      <Routes>
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/signup" element={<Signup setAuth={setAuth} />} />
        <Route
          path="/"
          element={
            auth ? (
              <Home setAuth={setAuth} />
            ) : (
              <Navigate to="/login" state={{ from: location }} replace />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
