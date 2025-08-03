import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
// import bodyParser from 'body-parser';
import userRouter from './routes/user.js';
import histroyRoyter from './routes/history.js';
const app = express();
const port = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log('MongoDB connection error:', err));

  // set view engine
  app.set('view engine', 'ejs');
  app.set('views', './views'); // Optional if your folder is named 'views'
  app.use(express.static('public'))

// default middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', userRouter);
app.use('/history',histroyRoyter)

app.listen(port,'192.168.1.75', ()=>{
    console.log(`server is runing on port ${port}`)
})