import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { Pagination } from "./components/Pagination";
import { Posts } from "./components/Posts";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPostOnCurrentPage = currentPage * postsPerPage;
  const indexOfFirstPostOnCurrentPage =
    indexOfLastPostOnCurrentPage - postsPerPage;
  const currentPosts = posts.slice(
    indexOfFirstPostOnCurrentPage,
    indexOfLastPostOnCurrentPage
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <h1 className="text-primary mb-3">My Blog</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
