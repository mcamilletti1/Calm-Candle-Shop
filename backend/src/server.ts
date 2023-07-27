import express from "express";
import cors from "cors";

const app = express();
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get("/api/candles", (req, res) => {
    res.send("hello world!");
})

const port = 5001;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})