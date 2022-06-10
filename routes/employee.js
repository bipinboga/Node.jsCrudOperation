const express = require('express')
const router = express.Router()
const EmployeeController = require('../controllers/EmployeeController')

router.get('/',EmployeeController.index)
router.get('/show',EmployeeController.show)
router.post('/store',EmployeeController.store)
router.put('/update',EmployeeController.update)
router.delete('/delete',EmployeeController.destroy)
router.get('/shows',EmployeeController.employee)
// router.post('/delete', (req, res) => {
//     EmployeeController.destroy
// })


module.exports = router