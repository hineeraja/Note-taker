const router = require('express').Router();
const db = require('../db/saveData')

router.get('/notes', (req, res) => {
   db.retrieveNotes().then((data)=> {
    return res.json(data)
   })
});


router.post('/notes', (req, res) => {
   db.addNote(req.body).then((data)=> res.json(data))
});


module.exports = router;