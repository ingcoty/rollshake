<template>
<div class="container">
    <h1><b>Haz Tu Pedido!</b></h1>
    <hr>
    <div class="bg-dark p-2" style="--bs-bg-opacity: .6;">

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

        <form @submit.prevent="hacerPedido()">
            <input type="text" class="form-control my-2" placeholder="Ingrese un nombre" v-model="pedido.nombre">

            <h5 class="text-start">Mesa</h5>
            <select class="form-select" aria-label="Default select example" v-model="pedido.mesa">
                <option selected>Seleccione el numero de mesa</option>
                <option value=1>Mesa 1</option>
                <option value=2>Mesa 2</option>
                <option value=3>Mesa 3</option>
                <option value=4>Mesa 4</option>
                <option value=5>Mesa 5</option>
                <option value=6>Mesa 6</option>
                <option value=7>Mesa 7</option>
                <option value=8>Mesa 8</option>
                <option value=9>Mesa 9</option>
                <option value=10>Mesa 10</option>
            </select>
            <!-- <span>Picked: {{ pedido.mesa }}</span> -->

            <h5 class="text-start">Tamaño</h5>
            <div class="input-group" >
                <div class="input-group-text">
                    <input class="form-check-input mt-0 mx-2" type="radio" id="12oz" value=12 v-model="pedido.size">
                    <label class="form-check-label" for="12oz">
                        12 oz <h5><b>$6.000</b></h5>
                    </label>
                </div>
                <div class="input-group-text">
                    <input class="form-check-input mt-0 mx-2" type="radio" id="16oz" value=16 v-model="pedido.size">
                    <label class="form-check-label" for="16oz">
                        16 oz <h5><b>$7.000</b></h5>
                    </label>
                </div>
                <!-- <span>Picked: {{ pedido.size }}</span> -->
            </div>

            <h5 class="text-start">Base</h5>
            <div class="input-group">
                <div class="input-group-text">
                    <input class="form-check-input mt-0 mx-2" type="radio" id="Vainilla Chips" value="Vainilla Chips" v-model="pedido.base">
                    <label class="form-check-label" for="Vainilla Chips">
                        Vainilla Chips
                    </label>
                </div>
                <div class="input-group-text">
                    <input class="form-check-input mt-0 mx-2" type="radio" id="Brownie" value="Brownie" v-model="pedido.base">
                    <label class="form-check-label" for="Brownie">
                        Brownie
                    </label>
                </div>
                <div class="input-group-text">
                    <input class="form-check-input mt-0 mx-2" type="radio" id="Chocolate" value="Chocolate" v-model="pedido.base">
                    <label class="form-check-label" for="Chocolate">
                        Chocolate
                    </label>
                </div>
                <div class="input-group-text">
                    <input class="form-check-input mt-0 mx-2" type="radio" id="Tiramisú" value="Tiramisú" v-model="pedido.base">
                    <label class="form-check-label" for="Tiramisú">
                        Tiramisú
                    </label>
                </div>
                <div class="input-group-text">
                    <input class="form-check-input mt-0 mx-2" type="radio" id="Chicle" value="Chicle" v-model="pedido.base">
                    <label class="form-check-label" for="Chicle">
                        Chicle
                    </label>
                </div>
                <div class="input-group-text">
                    <input class="form-check-input mt-0 mx-2" type="radio" id="Fresa" value="Fresa" v-model="pedido.base">
                    <label class="form-check-label" for="Fresa">
                        Fresa
                    </label>
                </div>
                <div class="input-group-text">
                    <input class="form-check-input mt-0 mx-2" type="radio" id="Arequipe" value="Arequipe" v-model="pedido.base">
                    <label class="form-check-label" for="Arequipe">
                        Arequipe
                    </label>
                </div>
                <div class="input-group-text">
                    <input class="form-check-input mt-0 mx-2" type="radio" id="Nata Maní" value="Nata Maní" v-model="pedido.base">
                    <label class="form-check-label" for="Nata Maní">
                        Nata Maní
                    </label>
                </div>
                <!-- <span>Picked: {{ pedido.base }}</span> -->
            </div>

            <h5 class="text-start">Cobertura</h5>
            <div class="input-group">
                <div class="input-group-text">
                    <input class="form-check-input mt-0 mx-2" type="radio" id="Leche Condensada" value="Leche Condensada" v-model="pedido.cobertura">
                    <label class="form-check-label" for="Leche Condensada">
                        Leche Condensada
                    </label>
                </div>
                <div class="input-group-text">
                    <input class="form-check-input mt-0 mx-2" type="radio" id="Chocolate2" value="Chocolate" v-model="pedido.cobertura">
                    <label class="form-check-label" for="Chocolate2">
                        Chocolate
                    </label>
                </div>
                <div class="input-group-text">
                    <input class="form-check-input mt-0 mx-2" type="radio" id="Arequipe2" value="Arequipe" v-model="pedido.cobertura">
                    <label class="form-check-label" for="Arequipe2">
                        Arequipe
                    </label>
                </div>
                <div class="input-group-text">
                    <input class="form-check-input mt-0 mx-2" type="radio" id="Mora" value="Mora" v-model="pedido.cobertura">
                    <label class="form-check-label" for="Mora">
                        Mora
                    </label>
                </div>
                <!-- <span>Picked: {{ pedido.cobertura }}</span> -->
            </div>

            <h5 class="text-start">Toppings</h5>
            <div class="input-group">
                <div class="input-group-text">
                    <input class="form-check-input mt-0 mx-2" type="checkbox" value="Golochips" id="Golochips" v-model="pedido.toppings">
                    <label for="Golochips">
                        Golochips
                    </label>
                </div>
                <div class="input-group-text">
                    <input class="form-check-input mt-0 mx-2" type="checkbox" value="Sparkies" id="Sparkies" v-model="pedido.toppings">
                    <label class="form-check-label" for="Sparkies">
                        Sparkies
                    </label>
                </div>
                <div class="input-group-text">
                    <input class="form-check-input mt-0 mx-2" type="checkbox" value="Barquillos" id="Barquillos" v-model="pedido.toppings">
                    <label class="form-check-label" for="Barquillos">
                        Barquillos
                    </label>
                </div>
                <div class="input-group-text">
                    <input class="form-check-input mt-0 mx-2" type="checkbox" value="Cerezas" id="Cerezas" v-model="pedido.toppings">
                    <label class="form-check-label" for="Cerezas">
                        Cerezas
                    </label>
                </div>
                <div class="input-group-text">
                    <input class="form-check-input mt-0 mx-2" type="checkbox" value="Brownie" id="Brownie2" v-model="pedido.toppings">
                    <label class="form-check-label" for="Brownie2">
                        Brownie
                    </label>
                </div>
                <div class="input-group-text">
                    <input class="form-check-input mt-0 mx-2" type="checkbox" value="Masmelos" id="Masmelos" v-model="pedido.toppings">
                    <label class="form-check-label" for="Masmelos">
                        Masmelos
                    </label>
                </div>
                <!-- <span>Picked: {{ pedido.toppings }}</span> -->
            </div>
            <b-button class="btn-success my-3" type="submit">Enviar Pedido</b-button>
        </form>
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
            pedido:{nombre:'',size:'',base:'',cobertura:'',toppings:[]},
            
        }
    },

    created(){


    },

    methods: {

        hacerPedido(){
            this.axios.post('/nuevo-pedido',this.pedido)
            .then(res=>{
                this.Pedidos.unshift(res.data);
                this.pedido.nombre='';
                this.pedido.size=false;
                this.pedido.base=false;
                this.pedido.cobertura=false;
                this.pedido.toppings=[];
                this.showAlert();
                this.mensaje.color='success';
                this.mensaje.texto='Pedido realizado!';
            })
            .catch(e=>{
                console.log(e.response);
                this.showAlert();
                this.mensaje.color='danger';
                this.mensaje.texto=e.response.data.error.message;              
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