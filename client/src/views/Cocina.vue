<template>
<div class="container">
    <h1><b>Solicitudes para la Cocina</b></h1>
    <hr>
    <div class="bg-dark p-2" style="--bs-bg-opacity: .6;" id="tabla">
        <div>
            
            <table class="table" id="tabla">            
                <thead>
                    <tr>
                        <!-- <th scope="col">#</th> -->
                        <th scope="col"><b>Nombre</b></th>
                        <th scope="col">Mesa</th>
                        <th scope="col">Base</th>
                        <th scope="col">Cobertura</th>
                        <th scope="col">Toppings</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in Pedidos" :key="index">
                        <!-- <th scope="row">{{item._id}}</th> -->
                        <td scope="row"><b>{{item.nombre}}</b></td>
                        <td>{{item.mesa}}</td>
                        <td>{{item.base}}</td>
                        <td>{{item.cobertura}}</td>
                        <td>
                            <p v-for="(i,indice) in item.toppings" :key="indice">{{i}}</p>
                        </td>
                        <td>{{item.estado}}</td>
                        <td>
                            <b-button @click="completarPedido(item._id)" 
                            class="btn-danger btn-sm mx-2">Completar pedido
                            </b-button>
                        </td>
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
            pedido:{nombre:'',mesa:'',size:'',base:'',cobertura:'',toppings:[], estado:''},
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
        },
        
        completarPedido(id){
            console.log(id);
            this.axios.delete(`/pedido/${id}`)
            .then(res => {
                const index = this.Pedidos.findIndex(item => item._id === res.data._id);
                this.Pedidos.splice(index, 1);
                this.mensaje.color = 'danger';
                this.mensaje.texto = 'Pedido Terminado';
                this.showAlert();
            })
            .catch(e => {
            console.log(e.response);
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