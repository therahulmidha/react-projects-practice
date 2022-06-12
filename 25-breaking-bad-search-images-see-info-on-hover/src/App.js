import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { CharacterGrid } from "./components/characters/CharacterGrid";
import { Header } from "./components/ui/Header";
import { Pagination } from "./components/ui/Pagination";
import { Search } from "./components/ui/Search";
import { getPaginatedResult } from "./utils/pagination";
const ROWS_PER_PAGE = 10;
function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedItems, setPaginatedItems] = useState([]);

  // could have used context instead of chaining props from one parent to another
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://breakingbadapi.com/api/characters?name=${query}`
      );
      setItems(result.data);
      setPaginatedItems(getPaginatedResult(result.data, 1, ROWS_PER_PAGE).data)
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  const setCurrentPageHandler = (page) => {
    setCurrentPage(page);
  };
  const decCurrentPageHandler = () => {
    setCurrentPage(currentPage - 1);
  };
  const incCurrentPageHandler = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    setPaginatedItems(getPaginatedResult(items, currentPage, ROWS_PER_PAGE).data);
  }, [currentPage, items]);
 
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={paginatedItems} query={query} />
      <Pagination
        totalPages={getPaginatedResult(items, currentPage, ROWS_PER_PAGE).total}
        currentPage={currentPage}
        setCurrentPage={setCurrentPageHandler}
        decCurrentPage={decCurrentPageHandler}
        incCurrentPage={incCurrentPageHandler}
      />
    </div>
  );
}

export default App;
