import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { HomePage } from "./pages/Home";
import { IndexPage } from "./view/Index";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/index" element={<IndexPage />} />
      </Routes>
    </Router>
  );
}
