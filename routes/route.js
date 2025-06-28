const express = require('express');
const router = express.Router();
const { createFormulaire } = require('../controllers/controller');

router.get('/test', (req, res) => {
    res.send('Hello World');

});

router.post('/formulaire', createFormulaire);

module.exports = router;