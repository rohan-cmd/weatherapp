const path = require('path');
const express = require("express");
const app = express();
const port = process.env.PORT || 80;
// require HBS for partial
const hbs = require("hbs");
// path
const staticPath = path.join(__dirname, "../public");
const tamplatePath = path.join(__dirname, "/templates/views");
const partialsPath = path.join(__dirname, "/templates/partials");

// set view engine
app.set("view engine","hbs");
// changing the dir views to temlate
app.set("views",tamplatePath);
// public static path
app.use(express.static(staticPath));
// register the partial
hbs.registerPartials(partialsPath);

// routing 
app.get("/", (req, res)=>{ 
    res.render("index");  
}); 

app.get("/weather", (req, res)=>{
    res.render("weather");  
});
 
app.get("/about", (req, res)=>{
    res.render("about");  
});

app.get("*", (req, res)=>{
    res.render("404err",{
        errMsg : "Opps! Page Not Found"
    });
});

app.listen(port, ()=>{
    console.log("listning on port " + port);
}); 