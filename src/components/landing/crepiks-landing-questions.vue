<template>
  <div class="questions">
    <div class="questions-content">
      <div class="questions-text">
        <h2 class="questions-heading">Остались вопросы?</h2>
        <div class="questions-subheading">Напишите нам!</div>
      </div>
      <div class="questions-links">
        <a
          href="https://wa.me/77078139703"
          class="questions-link questions-link-whatsapp"
          target="_blank"
        >
          <i class="bx bxl-whatsapp questions-link-icon"></i>

          WhatsApp
        </a>
        <a
          href="https://t.me/CrepiksAcademyBot"
          class="questions-link questions-link-telegram"
          target="_blank"
        >
          <i class="bx bxl-telegram questions-link-icon"></i>
          Telegram
        </a>
        <a
          href="https://www.instagram.com/crepiks_academy/"
          class="questions-link questions-link-instagram"
          target="_blank"
        >
          <i class="bx bxl-instagram questions-link-icon"></i>
          Instagram
        </a>
        <a
          href="mailto:crepiks.academy@mail.ru"
          class="questions-link questions-link-email"
          target="_blank"
        >
          <i class="bx bx-mail-send questions-link-icon"></i>
          Почта
        </a>
        <a
          href="https://vk.com/public200320088"
          class="questions-link questions-link-vkontakte"
          target="_blank"
        >
          <i class="bx bxl-vk questions-link-icon"></i>
          Вконтакте
        </a>
        <a href="tel:87078139703" class="questions-link questions-link-number">
          8 (707) 813 97 03
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
.questions {
  background-color: $background;
  padding: 11vh 12%;
  box-sizing: border-box;
  margin-top: 100px;
  width: 100%;

  &-content {
    max-width: 1440px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
  }

  &-text {
    width: 400px;
  }

  &-heading {
    width: 400px;
    font-size: 35px;
    color: $dark;
    font-weight: 500;
  }

  &-subheading {
    font-size: 25px;
    margin-top: 10px;
    color: $primary;
    opacity: 0.8;
  }

  &-button {
    margin-left: 50px;
    margin-bottom: -5px;
  }

  &-links {
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 600px;
  }

  &-link {
    margin-right: 20px;
    margin-bottom: 10px;
    padding: 7px 15px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    color: $primary;
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    border-radius: 10px;
    transition: 200ms ease-in-out;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid $primary;

    &:hover {
      opacity: 0.5;
    }

    &-icon {
      font-size: 20px;
      margin-right: 5px;
    }
  }
}

@media (max-width: 1024px) {
  .questions {
    padding: 10vh 7.5%;

    &-text {
      width: 100%;
      display: flex;
    }

    &-heading {
      width: auto;
    }

    &-subheading {
      margin-left: 20px;
    }

    &-content {
      flex-direction: column;
    }

    &-links {
      margin-top: 30px;
      width: 100%;
    }
  }
}

@media (max-width: 720px) {
  .questions {
    &-text {
      flex-direction: column;
    }

    &-heading {
      font-size: 25px;
    }

    &-subheading {
      font-size: 20px;
    }
  }
}

@media (max-width: 450px) {
  .questions {
    &-heading {
      font-size: 18px;
    }

    &-subheading {
      font-size: 14px;
    }

    &-link {
      font-size: 11px;
      padding: 5px 10px;
    }

    &-icon {
      height: 15px;
    }
  }
}

@media (max-width: 414px) {
  .questions {
    margin-top: 30px;

    &-heading {
      font-size: 26px;
      font-weight: 600;
      opacity: 0.9;
    }

    &-subheading {
      font-size: 20px;
      margin-left: 0;
    }
  }
}
</style>
