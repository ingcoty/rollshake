import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const pedidoSchema = new Schema({
    nombre: {type: String, required: [true, 'Nombre obligatorio']},
    mesa: {type: Number, required: [true, 'Mesa obligatoria']},
    size: Number,
    base: String,
    cobertura: String,
    toppings: Array,
    date:{type: Date, default: Date.now},
    terminado: {type: Boolean, default: false}
});

const Pedido = mongoose.model('Pedido', pedidoSchema);
export default Pedido;