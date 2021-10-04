<template>
<div class="container ">
    <div class="row">
        <div class="col-md-6 col-lg-5 ml-auto"></div>
        <div class="col-md-6 col-lg-5 ml-auto">
            <div class="bg-dark p-2" style="--bs-bg-opacity: .6;">
                <h1><b>
                    Haz tu orden <br>
                    ¡A tu gusto! <br>
                    Nosotros nos encargamos</b>
                </h1>
                <p class="text-start">
                    {{ msg }} Es simple; primero selecciona tu antojo, luego elige el tamaño y tu helado favorito, después marca todos los toppings que deseas agregar.¡Listo! has terminado, tu momento de felicidad llegará en contados minutos. <br>
                    Entonces, ¿ya estás listo para cumplir tu antojo?. Da click en el boton de abajo para enviar tu orden.
                </p>
                <div class="btn-box">
                    <a class="btn btn-danger mx-2" href="/pedidos" role="button">Arma tu pedido</a>
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
