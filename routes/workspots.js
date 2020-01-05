const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const { asyncErrorHandler } = require('../middleware/user');
const { workspotIndex, workspotNew, workspotCreate, workspotShow, workspotEdit, workspotUpdate, workspotDestroy } = require('../controllers/workspots');

/* GET Workspots index page == /workspots */
router.get('/', asyncErrorHandler(workspotIndex))

/* GET Workspots new page == /workspots/new */
router.get('/new', workspotNew)

/* POST Workspots create page == /workspots upload is multer*/
router.post('/', upload.array('images'), asyncErrorHandler(workspotCreate));

/* GET Workspots show page == /workspots/:id */
router.get('/:id', asyncErrorHandler(workspotShow))

/* GET Workspots edit page == /workspots/:id/edit */
router.get('/:id/edit', asyncErrorHandler(workspotEdit));

/* PUT Workspots update page == /workspots/:id */
router.put('/:id', upload.array('images'), asyncErrorHandler(workspotUpdate));

/* DELETE Workspots destroy page == /workspots/:id */
router.delete('/:id', asyncErrorHandler(workspotDestroy));

module.exports = router;




