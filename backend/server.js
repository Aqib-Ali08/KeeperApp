import express from 'express'
import dotenv from 'dotenv'
import connectToMongoDB from './db/db.connection.js';
import AuthRoute from './routes/auth.routes.js'

const app = express();
app.use(express.json());
dotenv.config();


const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send("hello World")
})

app.use('/api/auth',AuthRoute)

app.listen(PORT,()=>
{
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`)
})