require("dotenv").config();
const Workspot = require("../models/workspot");
const Review = require("../models/review");

module.exports = {
  //Create Review
  async reviewCreate(req, res, next) {
    //find the workspot by id
    let workspot = await Workspot.findById(req.params.id);
    //create the review
    // req.body.review.author = req.user._id;
    let review = await Review.create(req.body.review);
    //assign review to workspot
    workspot.reviews.push(review);
    workspot.save();

    req.session.success = "Review Created Successfully!";
    res.redirect(`/workspots/${workspot.id}`);
  },
  //Review Update
  async reviewUpdate(req, res, next) {},
  //Reviews Destroy
  async reviewDestroy(req, res, next) {}
};
