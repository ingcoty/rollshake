<template>
<div class="container" >
    <h1><b>Lista de pedidos para la Cocina</b></h1>
    <div class="bg-dark p-2" style="--bs-bg-opacity: .6;" id="tabla">
        <div>
            
            <table class="table" id="tabla">            
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Mesa</th>
                        <th scope="col">Base</th>
                        <th scope="col">Cobertura</th>
                        <th scope="col">Toppings</th>
                        <th scope="col">Terminado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in Pedidos" :key="index">
                        <th scope="row">{{item._id}}</th>
                        <td>{{item.nombre}}</td>
                        <td>{{item.mesa}}</td>
                        <td>{{item.base}}</td>
                        <td>{{item.cobertura}}</td>
                        <td>{{item.toppings}}</td>
                        <td>{{item.terminado}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

            Pedidos:[],
            mensaje: {color: 'success', texto: ''},
            dismissSecs: 5,
            dismissCountDown: 0,
            pedido:{nombre:'',mesa:'',size:'',base:'',cobertura:'',toppings:[]},
        }
    },

    created(){

        this.listarPedidos();

    },

    methods: {

        listarPedidos() {
            this.axios.get('/pedido')
            .then(res=>{
                console.log(res.data);
                this.Pedidos = res.data;
            })
            .catch(e=>{
                console.log('error'+ e);
            })
        }
    }
}
</script>

<style lang="scss">
#tabla {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #dae0e7;
}
</style>