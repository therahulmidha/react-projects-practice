const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();

app.use(fileUpload());

// Upload endpoint
app.post("/upload", (req, res) => {
  if (!req.files?.file) {
    return res.status(400).json({
      msg: "No File uploaded (Upload file with key \"file\")",
    });
  }
  const { file } = req.files;
  file.mv(`../public/uploads/${file.name}`, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        msg: "An error occured in file upload",
      });
    }
    res.json({
        fileName: file.name,
        filePath: `/uploads/${file.name}`
    })
  });
});

app.listen(5000, () => {
  console.log("Server listening on 5000");
});
