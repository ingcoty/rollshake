<template>
<div class="container">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6 col-lg-5 ml-auto">
                <div class="bg-dark p-2" style="--bs-bg-opacity: .6;">
                    <h2 class="">
                        <b>Nuestros Productos</b>
                    </h2>
                    <p class="text-start">
                        Se suele decirz que no se puede comprar la felicidad, pero se puede comprar <b>HELADO</b> que es bastante similar! <br>
                        Disfruta de ese instante de felicidad con los productos que solo Rollshake te ofrece. ¿Te parece si iniciamos con una <b>MonsterShake</b> y terminamos con un delicioso <b>Cinnamon Roll</b>?
                    </p>
                    <div class="btn-box">
                        <!-- <a class="btn btn-danger mx-2" href="/pedidos" role="button">Arma tu pedido</a> -->
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <b-carousel id="carousel-1" v-model="slide" :interval="3000" controls indicators img-width="320" img-height="320" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
            <!-- Slides with image -->
            <b-carousel-slide>
                <template #img>
                    <div class="row justify-content-center">
                        <div class="col-md-6">
                            <img class="img-fluid w-20 ejemplo" src="../images/ejemplo1.jpeg" alt="image1">
                        </div>
                        <div class="col-md-6">
                            <img class="img-fluid w-20 ejemplo" src="../images/ejemplo2.jpeg" alt="image2">
                        </div>
                    </div>
                </template>
            </b-carousel-slide>
            <b-carousel-slide>
                <template #img>
                    <div class="row justify-content-center">
                        <div class="col-md-6">
                            <img class="img-fluid w-20 ejemplo" src="../images/ejemplo3.jpeg" alt="image3">
                        </div>
                        <div class="col-md-6">
                            <img class="img-fluid w-20 ejemplo" src="../images/ejemplo4.jpeg" alt="image4">
                        </div>
                    </div>
                </template>
            </b-carousel-slide>
            <b-carousel-slide>
                <template #img>
                    <div class="row justify-content-center">
                        <div class="col-md-6">
                            <img class="img-fluid w-20 ejemplo" src="../images/ejemplo5.jpeg" alt="image5">
                        </div>
                        <div class="col-md-6">
                            <img class="img-fluid w-20 ejemplo" src="../images/ejemplo6.jpeg" alt="image6">
                        </div>
                    </div>
                </template>
            </b-carousel-slide>
            <b-carousel-slide>
                <template #img>
                    <div class="row justify-content-center">
                        <div class="col-md-6">
                            <img class="img-fluid w-20 ejemplo" src="../images/ejemplo7.jpeg" alt="image7">
                        </div>
                        <div class="col-md-6">
                            <img class="img-fluid w-20 ejemplo" src="../images/ejemplo8.jpeg" alt="image8">
                        </div>
                    </div>
                </template>
            </b-carousel-slide>
        </b-carousel>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            slide: 0,
            sliding: null
        }
    },
    methods: {
        onSlideStart(slide) {
            this.sliding = true
        },
        onSlideEnd(slide) {
            this.sliding = false
        }
    }
}
</script>

<style scoped>
.ejemplo {
    width: 320px;
    height: 320px;
    border-radius: 50%;
}
</style>
