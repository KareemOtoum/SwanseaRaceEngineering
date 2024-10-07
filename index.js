import express from "express";
const app = express();
const port = 3000;
const posts = [];

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

const team = [ 
    {
        name: "Zaine Khizer",
        role: "Team Principal",
        image: ""
    },
    {
        name: "Charlie Best",
        role: "Technical Director",
        image: ""
    },
    {
        name: "Warwick Darden",
        role: "Head of Design",
        image: ""
    },,
    {
        name: "Freddie James",
        role: "Head of Suspension",
        image: ""
    },,
    {
        name: "Tom Fellows",
        role: "Head of Powertrains",
        image: ""
    },,
    {
        name: "Harry Brown",
        role: "Head of Aerodynamics",
        image: ""
    },,
    {
        name: "Tom Streatfield",
        role: "Head of Chasis",
        image: ""
    },,
    {
        name: "Ollie Fish",
        role: "Head of Electrical",
        image: ""
    },,
    {
        name: "Arthur Moucheron",
        role: "Head of Operations",
        image: ""
    },,
    {
        name: "Pari Bhatt",
        role: "Head of Media",
        image: ""
    },,
    {
        name: "Aditya Ramkumar",
        role: "Social Secretary",
        image: ""
    },
]

var pageIndex = 0;

app.get("/", (req, res) =>
{
    pageIndex = 0;
    res.render("index.ejs", { team, pageIndex});
})


app.get("/about", (req, res) =>
{
    pageIndex = 1;
    res.render("about.ejs", {pageIndex});
})

app.listen(port, () =>
{
    console.log("Started App on port " + port);
});
