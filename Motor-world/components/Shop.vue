<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h1>OFERTAS</h1>
        </div>
        <Shop
          v-for="item in products"
          :key="item.id"
          :title="item.title"
          :img="item.img"
          :desc="item.desc"
          :price="item.price"
          :link="item.link"
        >
        </Shop>
      </div>
    </div>
  </div>
</template>

<script>
import Shop from "@/partials/Shop";

export default {
  data() {
    return {
      products: [
        {
          id: 1,
          title: "hola soy el primer producto",
          img: "data:image/jpeg;base64,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",
          desc: "Este producto esta muy bien",
          price: "25€",
          link: ""
        },
        {
          id: 2,
          title: "hola soy el segundo producto",
          img: "https://m.media-amazon.com/images/I/71KB64RoI1L._AC_UL320_.jpg",
          desc: "Este producto esta mejor que bien",
          price: "45€",
          link: ""

        },
        {
          id: 3,
          title: "hola soy el tercer producto",
          img: "https://m.media-amazon.com/images/I/81Ym3HaqUhL._AC_UL320_.jpg",
          desc: "Este producto esta mejor que bien",
          price: "45€",
          link: ""

        },
        {
          id: 4,
          title: "hola soy el cuarto producto",
          img: "https://m.media-amazon.com/images/I/81XmkMQNxbL._AC_UL320_.jpg",
          desc: "Este producto esta mejor que bien",
          price: "45€",
          link: ""

        },
          {
          id: 5,
          title: "hola soy el cuarto producto",
          img: "https://m.media-amazon.com/images/I/61SsnvS1VJL._AC_UL320_.jpg",
          desc: "Este producto esta mejor que bien",
          price: "45€",
          link: "https://www.amazon.es/Impermeable-Invierno-Motociclista-Completo-Pantalla/dp/B07JBLS6XF/ref=sr_1_3_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=guantes+moto&qid=1610139715&sr=8-3-spons&psc=1&smid=A2K10SA5E9JT8Q&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyVDZaUloyWlJFWU5KJmVuY3J5cHRlZElkPUEwMDcwODIwMVgzQzgxRTc5VDlSMyZlbmNyeXB0ZWRBZElkPUEwNjEwNTY5MVc0SUFTQkVCVjVEWCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="

        },
      ],
    };
  },
  components: {
    Shop,
  },
};
</script>

<style>
</style>
