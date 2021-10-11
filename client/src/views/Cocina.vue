<template>
<div class="container">
    <h1><b>Solicitudes para la Cocina</b></h1>
    <hr>
    <div class="bg-dark p-2" style="--bs-bg-opacity: .6;" id="tabla">
        <div>
            <b-alert 
                :show="dismissCountDown" 
                :variant="mensaje.color" 
                @dismissed="dismissCountDown=0" 
                @dismiss-count-down="countDownChanged">
                {{mensaje.texto}}
                <b-progress
                variant="warning"
                :max="dismissSecs"
                :value="dismissCountDown"
                height="4px"
                ></b-progress>
            </b-alert>

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
                            <b-button @click="actualizarPedido(item)"
                            class="btn-warning btn-sm mx-2" >completar pedido!
                            </b-button>
                            <b-button @click="desecharPedido(item._id)" 
                            class="btn-danger btn-sm mx-2">Desechar pedido
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
            pedidoEditado:{}
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
        
        desecharPedido(id){
            console.log(id);
            this.axios.delete(`/pedido/${id}`)
            .then(res => {
                const index = this.Pedidos.findIndex(item => item._id === res.data._id);
                this.Pedidos.splice(index, 1);
                this.showAlert();
                this.mensaje.texto = 'Pedido Desechado';
                this.mensaje.color = 'danger';
            })
            .catch(e => {
            console.log(e.response);
            })
        },

        actualizarPedido(item){
            this.pedidoEditado=item;
            this.pedidoEditado.estado="Terminado";
            this.axios.put(`/pedido/${item._id}`, item)
            .then(res => {
                const index = this.Pedidos.findIndex(n => n._id === this.pedidoEditado._id);
                this.Pedidos[index].estado = this.pedidoEditado.estado;
                this.showAlert();
                this.mensaje.texto = 'Pedido Completado!';
                this.mensaje.color = 'success';
            })
            .catch(e => {
                console.log(e.response);
            })
        },
        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
        },
        showAlert() {
            this.dismissCountDown = this.dismissSecs
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