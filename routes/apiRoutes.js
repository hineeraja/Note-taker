
const router = require('express').Router();

const dataSTore = require('../db/dataSTore');


router.get('/notes', function (req, res) {
    dataSTore
        .notesStored()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});

router.post('/notes', (req, res) => {
    dataSTore
        .Noteadd(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
});


router.delete('/notes/:id', function (req, res) {
    dataSTore
        .deleteNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err));
});


module.exports = router;