import React  from 'react';
import Personaje from './Personajes';
import Img1 from './assets/img/1.jpg';
import Img2 from './assets/img/2.jpg';
import Img3 from './assets/img/3.jpg';
import Img4 from './assets/img/4.jpg';
import Img5 from './assets/img/5.jpg';
import Img6 from './assets/img/6.jpg';
import Img7 from './assets/img/7.jpg';
import Img8 from './assets/img/8.jpg';
import Img9 from './assets/img/9.jpg';
import Img10 from './assets/img/10.jpg'; 

const personajes = [
    {
        "id" : 1,
        "nombre": "Monkey D. Luffy",
        "recompensa": "1.500.000.000",
        "rol": "Capitán",
        "edad" : 19,
        "img": Img1
    },
    {
        "id" : 2,
        "nombre": "Roronoa Zoro",
        "recompensa": "320.000.000",
        "rol": "Espadachin",
        "edad" : 21,
        "img": Img2
    },
    {
        "id" : 3,
        "nombre": "Nami",
        "recompensa": "66.000.000",
        "rol": "Navegante",
        "edad" : 20,
        "img": Img3
    },
    {
        "id" : 4,
        "nombre": "Usopp",
        "recompensa": "200.000.000",
        "rol": "Francotirador",
        "edad" : 19,
        "img": Img4
    },
    {
        "id" : 5,
        "nombre": "Vinsmoke Sanji",
        "recompensa": "330.000.000",
        "rol": "Cocinero",
        "edad" : 21,
        "img": Img5
    },
    {
        "id" : 6,
        "nombre": "Tony Tony Chopper",
        "recompensa": "100",
        "rol": "Médico",
        "edad" : 17,
        "img": Img6
    },   
     {
        "id" : 7,
        "nombre": "Nico Robin",
        "recompensa": "130.000.000",
        "rol": "Arqueóloga",
        "edad" : 30,
        "img": Img7
    },
    {
        "id" : 8,
        "nombre": "Franky",
        "recompensa": "94.000.000",
        "rol": "Carpintero naval",
        "edad" : 36,
        "img": Img8
    },
    {
        "id" : 9,
        "nombre": "Brook",
        "recompensa": "83.000.000",
        "rol": "Músico",
        "edad" : 90,
        "img": Img9
    },
    {
        "id" : 10,
        "nombre": "Jinbe",
        "recompensa": "438.000.000",
        "rol": "Pirata",
        "edad" : 46,
        "img": Img10
    }

]

const Contenedor = () => (
    <>
         {
            personajes.map ( c => <Personaje nombre = { c.nombre } edad = { c.edad } recompensa = {c.recompensa} rol = {c.rol} id = {c.id} img ={c.img}/>)
         }
    </>
);

export default Contenedor;