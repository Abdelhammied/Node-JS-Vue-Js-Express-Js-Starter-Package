const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/admin/DashboardController');

router.get("/dashboard", dashboardController.Index);


module.exports = router;