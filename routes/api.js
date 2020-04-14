let express = require('express');
let router = express.Router();
router.use(express.json());
let entryCollection = require('../models/EntrySchema')
router.get('/', (req, res) => {
    res.send('Created new')
    entryCollection.create({},(errors, results)=>{
        errors ? res.send(errors): res.send(results);
    })

})
router.get('/:id', (req, res) => {
    entryCollection.findOne({firstName:req.params.firstName},(errors, results)=>{
        errors ? res.send(errors): res.send(results);
    })
    // res.send(`get method ${req.params.id} worked`);




}
)
router.post('/', (req, res) => {
    // res.send('post method worked')
    entryCollection.create(req.body, (errors,results)=>{
        errors ? res.send(errors): res.send(results);
    });
    res.send(req.body)



})
router.delete('/', (req, res) => {
    entryCollection.findOneAndDelete({firstName: req.params.firstName}, (errors, results)=>{
        errors ? res.send(errors): res.send(`deleted movie`);
    });
    // res.send('delete method worked')



})
router.put('/:videoTitle', (req, res) => {
    // res.send('post method worked')
    entryCollection.findOneAndUpdate({firstName:req.params.firstName}, req.body, (errors,results)=>{
        errors ? res.send(errors): res.send(results);

    })

})










module.exports = router;