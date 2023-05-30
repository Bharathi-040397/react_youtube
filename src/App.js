import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "./modules/Home";
import VideoDetailsPage from "./modules/VideoDetailsPage";
import './global.css'

const App = () => {
  return (
    <Router>
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<VideoDetailsPage />} />
      </Routes>
    </div>
    </Router>
  );
};

export default App;
