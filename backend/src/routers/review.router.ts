import { Router } from 'express';
import { reviews } from '../data';
import asyncHandler from 'express-async-handler';
import { ReviewModel } from '../models/review.model';
import express from 'express';


const router = express.Router();


router.get("/seed", asyncHandler(
    async (req, res) => {
        const reviewsCount = await ReviewModel.countDocuments();
        if(reviewsCount > 0){
            res.send("Seed is already done!");
            return;
        }

        try {
            console.log("Seeding reviews:", reviews);

        await ReviewModel.create(reviews);
        res.send("Seed is done!");
    } catch (error) {
        console.error("Error seeding reviews:", error);
        res.status(500).send("Seed failed!");
    }
}));

router.get("/", asyncHandler (
    async (req, res) => {
        const allReviews = await ReviewModel.find();
        res.send(allReviews);
}));

router.get("/candle/:candleId", asyncHandler( async (req, res) => {
    const candleId = req.params.candleId;
    const review_data = await ReviewModel.find({ candleId: candleId });
    res.send(review_data);
}))

router.get("/:id", asyncHandler( async (req, res) => {
    const id = req.params.id;
    const review_data = await ReviewModel.findById(id);
    res.send(review_data)
}))

router.post('/', async (req, res) => {
    try {
        const newReview = await ReviewModel.create(req.body);
        res.status(201).json(newReview);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create review.' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedReview = await ReviewModel.findByIdAndDelete(req.params.id);
        res.json(deletedReview);
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete review.' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedReview = await ReviewModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedReview);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update review.' });
    }
});



export default router


