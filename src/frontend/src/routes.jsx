import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Error404 from "./pages/Error404/Error404.jsx";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
