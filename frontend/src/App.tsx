import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={<LandingPage setIsAuthenticated={setIsAuthenticated} />}
      />
    </Routes>
  );
}

export default App;
