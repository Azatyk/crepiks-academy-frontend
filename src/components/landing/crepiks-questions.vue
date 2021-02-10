<template>
  <div class="questions">
    <div class="questions-content">
      <h2 class="questions-heading">Остались вопросы?</h2>
      <cButton text="Спросить" class="questions-button" />
      <div class="pay__slide-links">
        <a
          href="https://wa.me/77078139703"
          class="pay__slide-link pay__slide-link-whatsapp"
          target="_blank"
        >
          <img
            src="@/assets/icons/whatsapp.png"
            alt="WhatsApp"
            class="pay__slide-link-icon"
          />
          WhatsApp
        </a>
        <a
          href="https://t.me/CrepiksAcademyBot"
          class="pay__slide-link pay__slide-link-telegram"
          target="_blank"
        >
          <img
            src="@/assets/icons/telegram.png"
            alt="Telegram"
            class="pay__slide-link-icon"
          />
          Telegram
        </a>
        <a
          href="https://www.instagram.com/crepiks_academy/"
          class="pay__slide-link pay__slide-link-instagram"
          target="_blank"
        >
          <img
            src="@/assets/icons/instagram.png"
            alt="Instagram"
            class="pay__slide-link-icon"
          />
          Instagram
        </a>
        <a
          href="mailto:crepiks.academy@mail.ru"
          class="pay__slide-link pay__slide-link-email"
          target="_blank"
        >
          <img
            src="@/assets/icons/email.png"
            alt="Почта"
            class="pay__slide-link-icon"
          />
          Почта
        </a>
        <a
          href="https://vk.com/public200320088"
          class="pay__slide-link pay__slide-link-vkontakte"
          target="_blank"
        >
          <img
            src="@/assets/icons/vkontakte.png"
            alt="Telegram"
            class="pay__slide-link-icon"
          />
          Вконтакте
        </a>
        <a
          href="tel:87078139703"
          class="pay__slide-link pay__slide-link-number"
        >
          8 (707) 813 97 03
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import cButton from "@/components/common/crepiks-button.vue";

export default {
  components: {
    cButton
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
.questions {
  background-color: $background;
  padding: 10vh 12%;
  box-sizing: border-box;

  &-content {
    max-width: 1440px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  &-heading {
    font-size: 35px;
    color: $dark;
    font-weight: 500;
  }

  &-button {
    margin-left: 50px;
    margin-bottom: -5px;
  }
}

@media (max-width: 1000px) {
  .questions {
    padding: 10vh 5%;
  }
}

@media (max-width: 720px) {
  .questions {
    &-heading {
      font-size: 25px;
    }
  }
}

@media (max-width: 450px) {
  .questions {
    &-heading {
      font-size: 18px;
    }
  }
}
</style>
