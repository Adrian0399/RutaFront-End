
const { response } = require('express');

const getEventos = ( req, res = response ) => {
    res.json({
        ok: true,
        msg: 'getEvent',
    })
}

const crearEventos = ( req, res = response ) => {
    res.json({
        ok: true,
        msg: 'crearEvent',
    })
}


const actualizarEvento = ( req, res = response ) => {
    res.json({
        ok: true,
        msg: 'updateEvent',
    })
}


const eliminarEventos = ( req, res = response ) => {
    res.json({
        ok: true,
        msg: 'deleteEvent',
    })
}


module.exports = {
    getEventos,
    crearEventos,
    actualizarEvento,
    eliminarEventos,
}

