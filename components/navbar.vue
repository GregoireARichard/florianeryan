<template>
  <nav class="navbar" id="navbar">
    <a href="#aboutContainer" class="navbarLink">{{ $t("about_me") }}</a>
    <span class="dots">•</span>
    <a href="#designContainer" class="navbarLink">{{ $t("navbar_des") }}</a>
    <span class="dots">•</span>
    <a href="#motionDesignContainer" class="navbarLink">{{ $t("navbar_motion") }}</a>
    <span class="dots">•</span>
    <a href="#contactContainer" class="navbarLink">{{ $t("navbar_contact") }}</a>
  </nav>
</template>
<style scoped>
@import url(assets/style.css);
.motionDesignContainer > .navbar > .navbarLink,
.contactContainer > .navbar > .navbarLink {
  color: #806857;
}
</style>
<script>
export default {
  name: "Navbar",
  props: {
    color: String,
  },
};
</script>