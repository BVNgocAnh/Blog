import Home from "./Pages/Home/Home";
import TopBar from "./Components/TopBar/TopBar";
import Single from "./Pages/Singe/Single";
import Write from "./Pages/Write/Write";
import Settings from "./Pages/Settings/Settings";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  const currentUser = true;
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/register"
          element={currentUser ? <Login /> : <Register />}
        />
        <Route
          exact
          path="/login"
          element={currentUser ? <Home /> : <Login />}
        />
        <Route
          exact
          path="/write"
          element={currentUser ? <Write /> : <Login />}
        />
        <Route
          exact
          path="/settings"
          element={currentUser ? <Settings /> : <Register />}
        />
        <Route exact path="/post/:postId" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
