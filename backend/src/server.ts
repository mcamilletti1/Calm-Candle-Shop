const dotenv = require('dotenv');

dotenv.config();
import path from 'path'
import express from "express";
import cors from "cors";
import candleRouter from './routers/candle.router';
import userRouter from './routers/user.router';
import reviewRouter from './routers/review.router';
import orderRouter from './routers/order.router';
import { dbConnect } from './configs/database.config';
dbConnect();

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["https://calm-candle-shop.onrender.com"]
}));

app.use("/api/candles", candleRouter);
app.use("/api/users", userRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/orders", orderRouter);

app.use(express.static('public'))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})
