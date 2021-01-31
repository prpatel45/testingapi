const express = require('express');
const Book = require('./model/book');
const router = express.Router();


router.get("/books",async (req,res)=>{

    const book = await Book.find();
    res.send(book);
});

module.exports = router;