<template>
  <div>
    <MainNav :menu="menu"></MainNav>
    <Nuxt />
  </div>
</template>
<script>
import MainNav from "@/components/MainNav";

export default {
  data() {
    return {
      menu: [
        { id: 1, path: "/", name: "HOME", meta: { isPrivate: false } },
        { id: 2, path: "/Motos", name: "MOTOS", meta: { isPrivate: false } },
        { id: 3, path: "/coches", name: "COCHES", meta: { isPrivate: false } },
      ],
      Submenu: [{ id: 1, patch: "/", subname: "prueba tu moto" }],
    };
  },

     async mounted() {
    await this.$store.dispatch("login");
  },
  components: {
    MainNav
  }
}

</script>
<style>
</style>
