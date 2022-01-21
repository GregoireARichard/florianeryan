<template>
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
        class="whiteArrow sliderControl"
      />
    </div>
  </div>
</template>