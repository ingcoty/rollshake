<template>
<div class="container">
    <div class="row">
        <div class="col-md-6 col-lg-7 ml-auto"></div>
        <div class="col-md-6 col-lg-5 ml-auto">
            <div class="bg-dark p-2" style="--bs-bg-opacity: .6;">
                <h1><b>
                    Haz tu orden <br>
                    ¡A tu gusto! <br>
                    Nosotros nos encargamos</b>
                </h1>
                <p class="text-start">
                    {{ msg }} Es simple... Primero selecciona tu <b>antojo</b>, luego elige el tamaño y tu <b>helado</b> favorito, después marca todos los <b>toppings</b> que deseas agregar. <br>
                    ¡Listo! Ya has terminado! Tu momento de felicidad llegará en pocos minutos. ¿Estás listo para cumplir tu antojo?<br>
                    Da click en el boton de abajo para enviar tu orden.
                </p>
                <div class="btn-box">
                    <!-- <a class="btn btn-danger mx-2" href="/pedidos" role="button">Arma tu pedido</a> -->
                    <a class="btn btn-danger mx-2" @click="$router.push({path: '/pedidos'})" role="button">Arma tu pedido</a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Inicio',
    props: {
        msg: String
    }
}
</script>
