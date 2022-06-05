const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");
const app = express();
const cors = require("cors");
const path = require("path");

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true, // client tool to make queries to the server
  })
);

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.listen(5000, () => console.log("Server started on 5000"));
