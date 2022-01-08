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
    </div>
    <div class="designContainer">
      <Navbar />
    </div>
    
    <div class="motionDesignContainer">
      <Navbar />
    </div>
    
    <div class="contactContainer">
      <Navbar />
    </div>

  </div>
</template>
<style scoped>
    @import url(assets/style.css);
</style>
<style module>
  @import url(assets/style.css);
</style>

<script>
export default {

}
</script>
