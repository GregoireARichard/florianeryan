<template>
  <div class="navbar" id="navbar">
    <a href="#aboutContainer" class="navbarLink">{{ $t("about_me") }}</a>
    <span class="dots">•</span>
    <a href="#designContainer" class="navbarLink">{{ $t("navbar_des") }}</a>
    <span class="dots">•</span>
    <a href="#motionDesignContainer" class="navbarLink">{{ $t("navbar_motion") }}</a>
    <span class="dots">•</span>
    <a href="#contactContainer" class="navbarLink">{{ $t("navbar_contact") }}</a>
  </div>
</template>
<style scoped>
.navbarLink {
  color: #fff;
  padding: 0 30px;
  width: fit-content;
  height: fit-content;
  font-size: 1.5rem;
  display: flex;
}
.motionDesignContainer > .navbar > .navbarLink,
.contactContainer > .navbar > .navbarLink {
  color: #806857;
}
span.dots {
  font-size: 1.5rem;
  color: #fff;
  font-family: "Quicksand", sans-serif;
}
</style>
<script>
export default {
  name: "Navbar",
  props: {
    color: String,
  },
  /*mounted() {
         const navbar = document.querySelector('.navbar')
         navbar.style.color = this.color
         console.log(this.color)
    }*/
};
</script>