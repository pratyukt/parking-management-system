const express = require('express');
const router = express.Router();

const { getAllSpaces, updateSpace, addSpace } = require("../controllers/ParkingSpaceController");
const { protect } = require('../middlewares/Jwtmiddleware');

router.get('/',protect, getAllSpaces); 
router.put('/update', updateSpace); 
router.post('/add', addSpace); 

module.exports = router;