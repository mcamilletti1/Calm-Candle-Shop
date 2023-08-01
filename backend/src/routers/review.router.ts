import { Router } from 'express';
import { reviews } from '../data';
import asyncHandler from 'express-async-handler';
import { ReviewModel } from '../models/review.model';

const router = Router();


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

router.get("/api/reviews", (req, res) => {
    res.send(reviews);
})

router.get("/api/reviews/:candleId", (req, res) => {
    const candleId = req.params.candleId;
    const review_data = reviews.filter(review =>review.candleId == candleId);
    res.send(review_data);
})

router.get("/api/reviews/:id", (req, res) => {
    const id = req.params.id;
    const review_data = reviews.find(review =>review.id == id);
    res.send(review_data)
})

export default router


