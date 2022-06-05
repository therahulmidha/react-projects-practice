import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Launch } from "./components/Launch";
import { Launches } from "./components/Launches";
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Launches />} />
            <Route path="/launch/:flight_number" element={<Launch />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
