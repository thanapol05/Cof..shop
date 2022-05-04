const express = require('express');
const router = express.Router();

const recipController = require('../controllers/recipeController');


router.get('/',recipController.homepage);
router.get('/more',recipController.More);
//router.get("/howto",recipController.Howto);
router.get('/detail/:id',recipController.detail)

router.get("/howto",(req,res) =>{
    res.render('Howto')
})
router.get("/first",(req,res) =>{
    res.render('firstpage')
})

module.exports = router;