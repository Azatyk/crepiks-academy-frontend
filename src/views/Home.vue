<template>
  <div class="page">
    <offer-bar linkUrl="/promo" linkText="Подробнее"
      >Бесплатный курс по верстке</offer-bar
    >
  </div>
</template>

<script>
import OfferBar from "@/components/general/OfferBar";

export default {
  components: {
    "offer-bar": OfferBar
  }
};
</script>

<style scoped></style>
