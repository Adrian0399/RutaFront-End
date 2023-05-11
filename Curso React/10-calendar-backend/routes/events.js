const express = require("express");

/* 
    Event Routes
    /api/events
*/
const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEventos, crearEventos, actualizarEvento, eliminarEventos } = require("../controllers/events");

const router = Router();


//Todas las validaciones deben de tener el JWT
//Obtener eventos
router.get('/', validarJWT, getEventos);

//Crear un nuevo evento
router.post('/', validarJWT, crearEventos);

//Actualiza Eventos
router.put('/:id', validarJWT, actualizarEvento);

//Borrar evento
router.delete('/:id', validarJWT, eliminarEventos);


module.exports = router;


