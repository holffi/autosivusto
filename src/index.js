require("dotenv").config();

const connection = require("./bin/db");
const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "sivupohjat"));
app.use(express.static("public"));

app.get("/autot", (req, res) => {
  const sql = "SELECT id, merkki, malli, vuosimalli, omistaja FROM auto";
  connection.query(sql, (err, rivit, kentat) => {
    console.log("virhe: ", err, "rivit:", rivit, "kentat:", kentat);

    res.json(rivit);
  });
});

app.get("/autot/:id", (req, res) => {
  const sql =
    "SELECT id, merkki, malli, vuosimalli, omistaja FROM auto WHERE id = ?";
  connection.query(sql, [req.params.id], (err, rivit, kentat) => {
    console.log("virhe: ", err, "rivit:", rivit, "kentat:", kentat);

    res.json(rivit[0]);
  });
});

app.get("/haku", (req, res) => {
  res.render("haku", {
    nimi: "Hakutulos",
    omanimi: "Lenni Kylmäniemi",
    otsikko: "Autosivusto",
    skripti: "haku.js",
  });
});

app.get("/", (req, res) => {
  res.render("index", {
    nimi: "Autolista",
    omanimi: "Lenni Kylmäniemi",
    otsikko: "Autosivusto",
    skripti: "index.js",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
