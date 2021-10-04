<template>
  <div >
    <h1><b>Conoce sobre nosotros...</b></h1>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6 ">
          <div class="img-box pr-md-3">
            <img alt="footer_bg" src="../images/Logo.png" class="img-fluid" id="imagen">
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
            <a href="about.html" class="">
              Leer mas
            </a>
          </div>
        </div>
      </div>
    </div>
    <section class="about_section about_section2 layout_padding">
    <div class="container">
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
            <a class="btn btn-danger mx-2" @click="$router.push({path: '/pedidos'})" role="button">Arma tu pedido</a>
          </div>
        </div>
        <div class="col-md-6 ">
          <div class="img-box pl-md-3">
            <img alt="about img" src="../images/i7.jpg" class="img-fluid" id="imagenn">
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<style>
#imagen {
      max-width: 50%;
      height: auto;
}
#imagenn {
      max-width: 50%;
      height: auto;
      border-radius: 50%;
}
</style>