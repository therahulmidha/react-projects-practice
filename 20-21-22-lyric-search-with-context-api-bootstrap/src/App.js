import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Index } from "./components/layout/Index";
import { Navbar } from "./components/layout/Navbar";
import { Lyrics } from "./components/tracks/Lyrics";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/lyrics/track/:id" element={<Lyrics />} />
      </Routes>
    </div>
  );
}

export default App;
