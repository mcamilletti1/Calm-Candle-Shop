import {Router} from 'express';
import { candles, tags } from '../data';
import asyncHandler from 'express-async-handler';
import { CandleModel } from '../models/candle.model';
const router = Router();

router.get("/seed", asyncHandler(
    async (req, res) => {
    const candlesCount = await CandleModel.countDocuments();
    if(candlesCount > 0){
        res.send("Seed is already done!");
        return;
    }
    await CandleModel.create(candles);
    res.send("Seed Is Done!");
}
))

router.get("/", (req, res) => {
    res.send(candles);
})

router.get("/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
    const candles_data = candles.filter(candle => candle.name.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(candles_data);
})

router.get("/tags", (req, res) => {
    res.send(tags);
})

router.get("/tag/:tagName", (req, res) => {
    const tagName = req.params.tagName;
    const candles_data = candles.filter(candle => candle.tags?.includes(tagName));
    res.send(candles_data);
})

router.get("/:candleId", (req, res) => {
   const candleId =  req.params.candleId;
   const candle_data = candles.find(candle => candle.id == candleId);
   res.send(candle_data);
})

export default router;