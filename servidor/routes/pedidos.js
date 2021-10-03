import express from 'express';
const router = express.Router();

// importar el modelo nota
import Pedido from '../models/pedido';

// Agregar una nota
router.post('/nuevo-pedido', async(req, res) => { 
    const body = req.body;
    try {
        const pedidoDB = await Pedido.create(body);
        res.status(200).json(pedidoDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error', error
        })
    }
});


// Exportamos la configuración de express app
module.exports = router;