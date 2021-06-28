<template>
  <modal :is-modal-open="isModalOpen" @close-modal="$emit('close-modal')">
    <div class="ad-page">
      <img
        src="@/assets/images/part-course-ad-image.png"
        alt="Азамат: Изучишь основы, а что дальше?"
        class="ad-page__image"
      />
      <h2 class="ad-page__title">Азамат дело говорит, а что дальше?</h2>
      <p class="ad-page__description">
        Дальше — больше. Первый интерактив расскажет тебе об основах вёрстки
        сайтов, но дальше нужен более продвинутый уровень.
      </p>
      <p class="ad-page__description">
        Можно попробовать писать код наугад в надежде, что он сработает и ты
        изучишь что-то новое, можно попробовать искать уроки в гугле или на
        ютубе, ну или
        <span class="ad-page__bold"
          >попробуй интерактив «<i>Продвинутая верстка сайтов</i>»</span
        >, чтобы изучить верстку быстро и структурировано.
      </p>
      <p class="ad-page__description ad-page__important">
        Давай так, оформи подписку на месяц до того, как ты закончишь первый
        интерактив и получи скидку
      </p>
      <div class="ad-page__price">-10%</div>
      <subscription-payment />
    </div>
  </modal>
</template>

<script>
import modal from "@/components/common/crepiks-modal.vue";
import subscriptionPayment from "@/components/subscription/crepiks-subscription-payment.vue";

export default {
  props: {
    isModalOpen: {
      type: Boolean,
      required: true
    }
  },

  components: {
    modal,
    "subscription-payment": subscriptionPayment
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.ad-page {
  margin: auto;
  width: 80%;
  display: flex;
  flex-direction: column;
}

.ad-page__image {
  margin-bottom: 80px;
  width: 100%;
  height: auto;
}

.ad-page__title {
  margin-bottom: 30px;
  color: $dark;
  font-size: 28px;
  font-weight: 500;
  opacity: 0.8;
}

.ad-page__description {
  margin-bottom: 20px;
  color: $dark;
  font-size: 22px;
  line-height: 170%;
  opacity: 0.7;
}

.ad-page__bold {
  font-weight: bold;
}

.ad-page__important {
  margin: 30px 0;
  color: $primary;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  line-height: 160%;
}

.ad-page__price {
  margin-right: 30px;
  margin-bottom: 60px;
  color: $primary;
  font-size: 200px;
  font-weight: bold;
  text-align: center;
  opacity: 0.5;
}
</style>
