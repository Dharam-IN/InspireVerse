import app from "./app.js";

app.get("/", function(req, res){
    res.send("Hello world")
})

app.listen(process.env.PORT, (req, res) =>{
    console.log(`Server Running on ${process.env.PORT} Port`)
})