const express = require('express');
const router = express.Router();
const Spring = require('../models/Spring');

//index route
router.get('/', async (req,res, next) => {
    console.log(req.body, 'this is get all ')
    try{
        const allSprings = await Spring.find();
        res.json({
            status: 200,
            data: allSprings
        })    

    }catch(err){
    res.json({
        status: 500,
        data: err
    })
   }

});


//Create hotspring route
router.post('/', async (req, res) => {

    try{
        console.log(req.body, 'this is req.body before')
        const newSpring = await Spring.create(req.body);
        console.log(req.body, 'this is req.body after')    
        res.json({
            status: 200,
            data: newSpring
        });

    } catch(err){
        console.log(err);
        res.send(err);

    }
});





//show hotspring route
router.get('/:id', async (req, res) => {
    try{

        const foundSpring = await Spring.findById(req.params.id);
        res.json({
            status: 200,
            data: foundSpring
        });

    }catch(err){
        console.log(err)
    }
});

//update hotspring route
router.put('/:id', async (req, res) => {

    try {
      const updatedSpring = await Spring.findByIdAndUpdate(req.params.id, req.body, {new: true});
      res.json({
        status: 200,
        data: updatedSpring
      });
    } catch(err){
      res.send(err)
    }
  });
  
  
  // Delete route mine
  router.delete('/:id', async (req, res) => {
  
    try {
       const deletedSpring = await Spring.findByIdAndRemove(req.params.id);
        res.json({
          status: 200,
          data: deletedSpring
        });
    } catch(err){
      res.send(err);
    }
  });

module.exports = router;