import "./App.css";
import "./component/style.css";
import { CssBaseline } from "@mui/material";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { createContext, useState } from "react";
import Home from "./pages/Home";
import d1 from "./d1.json"
import d2 from "./d2.json"

export const AppContext = createContext()
function App() {
  const [auth, setAuth] = useState(false);
  const location = useLocation();
  const [data1, setData1] = useState(d1)
  const [data2, setData2] = useState(d2)

  return (
    <AppContext.Provider value={{data1, data2}}>
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
    </AppContext.Provider>
  );
}

export default App;
