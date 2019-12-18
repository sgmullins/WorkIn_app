const express = require('express');
const router = express.Router();

/* GET Workspots index page == /workspots */
router.get('/', (req, res, next) => {
	//Temp workspots array
	let workspots = [
		{ name: "Coffee Hut", image: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" },
		{ name: "Coffee Town", image: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80" },
		{ name: "Coffee plaza", image: "https://images.unsplash.com/photo-1494346480775-936a9f0d0877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1303&q=80" }
	]
	res.render('workspots.ejs', { workspots: workspots });
});

/* GET Workspots new page == /workspots/new */
router.get('/new', (req, res, next) => {
	res.send('NEW /workspots/new')
});

/* POST Workspots create page == /workspots */
router.post('/', (req, res, next) => {
	res.send('CREATE /workspots/')
});

/* GET Workspots show page == /workspots/:id */
router.get('/:id', (req, res, next) => {
	res.send('SHOW /workspots/:id')
});

/* GET Workspots edit page == /workspots/:id/edit */
router.get('/:id/edit', (req, res, next) => {
	res.send('EDIT /workspots/:id/edit')
});

/* PUT Workspots update page == /workspots/:id */
router.put('/:id', (req, res, next) => {
	res.send('UPDATE /workspots/:id')
});

/* DELETE Workspots destroy page == /workspots/:id */
router.delete('/:id', (req, res, next) => {
	res.send('DELETE /workspots/:id')
});

module.exports = router;




