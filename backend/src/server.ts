import express from "express";
import cors from "cors";
import { candles, reviews, tags } from "./data";

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get("/api/candles", (req, res) => {
    res.send(candles);
})

app.get("/api/candles/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
    const candles_data = candles.filter(candle => candle.name.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(candles_data);
})

app.get("/api/candles/tags", (req, res) => {
    res.send(tags);
})

app.get("/api/candles/tag/:tagName", (req, res) => {
    const tagName = req.params.tagName;
    const candles_data = candles.filter(candle => candle.tags?.includes(tagName));
    res.send(candles_data);
})

app.get("/api/candles/:candleId", (req, res) => {
   const candleId =  req.params.candleId;
   const candle_data = candles.find(candle => candle.id == candleId);
   res.send(candle_data);
})

app.get("/api/reviews", (req, res) => {
    res.send(reviews);
})

app.get("/api/reviews/:candleId", (req, res) => {
    const candleId = req.params.candleId;
    const review_data = reviews.filter(review =>review.candleId == candleId);
    res.send(review_data);
})

app.get("/api/reviews/:id", (req, res) => {
    const id = req.params.id;
    const review_data = reviews.find(review =>review.id == id);
    res.send(review_data)
})

app.post("/api/users/login", (req, res) => {
    const body = req.body;
    const user = sample_users.find(user => user.email === body.email && user.password === body.password);
})


const port = 5001;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})