const express = require('express')
const router = express.Router()


// @desc    Login/Landing Page
// @route   GET /
router.get('/', (req,res) => {
    res.send('Login')
})

// @desc    Dashboard
// @route   GET /dashboard
router.get('/', (req,res) => {
    res.send('Dashboard')
})

module.exports = router