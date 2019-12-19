const express = require('express');
const router = express.Router({ mergeParams: true }); //allows us to pull id from app.js(parent router) app.use with the id from req.params

/* GET reviews index page == /workspots/:id/reviews */
router.get('/', (req, res, next) => {
	res.send('GET  /workspots/:id/reviews')
});

//Dont need the new review because this will be done on the show page for the workshop
// /* GET reviews new page == /workspots/:id/reviews/new */
// router.get('/new', (req, res, next) => {
// 	res.send('NEW  /workspots/:id/reviews/new')
// });

/* POST reviews create page == /workspots/:id/reviews */
router.post('/', (req, res, next) => {
	res.send('CREATE /reviews/')
});

//Reviews will be visible on the show page for workshops so dont need this
// /* GET reviews show page == /workspots/:id/reviews/:review_id */
// router.get('/:review_id', (req, res, next) => {
// 	res.send('SHOW  /workspots/:id/reviews/:id')
// });

/* GET reviews edit page == /workspots/:id/reviews/:review_id/edit */
router.get('/:review_id/edit', (req, res, next) => {
	res.send('EDIT  /workspots/:id/reviews/:review_id/edit')
});

/* PUT reviews update page ==  /workspots/:id/reviews/:review_id */
router.put('/:review_id', (req, res, next) => {
	res.send('UPDATE  /workspots/:id/reviews/:review_id')
});

/* DELETE reviews destroy page ==  /workspots/:id/reviews/:review_id */
router.delete('/:review_id', (req, res, next) => {
	res.send('DELETE  /workspots/:id/reviews/:review_id')
});

module.exports = router;

