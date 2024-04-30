import app from "./app.js";

app.listen(process.env.PORT, (req, res) =>{
    console.log(`Server Running on ${process.env.PORT} Port`)
})