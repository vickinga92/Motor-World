<template>
  <div>
    <MainNav :menu="menu"></MainNav>
    <Showcase></Showcase>
    <Nuxt />
    <MainFooter></MainFooter>
  </div>
</template>
<script>
import MainNav from "@/components/MainNav";
import Showcase from "@/components/Showcase";
import MainFooter from "@/components/MainFooter";


export default {
  data() {
    return {
      menu: [
        { id: 1, path: "/", name: "HOME", meta: { isPrivate: false } },
        { id: 2, path: "/Motos", name: "MOTOS", meta: { isPrivate: false } },
        { id: 3, path: "/coches", name: "COCHES", meta: { isPrivate: false } },
        { id: 4, path: "/brand", name: "brand", meta: { isPrivate: false } },

      ],
      Submenu: [{ id: 1, patch: "/", subname: "prueba tu moto" }],
    };
  },

     async mounted() {
    await this.$store.dispatch("login");
  },
  components: {
    MainNav,
    Showcase,
    MainFooter
  }
}

</script>
<style>
</style>
