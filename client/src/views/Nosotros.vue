<template>
  <div class="container">
    <h1><b>Conoce sobre nosotros...</b></h1>
    <hr>
      <div class="row align-items-center">
        <div class="col-md-6 ">
          <div class="img-box pr-md-3">
            <img alt="footer_bg" src="../images/Logo.png" class="img-fluid" id="logotipo">
          </div>
        </div>
        <div class="col-md-6">
          <div class="bg-dark p-2" style="--bs-bg-opacity: .6;">
            <div class="heading_container">
              <h2 class="">
                ¿Quiénes somos?
              </h2>
            </div>
            <p class="text-start">
              Somos una experiencia única, dulce y diferente.  El lugar ideal para compartir en familia, amigos o en pareja una deliciosa MALTEADA; elige entre cientos de sabores diferentes y miles de combinaciones, además te ofrecemos la mejor atención al cliente. <br>
              Si buscas un plan en Timaná, Huila; somos los indicados para endulzar tu día. ¡Te esperamos!<br>
              Síguenos en Instagram y Facebook @rollshaketimana
            </p>
          </div>
        </div>
      </div>
    <br><br><br>
      <div class="row align-items-center">
        <div class="col-md-6 ">
          <div class="bg-dark p-2" style="--bs-bg-opacity: .6;">
            <div class="heading_container">
              <h2 class="">
                No pares de soñar, aquí tus antojos no tienen límites. Animate a crear tu monstershake 
              </h2>
            </div>
            <p class="text-start">
              Crea tu malteada en tres sencillos pasos. <br>
              Primero elige el tamaño, aquí tienes dos opciones 12 Oz o 16 Oz, luego selecciona un sabor de helado como base de tu malteada, tienes más de diez opciones. <br>
              Después combina la cobertura del batido y finalmente añade todos los toppings que desees poner sobre ella.   
            </p>
            <!-- <a class="btn btn-danger mx-2" @click="$router.push({path: '/pedidos'})" role="button">Arma tu pedido</a> -->
            <a class="btn btn-danger mx-2" href="/pedidos" role="button">Arma tu pedido</a>
          </div>
        </div>
        <div class="col-md-6 ">
          <div class="img-box pl-md-3">
            <img alt="about img" src="../images/ejemplo1.jpeg" class="img-fluid" id="imagen">
          </div>
        </div>
      </div>
    </div>
</template>

<style>
#logotipo {
    max-width: 50%;
    height: auto;
}
#imagen {
      
    max-width: 50%;
    height: auto;
    border-radius: 50%;
}
</style>