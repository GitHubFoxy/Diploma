const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3001;


const message = {
  message: "Hello World!"
}
app.get("/", (req,res) => {
  res.send(JSON.stringify(message));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
