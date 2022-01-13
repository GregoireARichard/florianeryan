<template>
  <div>
    <div class="header">
      <svg
        id="svgAccueil"
        data-name="svgAccueil"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="518"
        height="733"
        viewBox="0 0 518 733"
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="0.5"
            x2="0.5"
            y2="1"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stop-color="#ffe1ca" />
            <stop offset="1" stop-color="#f6dcc7" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-2"
            x1="0.5"
            x2="0.5"
            y2="1"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stop-color="#f0d2bc" />
            <stop offset="1" stop-color="#f0d2bc" />
          </linearGradient>
        </defs>
        <rect
          id="Rectangle_1"
          data-name="Rectangle 1"
          width="214"
          height="661"
          transform="translate(303 19)"
          fill="none"
          stroke="#472c0c"
          stroke-width="2"
        />
        <rect
          id="Rectangle_2"
          data-name="Rectangle 2"
          width="214"
          height="661"
          transform="translate(275 1)"
          fill="none"
          stroke="#bb996f"
          stroke-width="2"
        />
        <path
          id="Fond_rond"
          data-name="Fond rond"
          d="M0,222.5C0,99.617,99.617,0,222.5,0h0C345.383,0,445,99.617,445,222.5V682H0Z"
          transform="translate(0 51)"
          fill="url(#linear-gradient)"
        />
        <path
          id="Tracé_1"
          data-name="Tracé 1"
          d="M0,733H445V552.5S340.512,510.719,281,532c-79.275,28.347-118.5,95-222.5,82.5C17.664,609.592,0,733,0,733Z"
          fill="url(#linear-gradient-2)"
        />
        <path
          id="Tracé_2"
          data-name="Tracé 2"
          d="M445,733H0V523s80.988,75.719,140.5,97c79.275,28.348,161.2-10.348,241,16.5C420.483,649.616,445,733,445,733Z"
          fill="#fce1cd"
        />
        <path
          id="Tracé_3"
          data-name="Tracé 3"
          d="M0,733H445V591s-75.988,67.219-135.5,88.5c-79.275,28.348-135.705-20.848-215.5,6C55.017,698.616,0,733,0,733Z"
          fill="#ffe7d5"
        />
      </svg>
      <div class="titlesContainer">
        <h1 class="mainTitle">Portfolio</h1>
        <h2 class="name">Floriane Ryan</h2>
        <div class="arrowContainer">
          <a href="#menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="94.977"
              height="100"
              viewBox="0 0 94.977 348.595"
              class="arrow"
            >
              <g
                id="arrow"
                data-name="Arrow"
                transform="translate(-1.876)"
              >
                <path
                  id="Tracé_4"
                  data-name="Tracé 4"
                  d="M49.364,150.253,1.876,68H96.853Z"
                  transform="translate(0 198.342)"
                  fill="#855c2c"
                />
                <path
                  id="Tracé_5"
                  data-name="Tracé 5"
                  d="M14,266.342V0"
                  transform="translate(35.364 0)"
                  fill="none"
                  stroke="#855c2c"
                  stroke-width="4"
                />
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div class="menuContainer" id="menu">
      <!-- tree stuff-->
    </div>

    <div class="aboutContainer">
      <Navbar />
      <div class="aboutmeSubContainer">
        <div class="aboutmeTitleContainer">
          <h2 class="aboutmeTitle">{{ $t("about_me") }}</h2>
        </div>
        <div class="aboutmeFlexContainer">
          <div class="aboutImgContainer">
            <img
              :src="require('../assets/img/about.png')"
              alt="about me"
              class="aboutmeImg"
            />
          </div>
          <div class="aboutTextContainer">
            <p class="aboutText">{{ $t("about_text1") }}</p>
            <p class="aboutText">{{ $t("about_text2") }}</p>
            <p class="aboutText">{{ $t("about_text3") }}</p>
            <p class="aboutText">{{ $t("about_text4") }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="designContainer">
      <Navbar />
      <div class="designSubContainer">
        <div class="designFlexLeft">
          <div class="designTitleContainer">
            <h2 class="designTitle">{{ $t("navbar_des") }}</h2>
          </div>
          <div class="designCarouselContainer">
            <img
              :src="require('../assets/img/synerg.png')"
              alt="synerghetic"
              class="synergImg"
            />
          </div>
        </div>
        <div class="designFlexRight">
          <div class="projectDesignTitleContainer">
            <h3 class="projectDesignTitle">Synerg'Hetic</h3>
          </div>
          <p class="projectDesignText">
            {{ $t("synerg_text") }} <br />
            {{ $t("synerg_text2") }}
          </p>

          <img
            :src="require('../assets/img/whitearrow.png')"
            alt="whiteArrow"
            class="whiteArrow"
          />
        </div>
      </div>
    </div>

    <div class="motionDesignContainer">
      <Navbar />
      <div class="designSubContainer">
        <div class="designFlexLeft flexLeftMotion">
          <div class="projectDesignTitleContainer">
            <h3 class="projectDesignTitle">Blossoming agency</h3>
          </div>
          <p class="projectDesignText">{{ $t("blossom_text") }} <br /></p>

          <img
            :src="require('../assets/img/brownarrow.png')"
            alt="whiteArrow"
            class="whiteArrow"
          />
        </div>
        <div class="designFlexRight">
          <div class="designTitleContainer motionTitleContainer">
            <h2 class="designTitle">{{ $t("navbar_motion") }}</h2>
          </div>
          <div class="designCarouselContainer">
            <img
              :src="require('../assets/img/thumbnail.png')"
              alt="synerghetic"
              class="synergImg"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="contactContainer">
      <Navbar />
      <div class="contactTitleContainer">
        <h3 class="contactTitle">{{ $t("contact_me") }}</h3>
      </div>
      <div class="contactPolygon">
        <div class="rountPart">
          <p class="contactme">{{ $t("contact_me_text") }}</p>
        </div>
        <div class="squarePart">
          <p class="mailAdress">florianeryan [at] gmail.com</p>
          <a href="#" class="social">
            <img
              :src="require('../assets/img/linkedin.png')"
              alt="linkedin"
              class="icons"
            />
          </a>
          <a href="#" class="social">
            <img
              :src="require('../assets/img/insta.png')"
              alt="instagram"
              class="icons"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url(assets/style.css);
/*.motionDesignContainer > .navbar{
      
    }*/
.navbar {
  color: #806857;
}
</style>
<style module>
@import url(assets/style.css);
</style>

<script>
export default {};
</script>
