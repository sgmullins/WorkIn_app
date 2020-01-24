const express = require("express");
const router = express.Router({ mergeParams: true }); //allows us to pull id from app.js(parent router) app.use with the id from req.params
const { asyncErrorHandler, isReviewAuthor } = require("../middleware/user");
const {
  reviewCreate,
  reviewDestroy,
  reviewUpdate
} = require("../controllers/reviews");

/* review reviews create page == /workspots/:id/reviews */
router.post("/", asyncErrorHandler(reviewCreate));

/* PUT reviews update page ==  /workspots/:id/reviews/:review_id */
router.put("/:review_id", isReviewAuthor, asyncErrorHandler(reviewUpdate));

/* DELETE reviews destroy page ==  /workspots/:id/reviews/:review_id */
router.delete("/:review_id", isReviewAuthor, asyncErrorHandler(reviewDestroy));

module.exports = router;
