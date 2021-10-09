<template>
<div class="footer_container">
    <div class="footer_bg_box">
        <img alt="footer_bg" src="../images/footer_bg.jpg" class="img-fluid">
    </div>
    <!-- info section -->
    <section class="info_section ">
        <div class="info_container ">
            <div class="container">
                <div class="info_contact ">
                    <a href="#" class="link-box">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        <span>
                            Calle 10 # 8-03, Barrio el Progreso, Timaná - Huila
                        </span>
                    </a>
                    <a href="#" class="link-box">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                        <span>
                            Call +57 3117484914
                        </span>
                    </a>
                    <a href="#" class="link-box">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        <span>
                            rollshaketimana@gmail.com
                        </span>
                    </a>
                </div>

            </div>
        </div>
    </section>

    <!-- end info section -->

    <!-- footer section -->
    <footer class="footer_section">
        <div class="container">
            <p>
                &copy; <span id="displayYear"></span>
                Mision Tic 2021
            </p>
        </div>
    </footer>
    <!-- footer section -->

</div>
</template>

<style>
.footer_container {
  position: relative;
  padding-bottom: 545px;
}

.footer_container .footer_bg_box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}

.footer_container .footer_bg_box img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  -o-object-position: center bottom;
     object-position: center bottom;
}

/* info section */
.info_section {
  color: #000000;
  padding: 75px 0 60px 0;
}

.info_section .row {
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.info_section .info_contact {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.info_section .info_contact .link-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  color: #f26483;
  margin-bottom: 35px;
}

.info_section .info_contact .link-box i {
  width: 45px;
  height: 45px;
  line-height: 45px;
  border: 1px solid #f26483;
  text-align: center;
  border-radius: 5px;
  font-size: 18px;
  margin-right: 10px;
}

.info_section .info_contact .link-box:hover i {
  color: #ff9e6a;
}

.info_section .social_container {
  margin-top: 15px;
}

.info_section .social-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  margin-top: 15px;
}

.info_section .social-box a {
  margin: 0 5px;
  width: 45px;
  height: 45px;
  border-radius: 5px;
  border: 1px solid #f26483;
  text-align: center;
  line-height: 45px;
  font-size: 22px;
  color: #f26483;
}

.info_section .social-box a:hover {
  color: #ff9e6a;
}

/* end info section */
/* footer section*/
.footer_section {
  position: relative;
  text-align: center;
}

.footer_section p {
  color: #000000;
  margin: 0;
}

.footer_section p a {
  color: inherit;
}
</style>