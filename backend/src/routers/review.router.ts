import { Router } from 'express';
import { reviews } from '../data';

const router = Router();

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
