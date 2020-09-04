let bandas=require('../bandas')

let bandasController={
    index:function(req, res){
        let listas=bandas.lista;
        return res.render('listadoBandas',{listas: listas})
    },
    porId:function(req, res){
        let id = req.params.id;
        bandaPorId=bandas.porId(id)
        return res.render('detalleBanda',{bandaPorId: bandaPorId});
    },

    porGenero: function (req, res){
        let genero=req.params.genero;
        let generoBuscado=bandas.porGenero(genero)
        return res.render('porGenero', {generoBuscado: generoBuscado, genero: genero})
    }
}



module.exports=bandasController