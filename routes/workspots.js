const express = require('express');
const router = express.Router();
const { errorHandler } = require('../middleware/user');
const { getWorkspots, newWorkspot, createWorkspot } = require('../controllers/workspots');

/* GET Workspots index page == /workspots */
router.get('/', errorHandler(getWorkspots))

/* GET Workspots new page == /workspots/new */
router.get('/new', newWorkspot)

/* POST Workspots create page == /workspots */
router.post('/', errorHandler(createWorkspot));

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




