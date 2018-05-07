const express = require('express');
const router = express.Router();

// @route   GET api/posts/test
// @desc    Tests Posts router
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Posts route works!' }));

module.exports = router;
