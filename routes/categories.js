const router = require('express').Router();
const Catagory = require('../models/Category');

router.post('/',async (req,res)=>{
  const newCat = new Catagory(req.body);
  try {
    const saveCat = await newCat.save();
    res.status(200).json(saveCat)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.get('/',async (req,res)=>{
  
  try {
    const cats = await Catagory.find();
    res.status(200).json(cats)
  } catch (error) {
    res.status(500).json(error)
  }
})


module.exports = router