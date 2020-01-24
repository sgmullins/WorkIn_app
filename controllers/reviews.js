require("dotenv").config();
const Workspot = require("../models/workspot");
const { checkReqBody } = require("../middleware/workspot");
const Review = require("../models/review");

module.exports = {
  //Create Review
  async reviewCreate(req, res, next) {
    //find the workspot by id
    let workspot = await Workspot.findById(req.params.id);
    //create the review
    req.body.review.author = req.user._id;
    let review = await Review.create(req.body.review);
    //assign review to workspot
    workspot.reviews.push(review);
    workspot.save();

    req.session.success = "Review Created Successfully!";
    res.redirect(`/workspots/${workspot.id}`);
  },
  //Review Update
  async reviewUpdate(req, res, next) {
    await Review.findByIdAndUpdate(req.params.review_id, req.body.review);
    req.session.success = "Review Updated Successfully";
    res.redirect(`/workspots/${req.params.id}`);
  },
  //Reviews Destroy
  async reviewDestroy(req, res, next) {}
};
