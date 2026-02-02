const express=require('express');
const app=express();
const dotenv=require('dotenv');
dotenv.config();
app.use(express.json());
const connectDB=require('./Databases/db');
connectDB();
const items=require('./Router/Items');
app.use('/api',items);
const port=process.env.PORT||4000;
app.listen(port,()=>{
    console.log(`Server running at ${port}`);
    
})