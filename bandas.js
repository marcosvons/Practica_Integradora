let bandas={
    lista: [
    {
        nombre: 'Soda Stereo',
        integrantes: 3,
        genero: 'soft_rock',
        topCanciones: 'Musica Ligera, Tratame Suavemente, Persiana Americana',
        cover: '/img_bandas/soda.jpg',
        id: 0,
        video: 'https://www.youtube.com/watch?v=OX-us7PEfkc'
    },
    {
        nombre: 'Coldplay' ,
        integrantes: 4,
        genero: 'soft_rock',
        topCanciones: 'Viva la Vida, Fix You, Yellow',
        cover: '/img_bandas/coldplay.jpg' ,
        id: 1,
        video: 'https://www.youtube.com/watch?v=RB-RcX5DS5A' ,

    },
    {
        nombre: 'Greta Van Fleet',
        integrantes: 4,
        genero: 'Hard_Rock',
        topCanciones: 'Black Smoke Rising, The One, When The Curtains Fall',
        cover: '/img_bandas/Greta_Van_Fleet.jpg',
        id: 2,
        video: 'https://www.youtube.com/watch?v=aJg4OJxp-co',

    },
    {
        nombre: 'Arctic Monkeys',
        integrantes: 4,
        genero: 'Rock_Progresivo',
        topCanciones: '505, Do I Wanna Know, Ultracheese',
        cover: '/img_bandas/arcticmonkeys.jpg',
        id: 3,
        video:'https://www.youtube.com/watch?v=bpOSxM0rNPM' ,

    },
    {
        nombre: 'Maná' ,
        integrantes: 5,
        genero: 'soft_rock',
        topCanciones: 'Mariposa Traicionera, Labios Compartidos, Rey Tiburon' ,
        cover: '/img_bandas/maxresdefault.jpg',
        id: 4,
        video:'https://www.youtube.com/watch?v=Njbm_MABQJE' ,

    },
    {
        nombre: 'Pink Floyd',
        integrantes: 4,
        genero: 'Rock_Progresivo',
        topCanciones: 'Another Brick in the Wall, Money, Time',
        cover: '/img_bandas/PinkFloyd.jpg',
        id: 5,
        video: 'https://www.youtube.com/watch?v=YR5ApYxkU-U',

    },
    {
        nombre: 'La Beriso' ,
        integrantes: 5,
        genero: 'Hard_Rock',
        topCanciones: 'Traicionero, Legui, Ella',
        cover: '/img_bandas/beriso.jpg',
        id: 6,
        video: 'https://www.youtube.com/watch?v=uo8qDCDZhK0',

    },
    {
        nombre: 'Bob Marley',
        integrantes: 1,
        genero: 'Reggae',
        topCanciones: 'Three Little Birds, Sun is Shinning, Jamming',
        cover: '/img_bandas/bobmarley.jpg',
        id: 7,
        video: 'https://www.youtube.com/watch?v=IV5QsOaMtLk',

    },
    {
        nombre: 'Los Cafres',
        integrantes: 8,
        genero: 'Reggae',
        topCanciones: 'Tus Ojos, Bastara, Casi q me pierdo',
        cover: '/img_bandas/loscafres.jpg',
        id: 8,
        video: 'https://www.youtube.com/watch?v=1cNWZYQtioE',

    },
    {
        nombre: 'Dread Mar I',
        integrantes: 5,
        genero: 'Reggae',
        topCanciones: 'Nada, Tu sin mi, Hoja en blanco',
        cover: '/img_bandas/dreadmari.jpg',
        id: 9,
        video: 'https://www.youtube.com/watch?v=ICsWmsPdV0k',

    }],
    porId: function(req){
        bandaBuscada=[]
        for (let i=0; i<this.lista.length; i++){
            if (this.lista[i].id==req){
                bandaBuscada.push(this.lista[i]);
            }
        }
    return bandaBuscada
    },
    porGenero: function(req,res){
        let generoBuscado=[]
        for (i=0; i<this.lista.length; i++){
            if(this.lista[i].genero==req){
                generoBuscado.push(this.lista[i]);                 
            }
        }
    return generoBuscado
    }

}

    module.exports=bandas;