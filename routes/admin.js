const express = require('express')
const router = express.Router()
const AdminController = require('../controllers/Admin')

router.get('/',AdminController.index)
router.get('/show',AdminController.show)
router.post('/store',AdminController.store)
router.put('/update',AdminController.update)
router.delete('/delete',AdminController.destroy)


module.exports = router