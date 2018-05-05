const router = require('express').Router();

router.get('/', (req, res, next) => {
	//res.send('Hello World');
	res.render('index');
});

module.exports = router;