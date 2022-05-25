import { Route, Routes } from "react-router-dom";
import "./App.css";
import { BookPage } from "./components/BookPage";
import { Books } from "./components/Books";

function App() {
  return <>
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/book/:id" element={<BookPage />} />
    </Routes>
  </>;
}

export default App;
