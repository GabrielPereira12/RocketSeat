const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    const items = [
        {
            title: "D",
            message: "esenvolver"
        },
        {
            title: "E",
            message: "voluir"
        },
        {
            title: "M",
            message: "ultiplicar"
        },
        {
            title: "A",
            message: "tuar"
        },
        {
            title: "I",
            message: "ntroduzir"
        },
        {
            title: "S",
            message: "uperar"
        }
    ]

    const subtitle = "Uma linguagem de modelagem para criação de página HTML utilizando JS"

    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle
    });
})

app.get("/sobre", function (req, res) {
    res.render("pages/about");
})

app.listen(8080);
console.log("Servidor iniciado!")