<template>
  <footer class="tm-bg-dark-blue footer">
    <div class="container">
      <div class="row">
        <p class="col-sm-12 text-center tm-font-light tm-color-white p-4 tm-margin-b-0">
          Copyright &copy;
          <span class="tm-current-year">2020</span> Motor World
        </p>
        <nuxt-link to="/cookies">
          <button>Política de cookies</button>
        </nuxt-link>
        <nuxt-link to="/privacidad">
          <button>Política de Privacidad</button>
        </nuxt-link>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "MainFooter"
};
</script>
