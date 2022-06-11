import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { CharacterGrid } from "./components/characters/CharacterGrid";
import { Header } from "./components/ui/Header";
import { Pagination } from "./components/ui/Pagination";
import { Search } from "./components/ui/Search";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // could have used context instead of chaining props from one parent to another
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://breakingbadapi.com/api/characters?name=${query}`
      );
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);
  items.length = 0;
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} query={query} />
      <Pagination />
    </div>
  );
}

export default App;
