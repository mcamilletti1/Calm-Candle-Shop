import {Router} from 'express';
import { candles, tags } from '../data';
import asyncHandler from 'express-async-handler';
import { CandleModel } from '../models/candle.model';
import { ReviewModel } from '../models/review.model';
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

router.get("/", asyncHandler( async (req, res) => {
    const candles = await CandleModel.find().populate('reviews');
    for (const candle of candles) {
        const reviewsCount = candle.reviews.length;
        const totalStars = candle.reviews.reduce((total, review) => total + review.rating, 0);
        candle.stars = reviewsCount > 0 ? totalStars / reviewsCount : 0;
        await candle.save();
    }
    res.send(candles);
}))

router.get("/search/:searchTerm", asyncHandler( async (req, res) => {
    const searchRegex = new RegExp(req.params.searchTerm, 'i');
    const candles_data = await CandleModel.find({name: {$regex:searchRegex}})
    res.send(candles_data);
}))

router.get("/tags", asyncHandler( 
    async (req, res) => {
    const tags = await CandleModel.aggregate([
       {
        $unwind:'$tags'
       },
       {
        $group:{
            _id: '$tags',
            count: {$sum: 1}
        }
       },
       {
        $project:{
            _id: 0,
            name: '$_id',
            count: '$count'
        }
       }
    ]).sort({count: -1})

    const all = {
        name : 'All',
        count: await CandleModel.countDocuments()
    }

    tags.unshift(all);
    res.send(tags);
}))

router.get("/tag/:tagName", asyncHandler(
    async (req, res) => {
    const candles_data = await CandleModel.find({tags:req.params.tagName})
    res.send(candles_data);
}))

router.get("/:candleId", asyncHandler(
    async (req, res) => {
    const candle = await CandleModel.findById(req.params.candleId);
    res.send(candle);
}))

export default router;