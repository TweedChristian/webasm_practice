const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const serveStatic = require("serve-static");

app.use(express.static("public"));
app.use(
    serveStatic(path.join(__dirname, "../"), {
      extensions: ["html", "js", "wasm", "css"],
    })
);

app.listen(port);
console.log(`App listening on port: ${port}`);