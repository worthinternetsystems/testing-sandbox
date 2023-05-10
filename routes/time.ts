import { TimeService } from "../service/service";

var express = require('express');
var router = express.Router();

/* GET todays date. */
router.get('/day', function(req, res, next) {
  const timeService = new TimeService();
  res.render('day', { day: timeService.getDay() });
});

module.exports = router;
