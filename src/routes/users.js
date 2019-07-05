const express = require('express');
const router = express.Router();

router.get('/signin', (req, res) => {
  res.send('Sing in to the app'); 
});

router.get('/signout', (req, res) => {
  res.send('Sign out!');
});

module.exports = router;