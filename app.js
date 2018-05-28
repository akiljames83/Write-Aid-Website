var express     = require("express"),
    forceSsl    = require('force-ssl-heroku'),
    app         = express();
    
    

//app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(require("express-session")({
    secret : "A KDM original design",
    resave: false,
    saveUninitialized: false
    
}));
//app.use(forceSsl);




app.get("/", function(req, res){
    res.render("index");
});
app.get("/future", function(req, res){
    res.render("future");
});
app.get("/meet", function(req, res){
    res.render("meet");
});
app.get("/summary", function(req, res){
    res.render("summary");
});
app.get("/thanks", function(req, res){
    res.render("thanks");
});
app.get("/demo", function(req, res){
    res.render("demo");
});







app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Write-Aid Website is being served!");
});