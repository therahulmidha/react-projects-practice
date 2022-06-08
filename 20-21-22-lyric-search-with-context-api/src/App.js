import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Index } from "./components/layout/Index";
import { Navbar } from "./components/layout/Navbar";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </div>
  );
}

export default App;
