module.exports = {
  checkReqBody(req, res, next) {
    if (!req.body.workspot.type) {
      req.body.workspot.type = "";
    }
    if (!req.body.workspot.food) {
      req.body.workspot.food = "";
    }
    if (!req.body.workspot.wifi) {
      req.body.workspot.wifi = "";
    }
    if (!req.body.workspot.outlet) {
      req.body.workspot.outlet = "";
    }
    if (!req.body.workspot.parking) {
      req.body.workspot.parking = "";
    }
    if (!req.body.workspot.food) {
      req.body.workspot.food = "";
    }
    if (!req.body.workspot.alcohol) {
      req.body.workspot.alcohol = "";
    }
    if (!req.body.workspot.openLate) {
      req.body.workspot.openLate = "";
    }
    if (!req.body.workspot.lat) {
      req.body.workspot.lat = "";
    }
    if (!req.body.workspot.lng) {
      req.body.workspot.lng = "";
    }
  }
};
