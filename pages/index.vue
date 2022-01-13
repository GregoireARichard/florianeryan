<template>
  <div>
    <div class="header">
      <div class="titlesContainer">
        <h1 class="mainTitle">Portfolio</h1>
      <h2 class="name">Floriane Ryan</h2>
      <div class="arrowContainer">
        <a href="#menu"><img :src="require('../assets/img/arrow.png')" alt="arrow" class="arrow"></a>
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
          <h2 class="aboutmeTitle">{{ $t('about_me')}}</h2>
        </div>
        <div class="aboutmeFlexContainer">
          <div class="aboutImgContainer">
            <img :src="require('../assets/img/about.png')" alt="about me" class="aboutmeImg">
          </div>
          <div class="aboutTextContainer">
            <p class="aboutText">{{ $t('about_text1')}}</p>
            <p class="aboutText">{{ $t('about_text2')}}</p>
            <p class="aboutText">{{ $t('about_text3')}}</p>
             <p class="aboutText">{{ $t('about_text4')}}</p>
          </div>
        </div>
        
      </div>
    </div>
    <div class="designContainer">
      <Navbar />
      <div class="designSubContainer">
        <div class="designFlexLeft">
          <div class="designTitleContainer">
            <h2 class="designTitle">{{ $t('navbar_des')}}</h2>
          </div>
          <div class="designCarouselContainer">
            <img :src="require('../assets/img/synerg.png')" alt="synerghetic" class="synergImg">
          </div>
        </div>
        <div class="designFlexRight">
          <div class="projectDesignTitleContainer">
            <h3 class="projectDesignTitle"> Synerg'Hetic </h3>
          </div>
          <p class="projectDesignText">
            {{ $t('synerg_text')}} <br>
            {{ $t('synerg_text2')}}
          </p>

          <img :src="require('../assets/img/whitearrow.png')" alt="whiteArrow" class="whiteArrow">
        </div>
      </div>

    </div>
    
    <div class="motionDesignContainer">
      <Navbar />
      <div class="designSubContainer">
        <div class="designFlexLeft flexLeftMotion">
          <div class="projectDesignTitleContainer">
            <h3 class="projectDesignTitle"> Blossoming agency </h3>
          </div>
          <p class="projectDesignText">
            {{ $t('blossom_text')}} <br>
          </p>

          <img :src="require('../assets/img/brownarrow.png')" alt="whiteArrow" class="whiteArrow">
        </div>
        <div class="designFlexRight">
          <div class="designTitleContainer motionTitleContainer">
            <h2 class="designTitle">{{ $t('navbar_motion')}}</h2>
          </div>
          <div class="designCarouselContainer">
            <img :src="require('../assets/img/thumbnail.png')" alt="synerghetic" class="synergImg">
          </div>
        </div>
      </div>
    </div>
    
    <div class="contactContainer">
      <Navbar />
    </div>

  </div>
</template>
<style scoped>
    @import url(assets/style.css);
    /*.motionDesignContainer > .navbar{
      
    }*/
    .navbar{
      color: #806857;
    }
</style>
<style module>
  @import url(assets/style.css);
</style>

<script>
export default {

}
</script>
