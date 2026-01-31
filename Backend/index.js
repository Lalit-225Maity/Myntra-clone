const express=require('express');
const app=express();
const dotenv=require('dotenv');
dotenv.config();
app.use(express.json());
const port=process.env.PORT||4000;
app.get('/',(req,res)=>{
    res.send("Hello Lalit");
});
app.get('/profile',(req,res)=>{
    res.send("Hello Lalit");
})
app.listen(port,()=>{
    console.log(`Server running at ${port}`);
    
})