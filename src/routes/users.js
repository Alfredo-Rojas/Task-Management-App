const express = require('express');
const router = express.Router();

router.get('/users/signin', (req, res) => {
  res.send('Sing in to the app'); 
});

router.get('/users/signout', (req, res) => {
  res.send('Sign out!');
});

module.exports = router;