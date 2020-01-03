const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware/user');
const { workspotIndex, workspotNew, workspotCreate, workspotShow, workspotEdit } = require('../controllers/workspots');

/* GET Workspots index page == /workspots */
router.get('/', asyncErrorHandler(workspotIndex))

/* GET Workspots new page == /workspots/new */
router.get('/new', workspotNew)

/* POST Workspots create page == /workspots */
router.post('/', asyncErrorHandler(workspotCreate));

/* GET Workspots show page == /workspots/:id */
router.get('/:id', asyncErrorHandler(workspotShow))

/* GET Workspots edit page == /workspots/:id/edit */
router.get('/:id/edit', asyncErrorHandler(workspotEdit));

/* PUT Workspots update page == /workspots/:id */
router.put('/:id', (req, res, next) => {
	res.send('UPDATE /workspots/:id')
});

/* DELETE Workspots destroy page == /workspots/:id */
router.delete('/:id', (req, res, next) => {
	res.send('DELETE /workspots/:id')
});

module.exports = router;




