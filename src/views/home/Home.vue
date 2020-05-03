<template>
  <div class="page">
    <offer-bar linkUrl="/promo" linkText="Подробнее"
      >Бесплатный курс по верстке</offer-bar
    >
    <section class="intro">
      <c-header />
      <register-section />
      <our-platform-section />
    </section>
  </div>
</template>

<script>
import OfferBar from "@/components/general/OfferBar";
import Header from "@/components/general/Header";
import RegisterSection from "./components/RegisterSection";
import OurPlatformSection from "./components/OurPlatformSection";

export default {
  components: {
    "offer-bar": OfferBar,
    "c-header": Header,
    "register-section": RegisterSection,
    "our-platform-section": OurPlatformSection
  }
};
</script>

<style scoped>
.intro {
  height: 100vh;
  background-image: url("../../assets/images/purple_bubble.svg");
  background-position: right top;
  background-repeat: no-repeat;
  background-size: 50%;
}

@media all and (max-width: 1100px) {
  .intro {
    background-image: none;
  }
}
</style>
