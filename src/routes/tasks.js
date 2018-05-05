const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('mean-db', ['tasks']);

router.get('/', (req, res, next) => {
	//res.send('API available');
	db.tasks.find((err, tasks) => {
		if(err) return next(err);
		res.json(tasks);
	});
});

router.get('/:id', (req, res, next) => {
	db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, tasks) => {
		if(err) return next(err);
		res.json(tasks);
	});
});

router.post('/', (req, res, next) => {
	const task = req.body;
	if(!tasks.title || !(tasks.isDone + '')) {
		res.status(400).json({
			error: 'Bad data'
		});
	} else {
		db.tasks.save(task, (err, task) => {
			if(err) return next(err);
			res.json(task);
		});
	}
});

router.delete('/:id', (req, res, next) => {
	db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, (err, result) => {
		if(err) return next(err);
		res.json(result);
	});
});

router.put('/:id', (req, res, next) => {
	const task = req.body;
	const updateTask = {};

	if(task.isDone) {
		updateTask.isDone = tasks.isDone;
	}

	if(task.title) {
		updateTask.title = tasks.title;
	}

	if(!updateTask) {
		res.status(400).json({
			error: 'Bad request'
		});
	} else {
		db.tasks.update({_id: mongojs.ObjectId(req.params.id)}, (err, task) => {
			if(err) return next(err);
			res.json(task);
		});
	}

});
module.exports = router;