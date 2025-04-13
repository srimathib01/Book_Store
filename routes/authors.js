const express = require('express');
const router = express.Router();
const Author=require('../models/author')

//All authors Route
router.get('/', (req, res) => {
    res.render('authors/index'); 
});


//New Author Route
router.get('/new',(req,res)=> {
    console.log("Rendering new author page...")
    res.render('authors/new',{author: {} })
})

//Create Author Route
router.post('/',(req,res)=>{
    res.send('Create')
})

module.exports = router;
