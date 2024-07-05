const express = require("express");

const app = express();
app.use(express.json());
app.use(express.json());

const HOST = '127.0.0.1';
const PORT = 8042;

app.listen(8042, () => {
    console.log("Server Listening on PORT:", PORT);
  });

app.route("/test")

.get((req, res)=>{
    res.send("GET working");
})

.post((req,res)=>{
    const { name, email } = req.body;
    
    res.send(`Received name: ${name}, email: ${email}`);
});

