<template>
  <div class="page">
    <offer-bar linkUrl="/promo" linkText="Подробнее"
      >Бесплатный курс по верстке</offer-bar
    >
    <section class="intro">
      <c-header />
    </section>
  </div>
</template>

<script>
import OfferBar from "@/components/general/OfferBar";
import Header from "@/components/general/Header";

export default {
  components: {
    "offer-bar": OfferBar,
    "c-header": Header
  }
};
</script>

<style scoped>
.intro {
  height: 100vh;
  background-image: url("../assets/images/purple_bubble.svg");
  background-position: right top;
  background-repeat: no-repeat;
}
</style>
