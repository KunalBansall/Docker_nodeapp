const express = require('express')
const app = express();

const PORT = process.env.PORT || 8000;

app.get('/', (req,res)=>{
    return res.json({message: "Hey I am nodeapp inside container Dockerisation Heyy "});
})


app.listen(PORT, ()=>console.log(`Server started on PORT ${PORT}`))