let express=require('express');
let router=express.Router();
let bandasController=require('../Controllers/bandasController');

router.get('/',bandasController.index)
router.get('/id/:id', bandasController.porId)
router.get('/genero/:genero', bandasController.porGenero)

module.exports=router;