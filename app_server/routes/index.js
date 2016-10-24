var express = require('express');
var router = express.Router();
var ctrlPortfolio = require('../controllers/portfolio');
var ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlPortfolio.profile);
router.get('/index', ctrlPortfolio.profile);
router.get('/work', ctrlPortfolio.work);
router.get('/other', ctrlPortfolio.other);
router.get('/contact', ctrlPortfolio.contact);
router.get('/volunteer', ctrlPortfolio.volunteer);


/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
