import dotenv from 'dotenv';
dotenv.config();

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
    origin:["http://localhost:4200"]
}));

app.use("/api/candles", candleRouter);
app.use("/api/users", userRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/orders", orderRouter);





const port = 5001;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})
