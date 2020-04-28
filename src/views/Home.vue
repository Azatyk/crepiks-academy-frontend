<template>
  <div class="page">
    <offer-bar linkUrl="/promo" linkText="Подробнее"
      >Бесплатный курс по верстке</offer-bar
    >
    <c-header />
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

<style scoped></style>
