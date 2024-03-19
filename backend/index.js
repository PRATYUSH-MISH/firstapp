const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const mongoDB = require("./db")
 mongoDB();
 app.use((req,res,next)=>{ /////////react js runing on 3000 locahost
res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type,Accept"
);
next();
 })
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello, world!');
});
app.use('/api', require("./Router/Createuser"));
app.use('/api', require("./Router/DisplayData"));
app.use('/api', require("./Router/OrderData"));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
