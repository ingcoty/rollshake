import express from 'express';
const router = express.Router();

// importar el modelo Pedido
import Pedido from '../models/pedido';

// Agregar un pedido
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

// Get con todos los pedidos
router.get('/pedido', async(req, res) => {
    try {
        const pedidoDb = await Pedido.find();
        res.json(pedidoDb);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error', error
        })
    }
});


// Exportamos la configuración de express app
module.exports = router;