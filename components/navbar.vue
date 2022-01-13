<template>
    <div class="navbar">
        <a href="#" class="navbarLink">{{$t('about_me')}} <span class="dots">.</span></a>
        <a href="#" class="navbarLink">{{$t('navbar_des')}} <span class="dots">.</span></a>
        <a href="#" class="navbarLink">{{$t('navbar_motion')}} <span class="dots">.</span></a>
        <a href="#" class="navbarLink">{{$t('navbar_contact')}}</a>
    </div>
</template>
<style scoped>
    .navbarLink{
        color : #fff;
        padding : 0 10px;
    }
    .motionDesignContainer > .navbar > .navbarLink, .contactContainer > .navbar > .navbarLink{
        color: #806857;
    }
    span.dots{
        width:15px;
        height:15px;
        font-family: 'Quicksand', sans-serif;
        font-size: 7vh;
    }
</style>
<script>
export default {
    name : 'Navbar',
    props: {
        color: String,
    },
    /*mounted() {
         const navbar = document.querySelector('.navbar')
         navbar.style.color = this.color
         console.log(this.color)
    }*/
}
</script>